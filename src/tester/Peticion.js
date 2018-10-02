import React, { Component } from 'react';

const BASE_URL = "http://localhost:8080/controller";

class Peticion extends Component {
  constructor(props) {
    super(props);    
    this.handleMakeRequest = this.handleMakeRequest.bind(this);
    this.state = {currentData:"user=sa&clave=sa"}
  } 

  componentWillReceiveProps(nextProps) {
    console.log("componentWillReceiveProps");
    console.log(nextProps);
    let cargaUtil = null;
    if(this.props.instruccion.tipo===1){
      cargaUtil = "user=sa&clave=sa";
    }
    else{
//      let aux = JSON.parse(JSON.stringify(this.props.instruccion.datos));
//      if(this.props.instruccion.tipo===20)aux.sessionid = this.props.currentIoTSessionARM;
//      if(this.props.instruccion.tipo===21)aux.sessionid = this.props.currentIoTSessionReader;
//      cargaUtil=JSON.stringify(aux) ;
      cargaUtil = JSON.stringify(this.props.instruccion.datos);
    }      
    this.setState({currentData:cargaUtil});  
  }

  componentWillMount() {
    let cargaUtil = null;
    console.log("componentWillMount");
    if(this.props.instruccion.tipo===1){
      cargaUtil = "user=sa&clave=sa";
    }
  }

  handleMakeRequest(event){ 
    event.preventDefault();
    console.log(event);
    let url = BASE_URL+this.props.instruccion.url;    
    let encabezados =  null;
    if(this.props.instruccion.tipo===1){
      encabezados =  {
        "Content-Type": "application/x-www-form-urlencoded",
        "Accept": "application/json"
      };
    }else{
      encabezados =  {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': this.props.token
      };
    }
    console.log(this.state.currentData);
    fetch(url, {
     method: 'post',
     headers: encabezados,
     body:this.state.currentData
    })
    .then((response) => {      
        console.log(response);
        if(this.props.instruccion.tipo>1) return response.json();
        else  {
          for (var pair of response.headers.entries()) {
            console.log(pair[0]+ ': '+ pair[1]);
            if(pair[0]==="authorization") return pair[1];
          }
          return null;
        }
    })
    .then((respuesta) => {
        console.log(respuesta);
        this.props.procesarRespuesta(this.props.indiceEjecutado,respuesta);
    });
   };  

  render() {
    return (
      <div>
        <h2>EJECUTAR: {this.props.indiceEjecutado}</h2>
        <div><textarea value={this.state.currentData} cols={100} rows={8}></textarea></div>
        <div><button onClick={this.handleMakeRequest}>Peticion</button></div>
      </div>
    );
  }
}

export default Peticion;
