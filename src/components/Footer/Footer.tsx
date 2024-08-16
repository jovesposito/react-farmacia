import { FacebookLogo, InstagramLogo, LinkedinLogo } from '@phosphor-icons/react'

function Footer() {

  let footerComponent

  let data = new Date().getFullYear()

    footerComponent = (
      <>
        <div className="flex justify-center bg-[#1D361F] text-white">
          <div className="container flex flex-col items-center py-4">
            <p className='text-xl font-bold'>Farmácia Generation | Copyright: {data}</p>
            <p className='text-lg'>Acesse nossas redes sociais</p>
            <div className='flex gap-2'>
              <LinkedinLogo size={48} />
              <InstagramLogo size={48} />
              <FacebookLogo size={48} />
            </div>
          </div>
        </div>
      </>
    )

  return (
    <>
      {footerComponent}
    </>
  )

}

export default Footer