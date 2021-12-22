import React from 'react';
import ReactDOM from 'react-dom';
import GlobalStyles from './styles/GlobalStyle';
import Typography from './styles/Typography';
import App from './App';


ReactDOM.render(
  <React.StrictMode>
    <GlobalStyles />
    <Typography />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


