import { extendTheme } from '@chakra-ui/react';

export default extendTheme({
  colors: {
    transparent: 'transparent',
    black: '#111',
    white: '#fff',
    grey: '#fbfbfb',
    body: '#767676',
    success: '#43a047',
    danger: '#DC3545',
    muted: '#b6b6b6',
    secondary: '#f6b701',
    primary: {
      main: '#243d97',
      50: '#e3f2fd',
      100: '#b6bedc',
      200: '#919ecb',
      300: '#6d7eba',
      400: '#495da8',
      500: '#243d97',
      600: '#1e337e',
      700: '#182965',
      800: '#121f4c',
      900: '#0c1432',
    },
  },
  fonts: {
    body: 'Inter, sans-serif',
  },
  button: {
    defaultProps: {
      size: 'md',
    },
    fontSize: 14,
  },
  components: {
    Input: {
      baseStyle: {
        field: {
          _placeholder: {
            color: '#b6b6b6',
            fontSize: 14,
          },
        },
      },
    },
  },
});
