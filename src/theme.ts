import { extendTheme } from '@chakra-ui/react';

export default extendTheme({
  colors: {
    transparent: 'transparent',
    black: '#020202',
    white: '#fff',
    grey: '#FAFAFC',
    success: '#1ABC9C',
    danger: '#D9435E',
    primary: '#FFC700',
    secondary: '#8D92A3',
  },
  fonts: {
    body: 'Poppins, sans-serif',
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
            color: '#8D92A3',
            fontSize: 14,
          },
        },
      },
    },
  },
});
