import React, { StrictMode } from 'react'
import ReactDom from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './router'
import { Container } from '@mui/material'

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import './firebase/config'

ReactDom.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Container maxWidth='lg' sx={{ textAlign: 'center', marginTop: '50px' }}>
      <RouterProvider router={router} />
    </Container>
  </React.StrictMode>,
)
