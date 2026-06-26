import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ConfigProvider } from 'antd'
import './index.css'
import App from './App.jsx'

const antdTheme = {
  token: {
    colorPrimary: '#2563EB',
    fontFamily: "'Inter', 'Segoe UI', system-ui, sans-serif",
    borderRadius: 8,
  },
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ConfigProvider theme={antdTheme}>
      <App />
    </ConfigProvider>
  </StrictMode>,
)
