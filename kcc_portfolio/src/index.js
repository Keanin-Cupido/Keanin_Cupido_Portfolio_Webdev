import * as React from 'react'
import * as ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import theme from './theme/theme';

// Pages
import App from './App';
import Projects from './pages/projects/Projects';
import Skills from './pages/skills/Skills';

// Fonts
import '@fontsource/inter/200.css';
import '@fontsource/inter/300.css';
import '@fontsource/inter/700.css';

import { ChakraProvider, ColorModeScript } from '@chakra-ui/react';

ReactDOM.render(
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="projects" element={<Projects />} />
          <Route path="skills" element={<Skills />} />
        </Routes>
      </BrowserRouter>
    </ChakraProvider>,
  document.getElementById('root')
);