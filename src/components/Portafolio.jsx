import React, { useEffect, useState } from 'react';
import CardProyecto from './CardProyecto';
import mockupJared from '../assets/img/mockupJareds.png'
import mockupLach from '../assets/img/mockupLach.png'
import mockupShop from '../assets/img/mockupShop.png'
import servicesProjects from '../services/proyectos'

const Portafolio = ()=>{

    const [proyectos, setProyectos] = useState([])

    useEffect(() => {
        servicesProjects.getProyects()
        .then( res => setProyectos(res))
        .catch( err => console.log(err))
    },[])

    return(
        <main id='portafolio' className='bg-misc-3'>
            <h2 className='text-white text-center font-bold text-3xl pt-14 mb-4 md:mb-10'>Portafolio</h2>
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