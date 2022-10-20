import {Component} from 'react';
import HijoNumero from './HijoNumero';

class PadreNumeros extends Component{
    state = {
        // cont: 0,
        suma: 0,
        lista : []
    }

    generarNumero = () => {
        var numero = parseInt((Math.random() * 100)+1);
        this.state.numeros.push(numero);
        this.setState({
            numeros: this.state.numeros
        });
        console.log("Nuevo número " + numero);
        console.log("Elementos del Array " + this.state.numeros.length);
    }
    
    //Ejecuto en el hijo
    //dibujo en el padre
    sumarNumeros = (valor) => {
        this.setState({
            suma: this.state.suma+valor
        })
    }

    render(){
        return(<div>
           <h1>Numeros Padre</h1>
           <h3 style={{color:"fuchsia"}}>
                La suma es: {this.state.suma}
            </h3>
            <button onClick={this.setState({cont: this.state.cont+1})}>
                Nuevo numero
            </button>
            {
                this.state.numeros.map((numero, index)=>{
                    return(<HijoNumero
                        numero={numero}
                        key={index}
                        sumarNumeros={this.sumarNumeros}/>);
                })
            }
            <HijoNumero/>
        </div>)
    }
}

export default PadreNumeros