import React,{useReducer} from 'react';


import proyectoContext from './proyectoContext';
import proyectoReducer from './proyectoReducer';
import {FORMULARIO_PROYECTO,
        OBTENER_PROYECTOS,
        AGREGAR_PROYECTO,
        PROYECTO_ERROR,
        VALIDAR_FORMULARIO,
        PROYECTO_ACTUAL,ELIMINAR_PROYECTO}
from '../../types/index';

import clienteAxios from '../../config/axios';




const ProyectoState = props => {

    
  
    const initialState = {
        proyectos : [],
        formulario : false,
        errorformulario:false,
        proyecto:null,
        mensaje:null

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
     const obtenerProyectos =   async () => {
        try {
            
            //PETICION AL BACK-END PARA Obtener nuestros PROYECTO
            const resultado  = await clienteAxios.get('/api/proyectos')
            console.log(resultado)
            //Insertar Proyecto en el state
            dispatch({
                type:OBTENER_PROYECTOS,
                payload:resultado.data.proyectos
   
            })
        } catch (error) {
            const alerta ={
                msg: 'Hubo un error',
                categoria:'alerta-error'
            }
            dispatch({
                type:PROYECTO_ERROR,
                payload:alerta
            })
        }
     }

     //Agregar nuevo Proyecto
     const agregarProyecto = async proyecto => {

        try {
            //PETICION AL BACK-END PARA AGREGAR UN PROYECTO
            const resultado  = await clienteAxios.post('/api/proyectos',proyecto)
            console.log(resultado)
            //Insertar Proyecto en el state
            dispatch({
                type:AGREGAR_PROYECTO,
                payload:resultado.data
            })

        } catch (error) {
            const alerta ={
                msg: 'Hubo un error',
                categoria:'alerta-error'
            }
            dispatch({
                type:PROYECTO_ERROR,
                payload:alerta
            })
        }
     
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
     const eliminarProyecto = async proyectoId => {
        
        try {
            await clienteAxios.delete(`/api/proyectos/${proyectoId}`)
            dispatch({
                type: ELIMINAR_PROYECTO,
                payload:proyectoId
            })
        } catch (error) {
            const alerta ={
                msg: 'Hubo un error',
                categoria:'alerta-error'
            }
            dispatch({
                type:PROYECTO_ERROR,
                payload:alerta
            })
        }
     }

     return (
        <proyectoContext.Provider
            value ={{
                proyectos: state.proyectos,
                formulario: state.formulario,
                errorformulario:state.errorformulario,
                proyecto:state.proyecto,
                mensaje:state.mensaje,
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