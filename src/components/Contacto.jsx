import React, {useEffect, useState} from 'react';
import emailjs from 'emailjs-com'
import Notificacion from './Notificacion';

const Contacto = ()=>{

    const [message, setMessage] = useState({
        nombre: '', correo: '', telefono: '', mensaje: ''
    })
    const [notificacion, setNotificacion] = useState(false)

    const handleChange = e => setMessage({...message, [e.target.name]: e.target.value})

    const handleSubmit = e => {
        e.preventDefault()
        const templateID = 'template_uatdde3'

        sendFeedback(templateID, {
            nombre: message.nombre,
            telefono: message.telefono,
            correo: message.correo,
            mensaje: message.mensaje
        })
        setMessage({...message, nombre:'',telefono:'',correo:'',mensaje:''})
    }
    useEffect(() => {
        emailjs.init("user_7I2qv2a0QaCYfOOaorpSa")
    },[])

    const sendFeedback = (templateID, variables) => {
        emailjs.send('service_zab96q4', templateID, variables)
        .then( res => {
            setNotificacion(true)
            setTimeout(() => {
                setNotificacion(false)
            },3000)
        })
        .catch( err => {
            console.log(err, 'No se envio tu correo')
        })
    }

    return(

        <main id='contactame' className='bg-misc-5 pt-14 flex flex-col items-center md:flex-row md:px-32 md:justify-between'>
            <div className='w-7/12'>
                <h2 className='text-white text-center font-bold text-3xl mb-4 md:text-left md:mb-4'>Contactame</h2>
                <p className='text-white text-base text-center leading-8 px-2 md:text-left'>Si quieres contratar mis servicios como desarrollador o diseñador web, puedes
                deja tus datos para contactarte o envíame un mensaje privado a uno
                de mis redes sociales.</p>
            </div>
            {notificacion?<Notificacion mensaje={'Correo enviado, te contactare a la brevedad.'}/>:null}
            <form onSubmit={handleSubmit} className='flex flex-col items-center md:items-start md:w-4/12' action="">
                <input 
                    required
                    onChange={handleChange} 
                    value={message.nombre} 
                    placeholder='Nombre' 
                    type="text" 
                    name='nombre'
                    className='bg-transparent w-full border-b-2 border-white my-5 p-5 text-white focus:outline-none md:mb-2'/>
                <input 
                    required
                    onChange={handleChange} 
                    value={message.telefono} 
                    placeholder='Telefono' 
                    type="tel" 
                    name='telefono'
                    className='bg-transparent w-full border-b-2 border-white my-5 p-5 text-white focus:outline-none md:mb-2'/>
                <input 
                    required
                    onChange={handleChange} 
                    value={message.correo} 
                    placeholder='Correo electronico' 
                    type="email" 
                    name="correo"
                    className='w-full bg-transparent border-b-2 border-white my-5 p-5 text-white md:mb-2 focus:outline-none'/>
                <textarea 
                    onChange={handleChange} 
                    value={message.mensaje} 
                    placeholder='Mensaje (Opcional)' 
                    name="mensaje" cols="30" rows="5" 
                    className='w-full bg-transparent border-2 border-white rounded-lg my-5 p-5 md:mb-2 text-white focus:outline-none'></textarea>
                <button type="submit" className='bg-white rounded-lg border-2 border-white font-bold px-10 hover:ease-in-out hover:duration-300 hover:bg-transparent hover:text-white'>Contactar</button>
            </form>
        </main>
    
    )
};

export default Contacto;