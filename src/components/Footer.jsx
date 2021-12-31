import React from 'react';
import FacebookIcon from '../assets/SVG/facebook.svg'
import InstagramIcon from '../assets/SVG/instagram.svg'
import GitHubIcon from '../assets/SVG/github.svg'
import LinkedinIcon from '../assets/SVG/linkedin.svg'

const Footer = ()=>(

    <footer className='bg-misc-6 mt-14 bg-white flex flex-col md:justify-around items-center px-6 md:flex-row'>
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
                <a href="https://www.facebook.com/profile.php?id=100008217585249" target="_blank"><img src={FacebookIcon} alt="Icono de una red social" className='m-2' /></a>
                <a href="https://www.instagram.com/jesusjrpd" target="_blank"><img src={InstagramIcon} alt="Icono de una red social" className='m-2' /></a>
                <a href="https://github.com/jesusrpd" target="_blank"><img src={GitHubIcon} alt="Icono de una red social" className='m-2' /></a>
                <a href="https://www.linkedin.com/in/jesus-rodrigo/" target="_blank"><img src={LinkedinIcon} alt="Icono de una red social" className='m-2' /></a>
            </div>
        </div>
    </footer>

);

export default Footer;