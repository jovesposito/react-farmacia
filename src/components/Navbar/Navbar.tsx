import { Asclepius } from '@phosphor-icons/react'
import { Link} from 'react-router-dom'

function Navbar() {

    let navbarComponent

      navbarComponent = (
        <div className='w-full bg-[#1D361F] text-white flex justify-center py-4'>
          <div className="container flex justify-between text-lg">
            <div className='flex items-center gap-2'>
                <Link to='/home' className='text-2xl font-bold uppercase'>Farmácia</Link>
                <Asclepius size={32} />
            </div>
            <div className='flex gap-4'>
              <Link to='/medicamentos' className='hover:underline'>Medicamentos</Link>
              <Link to='/categorias' className='hover:underline'>Categorias</Link>
              <Link to='/cadastroCategoria' className='hover:underline'>Cadastrar Categoria</Link>
              <Link to='home' className='hover:underline'>Sair</Link>
            </div>
          </div>
        </div>
      )
    
  return (
    <>
      {navbarComponent}
    </>
  )

}

export default Navbar