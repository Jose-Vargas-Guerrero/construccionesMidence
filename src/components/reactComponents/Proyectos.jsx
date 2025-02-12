import {useState} from 'react'
import './Proyectos.css'
import data from '../../data/data'
import Preview from './Preview'

function Proyectos() {
    const [filter, setFilter] = useState("")

    const handleChange = (event) => {
        setFilter(event.target.value)
        console.log(filter)
    }

    const filteredProyectos = data.filter(proyecto => 
        filter ? proyecto.categoria === filter : true
    )

  return (
    <>
    <div className='proyectosContainer'>
        <h3>Proyectos</h3>
        <div className='filterContainer'>
            <label for="filter" title='elemento para seleccionar filtro'>Filtrar por: </label>
            <select name='filter' id="filter" title='seleccionar el tipo de construccion para proyectos' onChange={handleChange}>
                <option value="">Todos</option>
                <option value="Edificios">Edificios</option>
{/*                 <option value="Residenciales">Residenciales</option> */}
                <option value="Viviendas">Viviendas</option>
                <option value="Construcciones">Construcciones</option>
            </select>
        </div>
        <div className='proyectosList'>
            {
                filteredProyectos.map((e) => (
                    <Preview key={e.id} enlace={e.enlace} name={e.nombre}
                    image={e.image1}/>
                ))
            }
        </div>
    </div>
    </>
  )
}

export default Proyectos