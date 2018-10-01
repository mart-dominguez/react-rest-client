import React, { Component } from 'react';
import './Tester.css';
import Peticion from './Peticion';
import Respuesta from './Respuesta';

class Tester extends Component {
  render() {
    return (
      <div className="App">
      <h1>instruccionNro: {this.props.instruccionNro}</h1>
      <h3>Current Session {this.props.currentIoTSession}</h3>
      <p>
       {JSON.stringify(this.props.instrucciones[this.props.instruccionNro])}
      </p>
       <Peticion procesarRespuesta={this.props.procesar}
                 indiceEjecutado={this.props.instruccionNro}
                 currentIoTSession={this.props.currentIoTSession}
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
