import React,{useContext,useEffect,useState} from 'react';

import proyectoContext from '../../context/proyectos/proyectoContext';

import tareaContext from '../../context/tareas/tareaContext';
const FormTarea = () => {


     //Extraer si un proyecto esta activo
     const proyectosContext = useContext(proyectoContext)
     const {proyecto} = proyectosContext;

    //Obteneer las tareas del proyecto de tareaContext
    const tareasContext  = useContext(tareaContext);
    const {tareaseleccionada,errortarea,agregarTarea,validarTarea,obtenerTareas,actualizarTarea,limpiarTarea} = tareasContext;

    //Effect que detecta si hay una tarea seleccionada
    useEffect(()=>{
        if(tareaseleccionada !== null){
            guardarTarea(tareaseleccionada)
        }else{
            guardarTarea({
                nombre:''
            })
        }
    },[tareaseleccionada])


     //State del formulario
     const [tarea, guardarTarea] = useState({
         nombre:'',

     })

     //Extraer state de tarea
     const {nombre} = tarea


    //Si no hay ningun proyecto Seleccionado
    if(!proyecto) return null;

    //Array destructuring para extraer el proyecto actual
    const [proyectoActual] =proyecto


    //Leer los valores del formulario
    const handleChange = e =>{
        guardarTarea ({
            ...tarea,
            [e.target.name] : e.target.value
        })
    }



    const onSubmit = e =>{
        e.preventDefault();

        ///Validar
        if(nombre.trim() ===''){
            validarTarea();
            return;
        }


        //Si es edicion o si es una nueva Tarea
        if(tareaseleccionada === null) {
            //Tarea nueva



            //Agregar la nueva tarea al state de tarea
            tarea.proyectoId = proyectoActual.id;
            tarea.estado = false
            agregarTarea(tarea);
        }else{
            //Actualizar Tarea existente
            actualizarTarea(tarea);

            //Elimina tarea Seleccionada
            limpiarTarea();
        }

        //Pasar la validacion


    

        //Actualizar las tareas del proyecto actual
        obtenerTareas(proyectoActual.id)


        
        //Reiniciar form
        guardarTarea ({
            nombre:''
        })
    }
    return ( 
        <div className="formulario">
            <form
                onSubmit={onSubmit}
            >
                <div className="contendor-input">
                    <input
                        type="text"
                        className="input-text"
                        placeholder="Nombre Tarea"
                        name="nombre"
                        value={nombre}
                        onChange={handleChange}
                    />
                </div>
                <div className="contendor-input">
                    <input
                        type="submit"
                        className="btn btn-primario btn-submit btn-block"
                        value={tareaseleccionada? 'Editar Tarea' : 'Agregar Tarea'}
                       
                    />
                </div>
            </form>
            {errortarea?<p className="mensaje error">El nombre de la tarea es obligatorio</p>:null}
        </div>
     );
}
 
export default FormTarea;