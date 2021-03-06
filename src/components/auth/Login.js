import React,{useState,useContext,useEffect} from 'react';
import { Link } from 'react-router-dom';
import AlertaContext from '../../context/alertas/alertaContext';
import AuthContext from '../../context/autenticacion/authContext';

const Login = (props) => {


     //extraer los valores del context alerta
     const alertaContext = useContext(AlertaContext);
     const {alerta,mostrarAlerta} =alertaContext;
     
 
 
     //extraer valores de context  auth
     const authContext = useContext(AuthContext)
     const {mensaje,autenticado,iniciarSesion} =authContext;




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
        email:'',
        password:''
    });

    // extrear de usuario
    const {email,password} = usuario;
       
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
        if(email.trim()===''|| password.trim()===''){
            mostrarAlerta('Todos los campos son obligatoris', 'alerta-error');
        }

        //Pasar al action
        iniciarSesion({email,password});


    }

        return ( 
            <div className="form-usuario"> 
             {alerta ?(<div className={`alerta ${alerta.categoria}`}>{alerta.msg}</div>) :null}
                <div className="contenedor-form sombra-dark">
                    <h1>Iniciar Sesion</h1>
                    <form
                        onSubmit={onsubmit}
                    >
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
                                value="Iniciar Sesion"
                            />
                        </div>
                    </form>
                    <Link to={'/nueva-cuenta'} className="enlace-cuenta">
                        Obtener Cuenta
                    </Link>
                </div>
            </div>
         );
    
}
export default Login;