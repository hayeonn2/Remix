import type {  PaletteOptions, SimplePaletteColorOptions } from '@mui/material';
// import { Palette } from '@mui/material';
import { createTheme } from '@mui/material/styles';

// PaletteColor 타입을 확장하여 test 속성을 추가합니다.
interface ExtendedPaletteColor extends SimplePaletteColorOptions {
  top?: string;
  low?: string;
  gradient?: string;
}

// PaletteOptions 타입을 확장하여 primary 색상 팔레트를 ExtendedPaletteColor로 설정합니다.
export interface ExtendedPaletteOptions extends PaletteOptions {
  primary?: ExtendedPaletteColor;
  primaryLight?: ExtendedPaletteColor;
  primaryDark?: ExtendedPaletteColor;
  // augmentColor? : ExtendedPaletteColor;
  other?: ExtendedPaletteColor;
}

// Palette 함수는 ExtendedPaletteOptions 타입의 객체를 반환합니다.
const Palette = (): ExtendedPaletteOptions => {
  return {
    primary: {
      main: '#F4418B',
      top: '#C569CF',
      low: '#EE609C',
      contrastText: '#ffffff',
    },
    primaryLight: {
      main: '#FF6CA9',
      top:'#EB98F4',
      low: '#FF8EBE',
      contrastText: '#ffffff',
    },
    primaryDark: {
      main: '#E2196C',
      top: '#D33FE3',
      low: '#E84288',
      contrastText: '#fff',
    },
    secondary: {
      main: '#2E42F5',
    },
    other: {
      main: '#f00',
      contrastText: '#ffffff',
    },
    background: {
      default: '#ffffff',
    },
    text: {
      primary: '#000000',
      secondary: '#000000',
    },
  };
};

// createTheme 함수를 사용하여 MUI 테마를 생성합니다.
const themePalette = createTheme({
  palette: Palette(),
});

export default themePalette;
