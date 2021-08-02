import clienteAxios from "./axios";


//Encargada de enviar el token por headers que es donde se revisa el token al momento de lealizar la peticion
const tokenAuth = token =>{
    if(token){
        clienteAxios.defaults.headers.common['x-auth-token'] = token
    }else{
        delete clienteAxios.defaults.headers.common['x-auth-token']
    }
}
export default tokenAuth;