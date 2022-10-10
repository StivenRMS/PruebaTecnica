import React, {useState} from "react";

import 'bootstrap/dist/css/bootstrap.min.css';
import '../Css/Login.css';



function Palindromos() {

    

   
    const [form, setForm] = useState({ //para guardar los que se escriben en el formulario
        palabra:"",
        
    });
const handleChanges = (e) => {
    const {name, value} = e.target;
    setForm({
        ...form,
        [name]:value
    });
   console.log(form);
};

//algoritmo que cuentes las palabras palindromas
const contarPalindromos = (form) => {
    var texto = form.palabra;
    console.log("texto",texto);
    var palabras = texto.split(" ");
    var contador = 0;
    for (var i = 0; i < palabras.length; i++) {
        var palabra = palabras[i];
        var palabraInvertida = palabra.split("").reverse().join("");
        if (palabra === palabraInvertida) {
            contador++;
        }
    }
    console.log("La cantidad de palabras palindromas es: " + contador);
};






  return (
    <div className="containerPrincipal">
    <div className="containerLogin">   
        <div className="form-group">
            <label >Ingresar la palabra </label>
            <br/>
            <input name="palabra" type="text" className="form-control" id="usuario" placeholder="Palindromos" onChange={handleChanges}/>
            <br/>
            <button type="submit" className="btn btn-primary" onClick={()=>contarPalindromos}>Buscar</button>
        </div>
    </div>
    </div>
    
   
  );
}

export default Palindromos;