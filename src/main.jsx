import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import './styles/animations.css'
import { IdiomaProvider } from './context/IdiomaContext';
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <IdiomaProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </IdiomaProvider>
  </StrictMode>,
)
