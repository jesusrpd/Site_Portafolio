import React from 'react';
import CardProyecto from './CardProyecto';
import mockupJared from '../assets/img/mockupJareds.png'
import mockupLach from '../assets/img/mockupLach.png'
import mockupShop from '../assets/img/mockupShop.png'

const Portafolio = ()=>{

    const proyectos = [
        {
            id: 0,
            nombre: 'JAREDS',
            mockup: mockupJared,
            color: '#084C27'
        },
        {
            id: 1,
            nombre: 'Shop web',
            mockup: mockupShop,
            color: '#301D4F'
        },
        {
            id: 2,
            nombre: 'Lach Films',
            mockup: mockupLach,
            color: '#3D3D3D'
        },
    ]

    return(
        <main>
            <h2 className='text-white text-center font-bold text-3xl pt-32 mb-4 md:mb-10'>Portafolio</h2>
            <div className='flex flex-col w-full px-4 md:flex-row flex-wrap justify-center'>
            {proyectos.map( p =>
                <CardProyecto key={p.id} p={p}/>
            )
            }
            </div>
        </main>
    )
};

export default Portafolio;