import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { RouterProvider } from '@tanstack/react-router';
import { router } from './router/router';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <App/>
    </RouterProvider>
  </React.StrictMode>
)
