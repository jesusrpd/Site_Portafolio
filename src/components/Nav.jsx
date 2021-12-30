import React, { useState } from 'react';
import { ReactComponent as LogoIcon } from '../assets/SVG/logo.svg'
import { ReactComponent as MenuIcon } from '../assets/SVG/menu.svg'
import { ReactComponent as CloseIcon } from '../assets/SVG/close.svg'

const Nav = ()=>{

    const [close, setClose] = useState(false)

    const handleClick = () => setClose(!close)

    return(
        <nav className='flex flex-wrap items-center justify-between py-4 px-5 md:px-32 md:py-12'>
            <LogoIcon/>
            <CloseIcon className={close?'':'hidden'} onClick={handleClick}/>
            <MenuIcon className={close?'hidden':'cursor-pointer lg:hidden'} onClick={handleClick}/>
            <ul className={close?'w-screen flex flex-col h-screen items-center pt-20':'hidden lg:flex'}>
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