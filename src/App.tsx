import './index.css'
import Navbar from './components/Navbar/Navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Footer from './components/Footer/Footer'
import Home from './pages/Home/Home'

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar/>
        <div className='min-h-[80vh]'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path="/home" element={<Home />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App