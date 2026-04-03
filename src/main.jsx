import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// WICHTIG: Der Import muss in geschweiften Klammern stehen,
// da du "export function AuthProvider" (Named Export) nutzt.
import { AuthProvider } from './AuthProvider'

createRoot(document.getElementById('root')).render(
    <StrictMode>
        {/* Der Provider muss App umschließen, damit der Login-Status überall verfügbar ist */}
        <AuthProvider>
            <App />
        </AuthProvider>
    </StrictMode>,
)