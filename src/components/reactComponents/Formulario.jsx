import { useState, useRef } from 'react'
import './Formulario.css'
import emailjs from '@emailjs/browser';

function Formulario() {
  const [formulario, setFormulario] = useState({
    nombre: "",
    correo: "",
    celular: "",
    motivo: ""
  })

  const handleChange = (e) => {
    setFormulario({
      ...formulario,
      [e.target.name] : e.target.value
    })
    console.log(formulario)
  }

  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_7duo8l9', 'template_0621mrv', form.current, {
        publicKey: 'nBVWMLvpt_Cq7c7QN',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          window.alert("Correo enviado exitosamente")
        },
        (error) => {
          console.log('FAILED...', error.text);
          window.alert(error)
        },
      );
  };


  return (
    <div className='formularoContainer' id='formulario'>
        <h2>Trabaja con nosotros</h2>
        <h3>Alguien de nuestro equipo de asesorará</h3>
        <form className='formulario' ref={form} onSubmit={sendEmail}>
            <div className='first'>
                <div className='name'>
                <label for="nombre">Nombre</label>
                <br/>
                <input type='text' name='nombre' id='nombre' placeholder='Nombre completo' value={formulario.nombre} onChange={handleChange}/>
                </div>
                <div className='number'>
                <label for="numero">Celular</label>
                <br/>
                <input type='text' id='celular' name='celular' placeholder='+(504) 0000-0000' value={formulario.celular} onChange={handleChange}/>
                </div>  
            </div>
            <div className='second'>
            <label for="email">Correo</label>
            <br/>
            <input type='email' id='correo' name='correo' placeholder='Sucorreodecompañia@direccoin.com' value={formulario.correo} onChange={handleChange}/>
            </div>
            <div className='third'>
            <label for="motivo">Motivo</label>
            <br/>
            <textarea className='mensaje' id='motivo' name='motivo' value={formulario.motivo} onChange={handleChange}/>
            </div>
            <button type='submit' className='enviar'>Enviar mensaje</button>
        </form>
    </div>
  )
}

export default Formulario