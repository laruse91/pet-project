import {createRoot} from 'react-dom/client'
import {App} from 'app/App'
import './app/styles/index.scss'
import {BrowserRouter} from 'react-router-dom'
import {ThemeProvider} from 'shared/theme'
import 'shared/locale/config'

const root = createRoot(document.getElementById('app') as Element)

root.render(
  <BrowserRouter>
    <ThemeProvider>
      <App/>
    </ThemeProvider>
  </BrowserRouter>
)
