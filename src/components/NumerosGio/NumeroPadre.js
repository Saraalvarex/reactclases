import { Component } from "react";
import NumeroHijo from "./NumeroHijo";

class NumeroPadre extends Component{
    state = {
        aNum: [],
        resultado: 0
    }

    crearNumeroHijo = () => {
        var nuevoNumero = parseInt(((Math.random() * 100) + 1));
        this.setState({
            aNum: [...this.state.aNum, nuevoNumero]
        });
    }

    sumarNumero = (n) => {
        this.setState({
            resultado: this.state.resultado + n
        });
    }

    render() {
        return(
            <div>
                <h1>Numeros Padre</h1>
                <h3 style={{color:"red"}}>La suma es: {this.state.resultado}</h3>
                <button onClick={this.crearNumeroHijo}>Nuevo numero</button>
                {
                    this.state.aNum.map((num,index) => {
                        return(
                            <NumeroHijo Number={num} callPadre={this.sumarNumero} key={index}/>
                        );
                    })
                }
            </div>
        );
    }

}

export default NumeroPadre;