import React,{useReducer} from 'react';
import uuid from 'uuid/dist/v4'


import proyectoContext from './proyectoContext';
import proyectoReducer from './proyectoReducer';
import {FORMULARIO_PROYECTO,
        OBTENER_PROYECTOS,
        AGREGAR_PROYECTO,
        VALIDAR_FORMULARIO,
        PROYECTO_ACTUAL,ELIMINAR_PROYECTO}
from '../../types/index';






const ProyectoState = props => {

    
    const proyectos= [
        { id:1,nombre:'Tienda Virtual'},
        { id:2,nombre:'Intranet'},
        { id:3,nombre:'Maquetear Sitio Web'},
        { id:4,nombre:'Cambiar Colores'}
    ]
    const initialState = {
        proyectos : [],
        formulario : false,
        errorformulario:false,
        proyecto:null
    }

    //Dispatch para ejecutar las acciones
     const [state, dispatch] = useReducer(proyectoReducer, initialState)

     //Serie de funciones para el CRUD
     const mostrarFormulario =() => {
         dispatch({
             type:FORMULARIO_PROYECTO
         })
     }
     //Obtener Los proyectos
     const obtenerProyectos = () => {
         dispatch({
             type:OBTENER_PROYECTOS,
             payload:proyectos

         })
     }

     //Agregar nuevo Proyecto
     const agregarProyecto = proyecto => {
         proyecto.id = uuid()

         //Inserta el proyecto en el state
         dispatch({
             type:AGREGAR_PROYECTO,
             payload:proyecto
         })
     }
     //Valida el formulario por errores
     const monstrarError = () => {
         dispatch({
             type:VALIDAR_FORMULARIO
         })
     }
     //Seleccina el proyecto que el usuario dio click
     const proyectoActual = proyectoId => {
         dispatch({
             type:PROYECTO_ACTUAL,
             payload:proyectoId

         })
     }

     //Elimina un proyecto  
     const eliminarProyecto = proyectoId => {
         dispatch({
             type: ELIMINAR_PROYECTO,
             payload:proyectoId
         })
     }

     return (
        <proyectoContext.Provider
            value ={{
                proyectos: state.proyectos,
                formulario: state.formulario,
                errorformulario:state.errorformulario,
                proyecto:state.proyecto,
                mostrarFormulario,
                obtenerProyectos,
                agregarProyecto,
                monstrarError,
                proyectoActual,
                eliminarProyecto
            }}
        >

    {/* Nos permite pasar nuestros prop a todos los componentes que esten dentro de este componente padre  */}
            {props.children}
        </proyectoContext.Provider>

     )
}
export default ProyectoState;