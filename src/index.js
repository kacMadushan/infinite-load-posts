import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import GlobalStyle from './GlobalStyle';
import { ThemeProvider } from 'styled-components';

// app root
const root = document.getElementById('root');

// theme color
const theme = {
    primary: "#1da1f2"
}

ReactDOM.render(
    <ThemeProvider theme={theme}>
        <GlobalStyle />
        <App />
    </ThemeProvider>,
    root
);