import React, { useState } from 'react';
import { ReactComponent as LogoIcon } from '../assets/SVG/logo.svg'
import { ReactComponent as MenuIcon } from '../assets/SVG/menu.svg'
import { ReactComponent as CloseIcon } from '../assets/SVG/close.svg'

const Nav = ()=>{

    const [close, setClose] = useState(false)

    const handleClick = () => setClose(!close)

    return(
        <nav className='flex flex-wrap items-center sm:py-5 md:py-10 sm:px-5 md:px-10 justify-between'>
            <LogoIcon/>
            <CloseIcon className={close?'':'hidden'} onClick={handleClick}/>
            <MenuIcon className={close?'hidden':'md:hidden sm:inline cursor-pointer'} onClick={handleClick}/>
            <ul className={close?'flex flex-col ease-in-out duration-500 w-full h-screen mt-16 items-center':'flex items-center sm:hidden md:flex'}>
                <li className={close?'mb-7':''}>
                    <a className='text-white mx-5 link-underline inline-block' href="#">Inicio</a>
                </li>
                <li className={close?'mb-7':''}>
                    <a className='text-white mx-5 link-underline inline-block' href="#">Sobre mi</a>
                </li>
                <li className={close?'mb-7':''}>
                    <a className='text-white mx-5 link-underline inline-block' href="#">Portafolio</a>
                </li>
                <li className={close?'mb-7':''}>
                    <a className='text-white mx-5 link-underline inline-block' href="#">Trayectoria</a>
                </li>
                <li className={close?'mb-7':''}>
                    <a className='text-white mx-5 link-underline inline-block' href="#">Skills</a>
                </li>
                <li className='border-white border-2 rounded-lg ease-in-out duration-300 hover:bg-white'>
                    <a className='text-white mx-5 hover:text-black ease-in-out duration-300' href="#">Contactme</a>
                </li>
            </ul>
        </nav>
    )
};

export default Nav;