import React from 'react'
import ReactDom from 'react-dom/client'
import { ThemeProvider } from '@mui/material/styles'
import { RouterProvider } from '@tanstack/react-router'
import { router } from './router'
import App from './App.tsx'
import theme from './theme.tsx'
import Navbar from './components/Navbar.tsx'

const root = ReactDom.createRoot(document.getElementById('root') as  HTMLElement);
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <RouterProvider router={router}/>
    </ThemeProvider>
  </React.StrictMode>  
);
