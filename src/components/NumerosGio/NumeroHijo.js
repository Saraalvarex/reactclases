import { Component } from "react";

class NumeroHijo extends Component {
    
    render(){
        return(
            <div>
                <h1 style={{color:"blue"}}>Número Hijo: {this.props.Number}</h1>
                <button onClick={() => {
                    this.props.callPadre(this.props.Number);
                }}>
                    Sumar numero {this.props.Number}
                </button>
            </div>
        );
    }

}

export default NumeroHijo;