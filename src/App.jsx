import { Header } from './components/Header/Header'
import { Main } from './components/Main/Main'
import { Sidebar } from './components/Sidebar/Sidebar'

// import './App.css'

const App = () => {
  return (
    <div className='grid grid-areas-layout grid-cols-layout grid-rows-layout h-screen'>
      <Header />
      <Sidebar />
      <Main />
    </div>
  )
}

export { App }
