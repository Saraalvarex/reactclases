//Debemos importar Component para esta sintaxis
//Component trae useState y los props
import { Component } from "react";
//Podemos utilizar functions externas a la clase.
//En dichas funciones no se puede utilizar nada
//de la clase
function miFunction() {
    console.log("Funtion externa a la clase");
}

class Contador extends Component {
    //ZONA DE DECLARACION DE VARIABLES
    //La declaración de variables no utiliza ni var, ni const ni nada para su declaracion
    numero = 1;
    //Metodo para incrementar numero
    incrementarNumero = () => {
        this.numero = this.numero+1;
        console.log(this.numero);
    }
    //useState a nivel de clase para inicializar
    //Declaro el objeto state
    state = {
        valor: parseInt(this.props.inicio)
    };
    //setState para modificar el valor de la clase
    incrementarValor = () => {
        this.setState({
            valor: this.state.valor+1
        });
    }
    //Toda clase debe contener un render
    //Render=dibujo y se actualiza cada vez que cambiamos un state
    //El render es como utilizar function()
    render () {
        return(<div>
            <h1>Contador JSX ES6</h1>
            <h2 style={{color:"blue"}}>Inicio: {this.props.inicio}</h2>
            <h2 style={{color:"red"}}>Valor del state: {this.state.valor}</h2>
            <button onClick={this.incrementarValor}>Incrementar el valor del state</button>
        {/*FUNCIONES ANONIMAS*/}
        <button onClick={()=>{
            //Si llamamos a cualquier elemento fuera
            //de la clase se hace sin this
            miFunction();
            //Elementos de la clase con this
            this.incrementarNumero();
        }}>Pulsa</button>
        </div>)
    }
}

export default Contador;