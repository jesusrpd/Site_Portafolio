import React from 'react';
import perfilImg from '../assets/img/perfil.png'
import CV from '../assets/CV.pdf'

const Info = ()=>(

    <header id='inicio' className='bg-misc-1 pt-16 md:px-32 md:flex-row-reverse md:flex md:justify-between items-center'>
        <div>
            <img className='w-40 mb-4 m-auto md:w-96 md:mb-0' src={perfilImg} alt="foto de perfil" />
        </div>
        <div className='flex flex-col items-center md:items-start'>
            <h1 className='text-white font-bold text-4xl text-center'>JESÚS RODRIGO<br/> PÉREZ DELGADO</h1>
            <p className='text-white mt-5'>Full stack web developer.</p>
            <p className='text-white text-center'>19 años, México,CDMX.</p>
            <a download="cv-jesus-rodrigo" href={CV} className='bg-white rounded-lg px-3 py-1 my-5 font-bold border-2 hover:border-white hover:bg-transparent hover:text-white ease-in-out duration-300' type='button'>Descragar CV</a>
        </div>
    </header>

);

export default Info;