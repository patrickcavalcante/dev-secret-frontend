import React from 'react';
import { ThemeProvider } from 'styled-components';

const theme = {
  colors: {
    primary: '#AE1D1D',
    primaryLight: '#FFF3F3',
    secundary: '#00FF19',
    light: '#FFFFFF',
  },
};

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;
