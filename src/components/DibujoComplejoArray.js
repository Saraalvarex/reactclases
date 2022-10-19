import { Component } from "react";

class DibujoComplejoArray extends Component {
    //Almacenamos dentro del state un array de String(nombres)

    state = {
        nombres: ["Lucia", "Diana", "Pepe", "Francis", "Roberto"]
    }
    nuevoNombre = () => {
        this.state.nombres.push("Piter");
        this.setState({
            nombres: this.state.nombres
        });
    }
    render() {
        return(<div>
            <h1>Dibujo Complejo Array</h1>
            {/*<p>{this.nuevoNombre()}</p>*/}
            <button onClick={() => this.nuevoNombre()}>AÑADIR NOMBRE 1</button>
            <button onClick={this.nuevoNombre}>AÑADIR NOMBRE 2</button>
            {
                //Código lógico con lenguaje REACT
                
                this.state.nombres.map((name, index) => {
                    //Este código se ejecuta por cada elemento
                    //Nunca podemos dejarlo vacío
                    //Siempre debe devolver un return (porque esta dentro de render!)
                    return (<h3 key={index} style={{color:"red"}}>
                        {name}
                    </h3>)
                })
            }
        </div>)
    }
}

export default DibujoComplejoArray;