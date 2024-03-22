
import { BrowserRouter } from 'react-router-dom'
import './App.css'
import Category from './components/Category'
import Navbar from './components/Navbar'
import Search from './components/Search'
import Pages from './pages/Pages'

function App() {

  return (
    <>
     <BrowserRouter>
     <Navbar/>
     <Search/>
     <Category/>
     <Pages/>
     </BrowserRouter>
    </>
  )
}

export default App
