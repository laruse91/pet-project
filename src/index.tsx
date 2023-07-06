import {createRoot} from 'react-dom/client'
import {App} from './App'
import './styles/index.scss'
import {BrowserRouter} from 'react-router-dom'
import {ThemeProvider} from './theme'

const root = createRoot(document.getElementById('app') as Element)

root.render(
  <BrowserRouter>
    <ThemeProvider>
      <App/>
    </ThemeProvider>
  </BrowserRouter>
)
