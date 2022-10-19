import { Component } from "react"

class HijoDeporte extends Component {
    
    seleccionarFavorito = () => {
        //Llamaremos al metodo del parent mediante props
        //capturamos el deporte
        var deporte = this.props.nombre;
        //Llamamos al parent mediante props
        //con el nombre del metodo incicado
        this.props.mostrarFavorito(deporte);
    }

    render(){
        return (<div>
            <h1>{this.props.nombre}</h1>
            {/*<h3 style={{color:"fuchsia"}}>
                Deporte favorito: {this.state.favorito}
            </h3>*/}
            <button onClick={this.seleccionarFavorito}>
                Seleccionar favorito
            </button>
        </div>)
    }
}

export default HijoDeporte