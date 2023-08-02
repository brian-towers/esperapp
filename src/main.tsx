import React from 'react';
import ReactDOM from 'react-dom/client';
import { store } from './store/configureStore.ts';
import { Provider } from 'react-redux';
import './index.css';
import AppRoutes from '@routes/routes.tsx';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
