import * as React from 'react'
import ReactDOM from 'react-dom';
import theme from './theme/theme';
import App from './App';

// Fonts
import '@fontsource/inter'

import { ChakraProvider, ColorModeScript } from '@chakra-ui/react'

ReactDOM.render(
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <App />
    </ChakraProvider>,
  document.getElementById('root')
);