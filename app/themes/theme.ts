import type {  PaletteOptions, SimplePaletteColorOptions } from '@mui/material';
import { createTheme } from '@mui/material/styles';

// PaletteColor 타입을 확장해 사용하고 싶은 속성 추가
interface ExtendedPaletteColor extends SimplePaletteColorOptions {
  top?: string;
  low?: string;
  gradient?: string;
}

// PaletteOptions 타입을 확장하여 primary, primaryLight 등 색상 팔레트를 ExtendedPaletteColor로 설정
export interface ExtendedPaletteOptions extends PaletteOptions {
  primary?: ExtendedPaletteColor;
  secondary?: ExtendedPaletteColor;
  primaryLight?: ExtendedPaletteColor;
  primaryDark?: ExtendedPaletteColor;
  secondaryLight?: ExtendedPaletteColor;
  secondaryDark?: ExtendedPaletteColor;
  other?: ExtendedPaletteColor;
}

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
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#2E42F5',
      top: '#6714CC',
      low: '#2E68F5',
      contrastText: '#ffffff',
    },
    secondaryLight: {
      main: '#4A70EE',
      top: '#953EFF',
      low: '#5184FF',
      contrastText: '#ffffff',
    },
    secondaryDark: {
      main: '#2919E2',
      top: '#5C21A3',
      low: '#1C48B2',
      contrastText: '#ffffff',
    },
    error: {
      main:'#FA2256',
      contrastText: '#ffffff',
    },
    background: {
      default: '#ffffff',
    },
    text: {
      // title: '#ffffff',
      primary: '#A5ADCF',
      secondary: '#5D6588',
      disabled: '#403D63',
    },

  };
};

// createTheme 함수를 사용하여 MUI 테마 생성
const themePalette = createTheme({
  palette: Palette(),
});

export default themePalette;
