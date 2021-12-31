import React from 'react';
import { ReactComponent as MessengerIcon } from '../assets/SVG/messenger.svg'
import { ReactComponent as WhatsAppIcon } from '../assets/SVG/whatsapp.svg'

const Redes = ()=>(
    <div className='fixed right-2 bottom-2 md:bottom-5 md:right-5'>
        <a href="https://www.facebook.com/profile.php?id=100008217585249" target="_blank"><MessengerIcon className="hidden md:block md:mb-2"/></a>
        <a href="https://api.whatsapp.com/send?phone=+525537046181" target="_blank"><WhatsAppIcon/></a>
    </div>
);

export default Redes;