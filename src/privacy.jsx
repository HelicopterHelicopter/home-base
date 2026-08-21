import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { CraftProvider } from '@kuboxx/craft-ui'
import '@kuboxx/craft-ui/styles.css'
import './index.css'
import PrivacyPolicy from './PrivacyPolicy.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CraftProvider vibe="scrapbook" className="craft-root min-h-screen">
      <PrivacyPolicy />
    </CraftProvider>
  </StrictMode>,
)
