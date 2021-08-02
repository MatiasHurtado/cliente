import React,{useContext,useEffect} from 'react';
import Proyecto from './Proyecto';
import ProyectoContext from '../../context/proyectos/proyectoContext';
import {TransitionGroup, CSSTransition}from 'react-transition-group'
import AlertaContext from '../../context/alertas/alertaContext';

const ListadoProyectos = () => {


    //Extraer proyectos de state inicial
    const proyectosContext = useContext(ProyectoContext)
    const {mensaje,proyectos,obtenerProyectos} = proyectosContext;


    const alertaContext = useContext(AlertaContext);
    const {alerta,mostrarAlerta} = alertaContext

    //Obtener proyectos cuando carga un componente
    useEffect( () =>{
        if(mensaje){
            //Si existe un error
            mostrarAlerta(mensaje.msg, mensaje.categoria)
        }

        obtenerProyectos();
        // eslint-disable-next-line
    },[mensaje])

    if(proyectos.length === 0) return <p>No hay proyectos, comienza creando uno</p>;

   

    return ( 

        <ul className="listado-proyectos">
            {alerta?(<div className={`alerta ${alerta.categoria}`}>{alerta.msg}</div>) :null}
           <TransitionGroup>
           {proyectos.map( proyecto =>(
                <CSSTransition
                    //Agregamos el (_)por que mongo ocupa esa nomenclaruta para referirse a un id
                     key={proyecto._id}
                     timeout={200}
                     classNames="proyecto"
                >
                    <Proyecto
                        proyecto={proyecto}
                    />
                </CSSTransition>
            ))}
           </TransitionGroup>
        </ul>
     );
}
 
export default ListadoProyectos;