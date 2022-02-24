// theme.js

import { extendTheme } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'
import { createBreakpoints } from '@chakra-ui/theme-tools'

const config = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
}

// Responsive Styles
const breakpoints = createBreakpoints({
  sm: '320px',
  md: '768px',
  lg: '1024px',
  xl: '1440px',
  '2xl': '2560px',
})

const theme = extendTheme({ 
    config,
    fonts: {
        heading: 'Inter, sans-serif',
        body: 'Inter, sans-serif',
      },
    styles: {
      global: (props) => ({
        body: {
          bg: mode('#FAF9F6', '#111111')(props),
          color: mode('#1A1A1A', '#FFFFFF')(props),
        },
      }),
    },
    breakpoints
})

export default theme