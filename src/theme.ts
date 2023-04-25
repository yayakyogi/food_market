import { extendTheme } from '@chakra-ui/react';

export default extendTheme({
  colors: {
    transparent: 'transparent',
    black: '#020202',
    white: '#fff',
    grey: '#FAFAFC',
    success: '#1ABC9C',
    danger: '#D9435E',
    primary: {
      500: '#FFC700',
    },
    secondary: {
      500: '#8D92A3',
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
