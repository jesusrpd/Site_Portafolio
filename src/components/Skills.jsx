import React from 'react';
import HtmlIcon from '../assets/SVG/html.svg'
import CssIcon from '../assets/SVG/css.svg'
import JslIcon from '../assets/SVG/js.svg'
import BootstrapIcon from '../assets/SVG/bootstrap.svg'
import ReactIcon from '../assets/SVG/react.svg'
import SassIcon from '../assets/SVG/sass.svg'
import NodeIcon from '../assets/SVG/node.svg'
import MongoDBIcon from '../assets/SVG/mongo.svg'
import GraphQlIcon from '../assets/SVG/graphql.svg'
import ReduxIcon from '../assets/SVG/redux.svg'
import JestIcon from '../assets/SVG/jest.svg'
import TailwindIcon from '../assets/SVG/tailwind.svg'
import ExpressIcon from '../assets/SVG/express.svg'

const Skills = ()=>(

<main id='skills' className='pt-32 bg-misc-5'>
    <h2 className='text-white text-center font-bold text-3xl pt-10 mb-4 md:mb-10'>Habilidades</h2>
    <div className='flex items-center px-4 flex-wrap justify-center'>
        <img src={HtmlIcon} alt="icono de una habilidad" className='w-20 md:m-5 md:w-24' />
        <img src={CssIcon} alt="icono de una habilidad" className='w-20 md:m-5 md:w-24' />
        <img src={JslIcon} alt="icono de una habilidad" className='w-20 md:m-5 md:w-24' />
        <img src={BootstrapIcon} alt="icono de una habilidad" className='w-20 md:m-5 md:w-24' />
        <img src={ReactIcon} alt="icono de una habilidad" className='w-20 md:m-5 md:w-24' />
        <img src={SassIcon} alt="icono de una habilidad" className='w-20 md:m-5 md:w-24' />
        <img src={NodeIcon} alt="icono de una habilidad" className='w-20 md:m-5 md:w-24' />
        <img src={MongoDBIcon} alt="icono de una habilidad" className='w-20 md:m-5 md:w-24' />
        <img src={GraphQlIcon} alt="icono de una habilidad" className='w-20 md:m-5 md:w-24' />
        <img src={ReduxIcon} alt="icono de una habilidad" className='w-20 md:m-5 md:w-24' />
        <img src={JestIcon} alt="icono de una habilidad" className='w-20 md:m-5 md:w-24' />
        <img src={TailwindIcon} alt="icono de una habilidad" className='w-20 md:m-5 md:w-24' />
        <img src={ExpressIcon} alt="icono de una habilidad" className='w-20 md:m-5 md:w-24' />
    </div>
</main>

);

export default Skills;