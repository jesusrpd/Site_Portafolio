import React from 'react';
import MapWorkImg from '../assets/SVG/mapWork.svg'

const Trayectoria = ()=>(
    <main id='trayectoria' className='bg-misc-4 md:flex md:items-center pt-14 md:px-32'>
        <div className='md:w-2/4'>
            <h2 className='text-white text-center font-bold text-3xl mb-4 md:mb-10'>Trayectoria</h2>
            <p className='text-white text-base text-center leading-8 my-10 px-4'>Empecé a programar a los 16 años en c ++, ya que
            descubrió el mundo del desarrollo web, por lo que hizo
            me desarrollo en tecnologías como HTML, CSS, NODE,
            JS, REACT, MONGO DB, etc. Desde entonces he obtenido algunos
            trabajos como desarrollador web y mentor de desarrollo web
            para niños.</p>
        </div>
        <img src={MapWorkImg} className='w-11/12 m-auto md:w-5/12' alt="mapa de trayectoria" />
    </main>
);

export default Trayectoria;