import React from 'react';

const Notificacion = ({mensaje})=>(

    <div className='bg-green-600 rounded-xl p-5 fixed top-5 right-2'>
        <p className='text-white'>{mensaje}</p>
    </div>

);

export default Notificacion;