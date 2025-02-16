import { StrictMode } from 'react'
import React from 'react'
import ReactDom from 'react-dom/client'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    } ,
    secondary: {
      main: '#dc004e' ,
    } ,
  } ,
});

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
