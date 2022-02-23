import * as React from 'react'
import ReactDOM from 'react-dom';
import theme from './theme/theme';
import App from './App';

// Fonts
import '@fontsource/inter/200.css';
import '@fontsource/inter/300.css';
import '@fontsource/inter/700.css';

import { ChakraProvider, ColorModeScript } from '@chakra-ui/react';

ReactDOM.render(
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <App />
    </ChakraProvider>,
  document.getElementById('root')
);