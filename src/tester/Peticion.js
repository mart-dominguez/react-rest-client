import React, { Component } from 'react';

const BASE_URL = "http://localhost:8080/controller";

class Peticion extends Component {
  constructor(props) {
    super(props);    
    this.handleMakeRequest = this.handleMakeRequest.bind(this);
  } 

  //componentWillMount() {}

  handleMakeRequest(event){ 
    event.preventDefault();
    console.log(event);
    let url = BASE_URL+this.props.instruccion.url;
    let cargaUtil = null;
    let encabezados =  null;
    if(this.props.instruccion.tipo===1){
      encabezados =  {
        "Content-Type": "application/x-www-form-urlencoded",
        "Accept": "application/json"
      };
      cargaUtil = "user=sa&clave=sa";
    }else{
      encabezados =  {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': this.props.token
      };
      let aux = JSON.parse(JSON.stringify(this.props.instruccion.datos));
      aux.sessionid = this.props.currentIoTSession;
      cargaUtil=JSON.stringify(aux) ;
    }
    
    fetch(url, {
     method: 'post',
     headers: encabezados,
     body:cargaUtil
    })
    .then((response) => {      
        console.log(response);
        if(this.props.instruccion.tipo===2)  return response.json();
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
        <div><textarea value={JSON.stringify(this.props.instruccion)} cols={100} rows={8}></textarea></div>
        <div><button onClick={this.handleMakeRequest}>Peticion</button></div>
      </div>
    );
  }
}

export default Peticion;
