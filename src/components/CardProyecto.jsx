import React from 'react';
import HtmlIcon from '../assets/SVG/html.svg'
import CssIcon from '../assets/SVG/css.svg'
import JsIcon from '../assets/SVG/js.svg'
import styled from 'styled-components';

const CardProyecto = ({ p }) =>{

    const Button = styled.a`
    background: ${p.color};
    cursor: pointer;
    transition: all .3s ease-in-out;
    &:hover{
        background: white;
        color: ${p.color};
        border-color: ${p.color}
    }
`

    return(
        <div className='bg-white rounded-xl mb-10 max-w-xs m-auto relative'>
            <div style={{background: p.color}} className='p-5 justify-end flex items-center rounded-tl-xl rounded-tr-xl rounded-br-3xl'>
                <img className='absolute top-20 right-40' src={p.imgUrl} alt="img del proyecto" />
                <div className=''>
                    <h3 className='text-white font-bold text-3xl mb-2'>{p.nombre}</h3>
                    <div>
                        <h4 className='text-white'>Tecnologias:</h4>
                        <div className='flex items-center flex-wrap'>
                        {p.tecnologias.map( (t,i) => (
                            <img className='w-10' key={i} src={t} alt="icono de una tecnologia" />
                        ))
                        }
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex flex-col px-4 pb-5 items-center'>
                <p className='text-grey-600 my-6'>{p.contenido}</p>
                <Button href={p.linkUrl} target="_blank" className='font-bold border-2 text-white rounded-lg px-16 w-fit'>Visitar</Button>
            </div>
        </div>
    )
}

export default CardProyecto;