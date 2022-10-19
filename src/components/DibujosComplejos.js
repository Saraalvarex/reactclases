import { Component } from "react";

class DibujosComplejos extends Component{
    //Metodos que nos devolverá una serie de numeros
    dibujarNumeros = () => {
        //Array para almacenar numeros
        //No contendra solo numeros
        //Tambien código html
        //Dentro del metodo utilizo var, let, const, fuera no
        var lista = [];
        //lista contiene metodo push()
        //Bucle para generar numeros y añadirlos a nuestra coleccion
        for (var i=1; i<=10; i++){
            var numero = parseInt((Math.random() * 100)+1);
            //El dibujo html se almacena en la coleccion
            //junto a los elementos a dibujas
            lista.push(<li key={i}>{numero}</li>);
        }
        return lista;
    }

    render(){
        return (<div>
            <h1>Dibujos complejos</h1>
            {/*Si quiero que lo ejecute cuando carga la página
            le pongo parentesis, si no le pongo parentesis espera un CUANDO*/}
            <ul>{this.dibujarNumeros()}</ul>
        </div>)
    }
}

export default DibujosComplejos;