import React from 'react';
import { ReactComponent as MessengerIcon } from '../assets/SVG/messenger.svg'
import { ReactComponent as WhatsAppIcon } from '../assets/SVG/whatsapp.svg'

const Redes = ()=>(
    <div className='fixed right-2 bottom-2'>
        <a href=""><MessengerIcon className="hidden md:block"/></a>
        <a href=""><WhatsAppIcon/></a>
    </div>
);

export default Redes;