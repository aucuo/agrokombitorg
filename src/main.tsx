import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import '@/styles/index.scss';
import {ModalProvider} from "../context/ModalContext";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <ModalProvider>
          <App />
      </ModalProvider>
  </StrictMode>,
)
