import React, { useState } from 'react';
import {Link} from "react-scroll";
import { IoClose } from "react-icons/io5";
import { TiThMenu } from "react-icons/ti";
import logo from '../assets/logo.png';

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  const handleChange = () =>{
    setMenu(!menu);
  }

  const closeMenu = () =>{
    setMenu(false);
  }
  return (
    <div className='fixed w-full z-50'>
      <div>
        <div className='flex flex-row justify-between p-5 md:px-32 px-5 bg-white text-[#171a67] font-semibold shadow-[0_3px_10px_rgba(0,0,0,0.3)]'>
            <div className='flex flex-row items-center cursor-pointer'>
                <span>
                <img src={logo} className='w-[30px] font-bold'/>
                </span>
                <h1 className='text-[#fc5c04] sm:text-xl md:text-2xl font-semibold ml-3'>Adventures</h1>
            </div>
            <nav className='hidden md:flex flex-row items-center text-lg font-medium gap-8'>
                <Link
                 to='home'
                 spy={true} 
                 smooth={true} 
                 duration={500} 
                 className='hover:text-blue-600 transition-all cursor-pointer'>
                 Home
                 </Link>
                <Link 
                 to='articulos' 
                 spy={true} 
                 smooth={true} 
                 duration={500} 
                 className='hover:text-blue-600 transition-all cursor-pointer'>
                 Articulos
                 </Link>
                <Link 
                 to='productos'
                 spy={true} 
                 smooth={true} 
                 duration={500} 
                 className='hover:text-blue-600 transition-all cursor-pointer'>
                 Productos
                </Link>
                <Link 
                 to='precios' 
                 spy={true} 
                 smooth={true} 
                 duration={500} 
                 className='hover:text-blue-600 transition-all cursor-pointer'>
                 Precios
                </Link>
                <Link 
                 to='contacto' 
                 spy={true} 
                 smooth={true} 
                 duration={500} 
                 className='hover:text-blue-600 transition-all cursor-pointer'>
                 Contacto
                </Link>

            </nav>
            <div className='md:hidden flex items-center'>
                {menu ? (
                    <IoClose size={25} onClick={handleChange} className='cursor-pointer'/>
                ):(
                    <TiThMenu size={25} onClick={handleChange} className='cursor-pointer'/>
                )}
            </div>
        </div>
        <div className={`${menu ? "translate-x-0" : "-translate-x-full"} lg:hidden flex flex-col absolute bg-white text-[#171a67] left-0 top-16 font-semibold text-2xl text-center pt-8 pb-4 gap-8 w-full h-fit transition-transform duration-300`}>
        <Link
                 to='home'
                 spy={true} 
                 smooth={true} 
                 duration={500} 
                 className='hover:text-teal-500 transition-all cursor-pointer'
                 onClick={closeMenu}>
                 Home
                 </Link>
                 <Link 
                 to='articulos' 
                 spy={true} 
                 smooth={true} 
                 duration={500} 
                 className='hover:text-teal-500 transition-all cursor-pointer'
                 onClick={closeMenu}>
                 Articulos
                 </Link>
                <Link 
                 to='productos'
                 spy={true} 
                 smooth={true} 
                 duration={500} 
                 className='hover:text-teal-500 transition-all cursor-pointer'
                 onClick={closeMenu}>
                 Productos
                </Link>
                <Link 
                 to='precios' 
                 spy={true} 
                 smooth={true} 
                 duration={500} 
                 className='hover:text-teal-500 transition-all cursor-pointer'
                 onClick={closeMenu}>
                 Precios
                </Link>
                <Link 
                 to='contacto' 
                 spy={true} 
                 smooth={true} 
                 duration={500} 
                 className='hover:text-teal-500 transition-all cursor-pointer'
                 onClick={closeMenu}>
                 Contacto
                </Link>
        </div>
      </div>
    </div>
  )
}

export default Navbar