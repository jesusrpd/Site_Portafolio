import React from 'react';

const Contacto = ()=>(

    <main className='pt-14 flex flex-col items-center md:flex-row md:px-32 md:justify-between'>
        <div className='w-7/12'>
            <h2 className='text-white text-center font-bold text-3xl mb-4 md:text-left md:mb-4'>Contactame</h2>
            <p className='text-white text-base text-center leading-8 px-2 md:text-left'>Si quieres contratar mis servicios como desarrollador o diseñador web, puedes
            deja tus datos para contactarte o envíame un mensaje privado a uno
            de mis redes sociales.</p>
        </div>
        <form className='flex flex-col items-center md:items-start md:w-4/12' action="">
            <input placeholder='Nombre' type="text" className='bg-transparent w-full border-b-2 border-white my-5 p-5 text-white focus:outline-none md:mb-2'/>
            <input placeholder='Telefono' type="tel" className='bg-transparent w-full border-b-2 border-white my-5 p-5 text-white focus:outline-none md:mb-2'/>
            <input placeholder='Correo electronico' type="email" name="" id="" className='w-full bg-transparent border-b-2 border-white my-5 p-5 text-white md:mb-2 focus:outline-none'/>
            <textarea placeholder='Mensaje (Opcional)' name="" id="" cols="30" rows="5" className='w-full bg-transparent border-2 border-white rounded-lg my-5 p-5 md:mb-2 text-white focus:outline-none'></textarea>
            <button type="submit" className='bg-white rounded-lg border-2 border-white font-bold px-10 hover:ease-in-out hover:duration-300 hover:bg-transparent hover:text-white'>Contactar</button>
        </form>
    </main>

);

export default Contacto;