import React, {useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Css/Login.css';
import { getLogin } from "../Api/getLogin";


function Login() {

    

    const [form, setForm] = useState({ //para guardar los que se escriben en el formulario
        username:"",
        password:""
    });
const handleChanges = (e) => {
    const {name, value} = e.target;
    setForm({
        ...form,
        [name]:value
    });
   console.log(form);
};

const iniciarSesion = async () => {
   //peticion get para validar el usuario
    const response = await getLogin(form.username, form.password); //envia las variables al metodo getLogin
    const data = await response.json();
    //console.log(data);
    if (data.length > 0) {//si el usuario existe entramos
        window.location.href="./MantenimientoE";
        console.log("Bienvenido");
    }
    else{
        alert("Usuario o contraseña incorrectos"); //si no existe el usuario mostramos este alert
    }

};

  return (
    <div className="containerPrincipal">
    <div className="containerLogin">   
        <div className="form-group">
            <label >Usuario: </label>
            <br/>
            <input name="username" type="text" className="form-control" id="usuario" placeholder="Ingrese su usuario" onChange={handleChanges}/>
            <br/>
            <label >Contraseña: </label>
            <br/>
            <input name="password" type="password" className="form-control" id="contrasena" placeholder="Ingrese su contraseña" onChange={handleChanges} />
            <br/>
            <button type="submit" className="btn btn-primary" onClick={()=> iniciarSesion()}>Iniciar Sesion</button>
        </div>
    </div>
    </div>
    
   
  );
}

export default Login;