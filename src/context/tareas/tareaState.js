import React, { useReducer } from 'react';
import TareaContext from './tareaContext';
import tareaReducer from './tareaReducer';

import {TAREAS_PROYECTOS,
        AGREGAR_TAREA,
        VALIDAR_TAREA

        } 
from '../../types/index';

const TareaState = props =>{

    const initialState = {
        tareas:[  
        {   nombre :'Elegir Plataforma', estado:true,proyectoId:1},
        {   nombre :'Elegir Colores', estado:false,proyectoId:2},
        {   nombre :'Elegir Plataforma de Pago', estado:true,proyectoId:3},
        {   nombre :'Elegir Hosting', estado:false,proyectoId:4},
        {   nombre :'Elegir Plataforma', estado:true,proyectoId:4},
        {   nombre :'Elegir Colores', estado:false,proyectoId:3},
        {   nombre :'Elegir Plataforma de Pago', estado:true,proyectoId:2},
        {   nombre :'Elegir Hosting', estado:false,proyectoId:1},
        {   nombre :'Elegir Plataforma', estado:true,proyectoId:3},
        {   nombre :'Elegir Colores', estado:false,proyectoId:1},
        {   nombre :'Elegir Plataforma de Pago', estado:true,proyectoId:4},
        {   nombre :'Elegir Hosting', estado:false,proyectoId:2},
            ],
        tareasproyecto:null,
        errortarea:false

 
    }


    //Crear Dispatch y state  que provieen Del reducer
    const [state,dispatch] = useReducer(tareaReducer,initialState);

    //Crear las funciones


    //Obtener las tareas de un proyecto
    const  obtenerTareas = proyectoId => {
        dispatch({
            type:TAREAS_PROYECTOS,
            payload:proyectoId
        })
            
    }
    //Agregar una tarea al proyecto seleccionado
    const agregarTarea = tarea => {
        dispatch({
            type:AGREGAR_TAREA,
            payload:tarea

        })
    }
    //Valida y muestra un error en caso de que sea necesario
    const validarTarea =() =>{
        dispatch({
            type:VALIDAR_TAREA
        })
    }

    return (

        <TareaContext.Provider
            value={{
                tareas:state.tareas,
                tareasproyecto: state.tareasproyecto,
                errortarea: state.errortarea,
                obtenerTareas,
                agregarTarea,
                validarTarea
            }}
        >

            {props.children}
        </TareaContext.Provider>
    )
}


export default TareaState;