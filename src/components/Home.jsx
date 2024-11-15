const Home = () => {
    return (
      <div className='w-full h-80 md:min-h-screen flex flex-col justify-start items-start lg:px-32 px-5 bg-[url(https://images.pexels.com/photos/28719728/pexels-photo-28719728/free-photo-of-accesorios-elegantes-para-hombre-en-posicion-horizontal-sobre-fondo-blanco.jpeg?auto=compress&cs=tinysrgb&w=600)] bg-contain md:bg-cover bg-no-repeat bg-bottom' id='Seccion1'>
        <div className='mt-20 md:mt-28 mb-20 flex flex-col text-center items-center'>
          <h1 id='font' className='text-black md:text-white text-xl font-bold md:text-5xl md:mb-1 md:mr-6'>
            ESTILO
          </h1>
          <p id='font' className='text-sm text-black md:text-white md:text-3xl font-semibold md:mt-1'>
            EN
            <span id='font' className=' text-xl block text-black md:text-white md:text-5xl mt-1 font-bold'>
              CUERO
            </span>
          </p>
        </div>
      </div>
    )
  }
  
  export default Home