import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './reset.css'
import './index.css'
/* css that applies to all the "pages", can add a reset here */
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <App />
    </StrictMode>,
)
