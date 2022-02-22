// theme.js

import { extendTheme } from '@chakra-ui/react'

const config = {
  initialColorMode: 'light',
  useSystemColorMode: false,
}

const theme = extendTheme({ 
    config,
    fonts: {
        heading: 'Inter, sans-serif',
        body: 'Inter, sans-serif',
      },
})

export default theme