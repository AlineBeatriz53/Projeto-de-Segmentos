import React from 'react';
import ReactDOM from 'react-dom/client';
import { LoginPage }from './pages/login-page/page-login';
import { App } from './App';


export {  };


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <LoginPage />
  </React.StrictMode>
);
