import { App } from 'app/App'
import ErrorBoundary from 'app/ui/ErrorBoundary/ErrorBoundary'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import 'shared/locale/config'
import { ThemeProvider } from 'shared/theme'
import './app/styles/index.scss'

const root = createRoot(document.getElementById('app') as Element)

root.render(
  <BrowserRouter>
    <ErrorBoundary>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </ErrorBoundary>
  </BrowserRouter>,
)
