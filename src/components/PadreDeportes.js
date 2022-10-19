import { Component } from "react";
import HijoDeporte from "./HijoDeporte";

class PadreDeportes extends Component{
    //Array deportes en state
    //para dibujarlo en la pag
    state = {
        deportes: ["Futbol", "Balonceso", "Aeroyoga", "Surf"],
        favorito: ""
    }
    //Este metodo lo llamamos desde el hijo
    mostrarFavorito = (dfavorito) => {
        //Segun recibamos un valor del hijo, lo incluimos en state
        // para mostrarlo en la pagina
        this.setState({
            favorito: dfavorito
        })
    }

    render(){
        return(<div>
            <h1 style={{color:"red"}}>Padre deportes</h1>
            <h3 style={{color:"fuchsia"}}>
                Deporte favorito: {this.state.favorito}
            </h3>
            {
                this.state.deportes.map((deporte, index)=>{
                    return(<HijoDeporte nombre={deporte} key={index}
                         mostrarFavorito={this.mostrarFavorito}/>);
                })
            }
        </div>)
    }
}

export default PadreDeportes