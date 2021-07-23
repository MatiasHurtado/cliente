import React,{useState} from 'react';
import { Link } from 'react-router-dom';

const NuevaCuenta = () => {
    
    //State para iniciar sesion
    const [usuario, guardarUsuario] = useState({
        nombre:'',
        email:'',
        password:'',
        confirmar:''

    });

    // extrear de usuario
    const {nombre,email,password,confirmar} = usuario;
       
    const onChange = (e) => {
        guardarUsuario({
            ...usuario,
            [e.target.name] : e.target.value
        })

    }


    //Cuando el usuario quiere iniciar sesion
    const onsubmit = e =>{
        e.preventDefault()

        //Validar que no haya campos vacios


        //Password minimo de 6 caracteres


        //Los 2 password son iguales


        //Pasar al action



    }

        return ( 
            <div className="form-usuario"> 
                <div className="contenedor-form sombra-dark">
                    <h1>Crear Cuenta</h1>
                    <form
                        onsubmit={onsubmit}
                    >
                        <div className="campo-form">
                            <label htmlFor="nombre">Nombre</label>
                            <input
                                type="text"
                                id="nombre"
                                name="nombre"
                                placeholder="Tu Nombre"
                                value={nombre}
                                onChange={onChange}
                            />
                        </div>
                        <div className="campo-form">
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder="Tu email"
                                value={email}
                                onChange={onChange}
                            />
                        </div>
                        <div className="campo-form">
                            <label htmlFor="confirmar">Password</label>
                            <input
                                type="password"
                                id="confirmar"
                                name="confirmar"
                                placeholder="Repite tu password"
                                value={confirmar}
                                onChange={onChange}
                            />
                        </div>
                        <div className="campo-form">
                            <label htmlFor="password">Password</label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                placeholder="Ingresa tu password"
                                value={password}
                                onChange={onChange}
                            />
                        </div>

                        <div className="campo-form">
                            <input
                                type="submit"
                                className="btn btn-primario btn-block"
                                value="Registrar"
                            />
                        </div>
                    </form>
                    <Link to={'/'} className="enlace-cuenta">
                        Iniciar Sesion
                    </Link>
                </div>
            </div>
         );
    
}
export default NuevaCuenta;