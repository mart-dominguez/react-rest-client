import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Tester from './tester/Tester';

const SERIAL_ARM = 1234;
const EXPERIMENT_ID = 980;
const PROJECT_ID = 786;
const SESSION_ID =0;
const instrucciones = [
  {
    descrip: "GET_TOKEN",
    url: "/login",
    tipo: 1,
    datos: null,
    respuesta:null
  },
  {
    descrip: "IOT LOGIN",
    url: "/instructions/",
    tipo: 2,
    datos: {
      "serial": SERIAL_ARM,
      "firmware": "fmw",
      "action": "LOGIN",
      "status": null,
      "sessionid": 0,
      "temperature": null,
      "time": null,
      "data": null,
      "result": null
    },
    respuesta:null
  },
  {
    descrip: "IOT POLL 1",
    url: "/instructions/",
    tipo: 2,
    datos: {
      "serial": SERIAL_ARM,  
      "firmware": "fmw",  
      "action": "POLL",  
      "status": "idle",
      "sessionid": SESSION_ID,
      "temperature": null,
      "time": null,  
      "data": null,  
      "result": null
    },
    respuesta:null
  },
  {
    descrip: "Take station",
    url: "/controller/",
    tipo: 2,
    datos: {
      "experimentId":EXPERIMENT_ID,    
      "line":"10",    
      "start":"2018-09-25 11:59:32",    
      "duration":"00d00h00m20s",    
      "device":"<ARM001>",    
      "command":"TAKE STATION3.4",    
      "projectId":PROJECT_ID
    
    },
    respuesta:null
  },
  {
    descrip: "IOT POLL 2",
    url: "/instructions/",
    tipo: 2,
    datos: {
      "serial": SERIAL_ARM,  
      "firmware": "fmw",  
      "action": "POLL",  
      "status": "idle",
      "sessionid": SESSION_ID,
      "temperature": null,
      "time": null,  
      "data": null,  
      "result": null
    },
    respuesta:null
  }
]

class App extends Component {
  
  constructor(props) {
    super(props);    
    this.state = { pasos:instrucciones, indiceActual:0,token:null,sessionid:0 };
    this.ejecutarPaso = this.ejecutarPaso.bind(this);
  }   

  ejecutarPaso(indice,respuesta) {
    console.log("==== respuesta === ");
    console.log(respuesta);
    let nuevoToken = null;
    let nuevo = this.state.pasos[indice];
    nuevo.respuesta=respuesta;    
    let arrayActualizado = instrucciones.slice();
    arrayActualizado.splice(indice,1,nuevo);
    console.log(arrayActualizado);
    this.setState({ pasos: arrayActualizado,indiceActual:indice+1 });    
    if(indice===0){
      this.setState({token:respuesta})
    }
    if(respuesta && respuesta.sessionid) this.setState({sessionid:respuesta.sessionid})
  }

  render() {
    return (
      <div className="App">
       <Tester  instrucciones={this.state.pasos} 
                instruccionNro={this.state.indiceActual}
                procesar={this.ejecutarPaso}
                currentIoTSession={this.state.sessionid}
                token={this.state.token} ></Tester>
      </div>
    );
  }
}

export default App;
