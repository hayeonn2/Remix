import type { PaletteOptions } from '@mui/material';

const Palette = (): PaletteOptions => {
  return {
    primary: {
      light: '#FF6CA9',
      main: '#F4418B',
      dark: '#E2196C',
    },
    secondary: {
      main: '#000000',
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

export default Palette;
