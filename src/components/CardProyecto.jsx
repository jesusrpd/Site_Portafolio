import React from 'react';
import HtmlIcon from '../assets/SVG/html.svg'
import CssIcon from '../assets/SVG/css.svg'
import JsIcon from '../assets/SVG/js.svg'
import styled from 'styled-components';

const CardProyecto = ({ p }) =>{

    const Button = styled.button`
        background: ${p.color};
        transition: all .3s ease-in-out;
        &:hover{
            background: white;
            color: ${p.color};
            border-color: ${p.color}
        }
    `

    return(
        <div className='bg-white rounded-xl mb-10 max-w-xs md:mr-10 m-auto relative'>
            <div style={{background: p.color}} className='p-5 justify-end flex items-center rounded-tl-xl rounded-tr-xl rounded-br-3xl'>
                <img className='absolute top-20 right-40' src={p.mockup} alt="img del proyecto" />
                <div className=''>
                    <h3 className='text-white font-bold text-3xl mb-2'>JAREDS</h3>
                    <div>
                        <h4 className='text-white'>Tecnologias:</h4>
                        <div className='flex items-center'>
                            <img className='w-10' src={HtmlIcon} alt="icono de una tecnologia" />
                            <img className='w-10' src={CssIcon} alt="icono de una tecnologia" />
                            <img className='w-10' src={JsIcon} alt="icono de una tecnologia" />
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex flex-col px-4 pb-5 items-center'>
                <p className='text-grey-600 my-6'>La página de carga de una jardinería.
                empresa en los Estados Unidos, muestra
                los servicios que ofrece, trabajos realizados por
                ellos, testimonios de clientes y un
                formulario para contratar sus servicios.</p>
                <Button  className='font-bold border-2 text-white rounded-lg px-16 w-fit'>Visitar</Button>
            </div>
        </div>
    )
}

export default CardProyecto;