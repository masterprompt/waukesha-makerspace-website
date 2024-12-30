import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { App } from './features/app';

createRoot(document.getElementById('page-wrapper')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
