// theme.js

import { extendTheme } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'

const config = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
}

// setup light/dark mode global defaults


const theme = extendTheme({ 
    config,
    fonts: {
        heading: 'Inter, sans-serif',
        body: 'Inter, sans-serif',
      },
    styles: {
      global: (props) => ({
        body: {
          bg: mode('#FFFFFF', '#111111')(props),
          color: mode('#1A1A1A', '#FFFFFF')(props),
        },
      }),
    },
})

export default theme