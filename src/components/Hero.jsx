import imghero from '../assets/imghero.png'

const Hero = () => {
  return (
    <section>
        <div className='bg-[#f5f9fc] rounded-3xl grid grid-cols-1 md:grid-cols-2 gap-6 min-h-[650px] p-20 z-10'>
            <div className='flex flex-col items-center justify-center xl:pr-40'>
              <div className='mt-2 mb-10 md:mt-0 md:mb-0 space-y-8 text-center md:text-left'>
                <h1 className='text-2xl md:text-5xl font-bold text-[#171a67]'>Quieres Regalar o<br />Regalarte<span>...</span></h1>
                <p className='text-lg text-gray-950 mt-4 text-justify'>
                  Aqui encontraras los mas bellos productos para ese regalo tan
                  especial y lo mejor, a los mejores precios. A un click sin salir
                  de casa.
                </p>
                <div className='bg-[#fc5c04] hover:bg-blue-500 text-[#171a67] px-6 py-4
                rounded-lg mt-4 w-fit mx-auto md:mx-0 font-bold hover:shadow-lg duration-200'>
                <button>
                <a href="https://wa.me/542984417477?text=Hola quiero hacer una consulta" target="_blank" className="flex items-center justify-center space-x-2">
                  Consultar
                </a>
                </button>
                </div>
              </div>
            </div>
            <div className='flex items-center justify-center'>
               <img src={imghero} alt='hamb' className='w-[450px]'/>
            </div>
        </div>
    </section>
  )
}

export default Hero