import './Preview.css'

function Preview({enlace,image,name}) {
  return (
    <div className="proyectoCard">
      <a href={`/proyectos/${enlace}`}>
        <img className="proyectoImage" src={image} alt={name} />
        <p className="proyectoName">{name}</p>
      </a>
      <div className='overlay'></div>
    </div>
  );
}

export default Preview;
