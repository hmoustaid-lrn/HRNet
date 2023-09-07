import React from 'react'
import { createRoot } from 'react-dom/client'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import Router from './Router'
import './index.css';


const container = document.getElementById('root')
const root = createRoot(container)

root.render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>
)