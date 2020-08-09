import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import GlobalStyle from './styles/global';

import Routes from './routes';

const App: React.FC = () => (
  <Router>
    <Routes />

    <ToastContainer autoClose={3000} />
    <GlobalStyle />
  </Router>
);

export default App;
