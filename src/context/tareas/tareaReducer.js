import {TAREAS_PROYECTOS,
        AGREGAR_TAREA,
        VALIDAR_TAREA
} 
from '../../types/index';

export default (state,action) => {
    switch(action.type){

        case TAREAS_PROYECTOS:
            return{
                ...state,
                tareasproyecto: state.tareas.filter(tarea => tarea.proyectoId === action.payload)

            }
        case AGREGAR_TAREA:
            return{
                ...state,
                tareas: [...state.tareas , action.payload],
                errortarea:false
            }
        case VALIDAR_TAREA:
            return{
                ...state,
                errortarea:true
            }
        default: 
            return state;
    }
} 