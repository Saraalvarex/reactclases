import { Component } from "react";
import Comic from './Comic';

class Comics extends Component{
    state = {
        comics :[
            {
              titulo: "Spiderman",
              imagen:
                "https://3.bp.blogspot.com/-i70Zu_LAHwI/T290xxduu-I/AAAAAAAALq8/8bXDrdvW50o/s1600/spiderman1.jpg",
              descripcion: "Hombre araña"
            },
            {
              titulo: "Wolverine",
              imagen:
                "https://images-na.ssl-images-amazon.com/images/I/51c1Q1IdUBL._SX259_BO1,204,203,200_.jpg",
              descripcion: "Lobezno"
            },
            {
              titulo: "Guardianes de la Galaxia",
              imagen:
                "https://cdn.normacomics.com/media/catalog/product/cache/1/thumbnail/9df78eab33525d08d6e5fb8d27136e95/g/u/guardianes_galaxia_guadianes_infinito.jpg",
              descripcion: "Yo soy Groot"
            },
            {
              titulo: "Avengers",
              imagen:
                "https://d26lpennugtm8s.cloudfront.net/stores/057/977/products/ma_avengers_01_01-891178138c020318f315132687055371-640-0.jpg",
              descripcion: "Los Vengadores"
            },
            {
              titulo: "Spawn",
              imagen:
                "https://i.pinimg.com/originals/e1/d8/ff/e1d8ff4aeab5e567798635008fe98ee1.png",
              descripcion: "Al Simmons"
            },
            {
              titulo: "Batman",
              imagen:
                "https://www.comicverso.com/wp-content/uploads/2020/06/The-Killing-Joke-657x1024.jpg",
              descripcion: "Murcielago"
            }
        ],
        //Tipo de dato objeto vacío
        favorito: null
    }
    eliminarComic =(index)=>{
        //Para eliminar envio la posicion
        //SPLICE -> ELIMINAR EN UN ARRAY
        //RECIBE 2 PARAMETROS
        //1) INDICE A ELIMINAR
        //2) NUM DE ELEMENTOS A ELIMINAR
        //elimino desde index 1 elemento
        this.state.comics.splice(index, 1);
        this.setState
        ({
            comics: this.state.comics
        })
    }
    //Recibo todo el comic
    seleccionarFav =(comic)=>{
        //Coge solo el comic que selecciono con el boton al pulsar
        this.setState({
            favorito: comic
        })
    }

    render() {
        return (<div>
            <h1>Padre</h1>
            {
            //Condicion para que no salgan los favoritos si es nulo!
            //this.state.favorito (si existe)
            this.state.favorito != null &&
                (
                <div style={{backgroundColor: "yellow"}}>
                    <h1>{this.state.favorito.titulo}</h1>
                    <img src={this.state.favorito.imagen} style={{width: "200px"}}></img>
                </div>
                )
            }
            {/* Recorremos cada comic guardado en state */}
            {this.state.comics.map((comic, index) => {
                // Dibujo la etiqueta comic
                //ENVIO OBJETO COMIC QUE A SU VEZ EN EL HIJO TENDRA PROPS
                //CON CADA PROPIEDAS: TITULO, ETC
                return (<Comic key={index} comic={comic} eliminarComic={this.eliminarComic} seleccionarFav={this.seleccionarFav}/>)
            })}
        </div>)
    }
}

export default Comics