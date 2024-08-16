import homeLogo from '../../assets/home.png'

function Home() {
  
    return (
        <>
        <div className="bg-[#859B48] flex justify-center">
          <div className='container grid grid-cols-2 text-white'>
            <div className="flex flex-col gap-4 items-center justify-center py-4">
              <h2 className='text-5xl font-bold'>Farmácia Game of Pills</h2>
              <p className='text-1xl'>Sua jornada para o bem-estar começa aqui!</p>
  
              <div className="flex justify-around gap-4">
              <button className='rounded bg-white text-[#1D361F] py-2 px-4'>Ver produtos</button>
            </div>
            </div>
  
            <div className="flex justify-center ">
              <img src={homeLogo} alt="" className='w-2/5' />
      
            </div>
          </div>
        </div>
      </>
    );
}

export default Home;