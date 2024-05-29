import { useFetcher } from '@remix-run/react';
import type { Dispatch, ReactNode, SetStateAction } from 'react';
import {
  createContext, useContext, useEffect, useRef, useState,
} from 'react';

import { THEME } from '~/common/constants';

// 해당 코드들을 통해 React 애플리케이션에서 라이트, 다크 모드 전환 가능
// 사용자의 OS 설정에 따라 초기 테마 결정, 또한 테마 변경 시 서버에 변경 내용 전송해 지속성 유지

type ThemeContextType = [THEME | null, Dispatch<SetStateAction<THEME | null>>];

// ThemeContext 를 생성해 현재 테마 상태, 테마 상태를 업데이트하는 함수
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);
const prefersDarkMQ = '(prefers-color-scheme: dark)';

// 사용자의 OS 설정에 따라 기본 테마 결정 (다크모드 선호 -> THEME.DARK, 아니면 LIGHT)
const getPreferredTheme = () =>
  window.matchMedia(prefersDarkMQ).matches ? THEME.DARK : THEME.LIGHT;

// 클라이언트 측에서 실행되는 자바스크립트 코드, 사용자의 OS 설정에 따라 HTML 요소의 클래스, <meta> 태그의 content 속성 업데이트
const clientThemeCode = `
;(() => {
  const theme = window.matchMedia(${JSON.stringify(prefersDarkMQ)}).matches
    ? 'dark'
    : 'light';
  const cl = document.documentElement.classList;
  const themeAlreadyApplied = cl.contains('light') || cl.contains('dark');
  if (themeAlreadyApplied) {
    console.warn('theme is not applied');
  } else {
    cl.add(theme);
  }
  const meta = document.querySelector('meta[name=color-scheme]');
  if (meta) {
    if (theme === 'dark') {
      meta.content = 'dark light';
    } else if (theme === 'light') {
      meta.content = 'light dark';
    }
  } else {
    console.warn('meta is not applied');
  }
})();
`;

// <meta> 태그 렌더링, 클라이언트 측에서 clientThemeCode 실행
function NonFlashOfWrongThemeEls({ ssrTheme }: { ssrTheme: boolean }) {
  const [theme] = useTheme();

  return (
    <>
      <meta
        name="color-scheme"
        content={theme === 'light' ? 'light dark' : 'dark light'}
      />
      {ssrTheme ? null : <script dangerouslySetInnerHTML={{ __html: clientThemeCode }} />}
    </>
  );
}

// ThemeContext.Provider를 사용해 현재 테마 상태와 테마 상태 업데이트 함수를 하위 컴포넌트에 제공함
// useEffect 훅을 사용해 테마 변경 시 서버에 변경 내용 전송
function ThemeProvider({
  children,
  specifiedTheme,
}: {
  children: ReactNode,
  specifiedTheme: THEME | null
}) {
  const [theme, setTheme] = useState<THEME | null>(() => {
    if (specifiedTheme) {
      if (themes.includes(specifiedTheme)) {
        return specifiedTheme;
      } else {
        return null;
      }
    }

    if (typeof window !== 'object') {
      return null;
    }

    return getPreferredTheme();
  });

  const persistTheme = useFetcher();

  // TODO: remove this when persistTheme is memoized properly
  const persistThemeRef = useRef(persistTheme);

  useEffect(() => {
    persistThemeRef.current = persistTheme;
  }, [persistTheme]);

  const mountRun = useRef(false);

  useEffect(() => {
    if (!mountRun.current) {
      mountRun.current = true;

      return;
    }

    if (!theme) {
      return;
    }

    persistThemeRef.current.submit({ theme }, { action: 'api/theme', method: 'post' });
  }, [theme]);

  useEffect(() => {
    const mediaQuery = window.matchMedia(prefersDarkMQ);

    const handleChange = () => {
      setTheme(mediaQuery.matches ? THEME.DARK : THEME.LIGHT);
    };

    mediaQuery.addEventListener('change', handleChange);

    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  return <ThemeContext.Provider value={[theme, setTheme]}>{children}</ThemeContext.Provider>;
}

// ThemeContext에서 현재 테마 상태, 테마 상태 업데이트 함수를 가져옴
function useTheme() {
  const context = useContext(ThemeContext);

  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }

  return context;
}

const themes: Array<THEME> = Object.values(THEME);

// 주어진 값이 유효한 테마 값인지?
function isTheme(value: unknown): value is THEME {
  return typeof value === 'string' && themes.includes(value as THEME);
}

export {
  isTheme,
  NonFlashOfWrongThemeEls,
  ThemeProvider,
  useTheme,
};
