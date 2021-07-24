import React,{useContext,useEffect} from 'react';
import Proyecto from './Proyecto';
import proyectoContext from '../../context/proyectos/proyectoContext';

const ListadoProyectos = () => {


    //Extraer proyectos de state inicial
    const proyectosContext = useContext(proyectoContext)
    const {proyectos,obtenerProyectos} = proyectosContext;
    //Revisar si tenemos proyectos


    //Obtener proyectos cuando carga un componente
    useEffect( () =>{
        obtenerProyectos();
    },[])

    if(proyectos.length === 0) return <p>No hay proyectos, comienza creando uno</p>;

   

    return ( 

        <ul className="listado-proyectos">
            {proyectos.map( proyecto =>(
                <Proyecto
                    key={proyectos.id}
                    proyecto={proyecto}
                />
            ))}
        </ul>
     );
}
 
export default ListadoProyectos;