import ReactDOM from 'react-dom/client'
import { App } from './App.jsx'
import { Layout } from './components/layout/Layout.jsx'

import './tailwind.css'

ReactDOM.createRoot(document.getElementById('root')).render(
    <Layout>
      <App />
    </Layout>
)
