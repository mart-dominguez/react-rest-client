import React, { Component } from 'react';
import './Tester.css';
import Peticion from './Peticion';
import Respuesta from './Respuesta';

class Tester extends Component {
  render() {
    return (
      <div className="App">
      <h1>instruccionNro: {this.props.instruccionNro}</h1>
      <h3>Current Session ARM {this.props.currentIoTSessionARM}</h3>
      <h3>Current Session Reader {this.props.currentIoTSessionReader}</h3>
      <p>
       {JSON.stringify(this.props.instrucciones[this.props.instruccionNro])}
      </p>
       <Peticion procesarRespuesta={this.props.procesar}
                 indiceEjecutado={this.props.instruccionNro}
                 currentIoTSessionARM={this.props.currentIoTSessionARM}
                 currentIoTSessionReader={this.props.currentIoTSessionReader}
                 instruccion={this.props.instrucciones[this.props.instruccionNro]}
                 token={this.props.token}></Peticion>
       <Respuesta
        indiceEjecutado={this.props.instruccionNro}
        instrucciones={this.props.instrucciones}></Respuesta>
      </div>
    );
  }
}

export default Tester;
