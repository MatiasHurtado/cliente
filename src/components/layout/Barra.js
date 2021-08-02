import React,{useEffect,useContext} from 'react';
import AuthContext from '../../context/autenticacion/authContext';

const Barra = () => {

      //Extraer la informacion de autenticacion
      const authContext = useContext(AuthContext)
      const {usuario,usuarioAutenticado,cerrarSesion}= authContext

      useEffect(() => {
        usuarioAutenticado()
         }, [])
    return ( 
        <header className="app-header">
        {usuario? <p className="nombre-usuario">Hola<span> {usuario.nombre}</span></p>:null}
           

            <nav className="nav-principal">
                <button
                    className="btn btn-black cerrar-sesion"
                    onClick={()=> cerrarSesion()}
                >CERRAR SESION</button>
            </nav>


        </header>
     );
}
 
export default Barra;