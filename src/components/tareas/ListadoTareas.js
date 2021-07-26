import React,{Fragment,useContext} from 'react';
import Tarea from './Tarea';
import proyectoContext from '../../context/proyectos/proyectoContext';
import tareaContext from '../../context/tareas/tareaContext';




const ListadoTareas = () => {


    //Extraer proyectos de state inicial de proyecto Context
    const proyectosContext = useContext(proyectoContext)
    const {proyecto,eliminarProyecto} = proyectosContext;


     //Obteneer las tareas del proyecto de tareaContext
     const tareasContext  = useContext(tareaContext);
     const {tareasproyecto} = tareasContext;
 

    //Si no hay ningun proyecto Seleccionado
    if(!proyecto) return <h2>Selecciona un proyecto</h2>

    //Array destructuring para extraer el proyecto actual
    const [proyectoActual] =proyecto

    

    return (
        
      
        <Fragment>
            <h2>{proyectoActual.nombre}</h2>

            <ul className="listado-tareas">
                {tareasproyecto.length===0 
                ? (<li className="tarea"><p>No hay tareas</p></li>)
                : tareasproyecto.map( tarea => (
                    <Tarea
                        tarea={tarea}    
                    />
                ) )
                }
            </ul>
            <button 
                type="button"
                className="btn btn-eliminar"
                onClick={()=>eliminarProyecto(proyectoActual.id)}
            >Eliminar Proyecto &times;</button>
        </Fragment>
       
        
     );
}
 
export default ListadoTareas;