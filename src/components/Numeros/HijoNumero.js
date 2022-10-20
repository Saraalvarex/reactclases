import {Component} from 'react';

class HijoNumero extends Component{
    render(){

        return(<div>
           <h1>Numero hijo: {this.props.numero}</h1>
            <button onClick={()=>{
                var numero=parseInt(this.props.numero);
                this.props.sumarNumeros(numero);
            }}>
                Sumar  {this.props.numero}
            </button>
        </div>)
    }
}

export default HijoNumero