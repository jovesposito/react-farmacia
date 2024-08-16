import './index.css'
import Navbar from './components/Navbar/Navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Footer from './components/Footer/Footer'
import Home from './pages/Home/Home'
import ListaCategorias from './components/Categorias/listarCategorias/ListarCategorias'
import FormularioCategoria from './components/Categorias/formCategorias/formCategorias'
import DeletarCategoria from './components/Categorias/deletarCategorias/deletarCategorias'
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <>
      <ToastContainer/>
      <BrowserRouter>
        <Navbar/>
        <div className='min-h-[80vh]'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/categorias" element={<ListaCategorias />} />
            <Route path="/cadastroCategoria" element={<FormularioCategoria />} />
            <Route path="/editarCategoria/:id" element={<FormularioCategoria />} />
            <Route path="/deletarCategoria/:id" element={<DeletarCategoria />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App