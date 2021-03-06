import { extendTheme } from '@chakra-ui/react'

const fonts = { mono: `'Menlo', monospace` }

const theme = extendTheme({
  colors: {
    white: '#FFFFFF',
    danger: '#FB3434',
    dangerHover: '#ED3232',
    success: '#1BA81B',
    warning: '#ED8936',

    gray: {
      900: '#3C3C3C',
      800: '#626262',
      700: '#828282',
      600: '#A0A0A0',
      500: '#B9B9B9',
      400: '#CECECE',
      300: '#E0E0E0',
      200: '#EEEEEE',
      100: '#F7F7F7',
      50: '#FDFDFD',
    },

    brand: {
      50: '#FBF5FF',
      100: '#F0DFFD',
      200: '#E2C3FA',
      300: '#CFA6EE',
      400: '#B581DE',
      500: '#8D54B8',
      600: '#672C94',
      700: '#4F1A78',
      800: '#3C0765',
      900: '#2D034D',
    },
  },
  fonts,
  components: {
    Tabs: {
      defaultProps: {
        colorScheme: 'brand',
        color: 'gray.900',
      },
    },
    Button: {
      defaultProps: {
        colorScheme: 'brand',
        borderRadius: 'sm',
      },
    },
  },
})

export default theme
