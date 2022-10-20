import { Component } from "react";

class Comic extends Component{

    elegirFav =()=>{
        console.log("entra");
        //var favorito = this.props.comic
    }

    render() {
        return (<div>
                <h1 style={{color:"blue"}}>
                    {this.props.comic.titulo}
                </h1>
                <h3>{this.props.comic.descripcion}</h3>
                <img src={this.props.comic.imagen} alt=""
                style={{width: "200px"}}/>
                <br/>
                <button onClick={()=>{
                    //Llamo a la funcion del padre
                    this.props.seleccionarFav(this.props.comic)
                    }
                }>Favorito</button>
                <button onClick={()=>{
                    var index=parseInt(this.props.index);
                    this.props.eliminarComic(index);
                }}>Eliminar</button>
            </div>)
    }

}

export default Comic