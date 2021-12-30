import React from 'react';
import FacebookIcon from '../assets/SVG/facebook.svg'
import InstagramIcon from '../assets/SVG/instagram.svg'
import GitHubIcon from '../assets/SVG/github.svg'
import LinkedinIcon from '../assets/SVG/linkedin.svg'

const Footer = ()=>(

    <footer className='mt-14 bg-white flex flex-col items-center px-6 md:flex-row'>
        <div className='my-5 md:mx-4'>
            <p className='font-bold text-center'>jesusrodrigo881@gmail.com</p>
            <p className='font-bold text-center'>MÉXICO, CDMX.</p>
        </div>
        <div className='my-5 md:mx-4'>
            <p className='font-bold text-center'>Tel: +52 5537046181</p>
            <p className='font-bold text-center'>Todos los derechos reservador por el autor.</p>
            <p className='font-bold text-center'>Contactame si requieres mis servicios o para colaborar en algun proyecto.</p>
        </div>
        <div className='my-5 md:mx-4'>
            <h3 className='text-center font-bold mb-5'>Redes sociales:</h3>
            <div className='flex items-center flex-wrap justify-center'>
                <img src={FacebookIcon} alt="Icono de una red social" className='m-2' />
                <img src={InstagramIcon} alt="Icono de una red social" className='m-2' />
                <img src={GitHubIcon} alt="Icono de una red social" className='m-2' />
                <img src={LinkedinIcon} alt="Icono de una red social" className='m-2' />
            </div>
        </div>
    </footer>

);

export default Footer;