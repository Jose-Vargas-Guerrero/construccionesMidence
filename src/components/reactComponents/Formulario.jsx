import './Formulario.css'

function Formulario() {
  return (
    <div className='formularoContainer' id='formulario'>
        <h2>Trabaja con nosotros</h2>
        <h3>Alguien de nuestro equipo de asesorará</h3>
        <form className='formulario'>
            <div className='first'>
                <div className='name'>
                <label>Nombre</label>
                <br/>
                <input type='text' placeholder='Nombre completo'/>
                </div>
                <div className='number'>
                <label>Celular</label>
                <br/>
                <input type='text' placeholder='+(504) 0000-0000'/>
                </div>
            </div>
            <div className='second'>
            <label>Correo</label>
            <br/>
            <input type='text' placeholder='Sucorreodecompañia@direccoin.com'/>
            </div>
            <div className='third'>
            <label>Motivo</label>
            <br/>
            <textarea className='mensaje'/>
            </div>
            <button className='enviar'>Enviar mensaje</button>
        </form>
    </div>
  )
}

export default Formulario