import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { ThemeContext, ThemeDetails,  } from './context/ThemeContext';
import { AuthContextProvider } from './context/AuthContext'

ReactDOM.render(
  <React.StrictMode>
    <AuthContextProvider>
    <ThemeDetails>
    <App />
    </ThemeDetails>
    </AuthContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

