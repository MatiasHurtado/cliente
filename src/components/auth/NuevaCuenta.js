import React,{useState,useContext,useEffect} from 'react';
import { Link } from 'react-router-dom';
import AlertaContext from '../../context/alertas/alertaContext';
import AuthContext from '../../context/autenticacion/authContext';

const NuevaCuenta = (props) => {


    //extraer los valores del context alerta
    const alertaContext = useContext(AlertaContext);
    const {alerta,mostrarAlerta} =alertaContext;
    


    //extraer valores de context  auth
    const authContext = useContext(AuthContext)
    const {mensaje,autenticado,registrarUsuario} =authContext;

    //En caso de que el usuario se haya autenticado o registrado  o la cuenta ya exista
    useEffect (() =>{
        if(autenticado){
             props.history.push('/proyectos');
        }
        if(mensaje){
            mostrarAlerta(mensaje.msg,mensaje.categoria)
        }
        // eslint-disable-next-line
    },[mensaje,autenticado,props.history])
 
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
        e.preventDefault();
        

        //Validar que no haya campos vacios
        if(nombre.trim() === ''|| 
            email.trim() === ''||
            password.trim() === ''||
            confirmar.trim() === ''){
                mostrarAlerta('Todos los campos son obligatorios','alerta-error');
                return;
            }

        //Password minimo de 6 caracteres
        if(password.length < 6){
            mostrarAlerta('El password debe ser de al menos 6 caracteres','alerta-error');
            return;
        }

        //Los 2 password son iguales
        if(password !==confirmar){
            mostrarAlerta('Los password deben ser iguales','alerta-error');
            return;
        }


        //Pasar al action
        registrarUsuario({
            nombre,
            email,
            password
        });



    }

        return ( 
            <div className="form-usuario"> 
                {alerta ?(<div className={`alerta ${alerta.categoria}`}>{alerta.msg}</div>) :null}
                <div className="contenedor-form sombra-dark">
                    <h1>Crear Cuenta</h1>
                    <form
                        onSubmit={onsubmit}
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