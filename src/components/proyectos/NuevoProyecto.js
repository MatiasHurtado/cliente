import React,{Fragment,useState} from 'react';
const NuevoProyecto = () => {

    //State Para Proyecto
    const [proyecto, guardarProyecto] = useState({
        nombre:''

    });

    //Leer contenidos del input
    const onChangeProyecto = e => {
        guardarProyecto({
            ...proyecto,
            [e.target.name]: e.target.value
        })
    }
    //Extraer nombre de proyecto

    const {nombre} = proyecto;

    //Cuando el usuario envia un proyecto
    const onSubmitProyecto = e =>{
        e.preventDefault();


        //validacion

        //Agregar Al state

        //Reiniciar el Form
    }

    return ( 

        <Fragment>
            <button
                type="button"
                className="btn btn-block btn-primario"
            >Nuevo Proyecto</button>
            <form
                 className="formulario-nuevo-proyecto"
                 onSubmit={onSubmitProyecto}
            >
                <input
                    type="text"
                    className="input-text"
                    placeholder="Nombre Proyecto"
                    name="nombre"
                    value={nombre}
                    onChange={onChangeProyecto}
                />   

                <input
                    type="submit"
                    className="btn btn-primario btn-block"
                    value="Agregar Proyecto"
                />    
            </form>
        </Fragment>


     );
}
 
export default NuevoProyecto;