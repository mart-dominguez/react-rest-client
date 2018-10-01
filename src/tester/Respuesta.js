import React, { Component } from 'react';

class Respuesta extends Component {  
  constructor(props) {
    super(props);    
  } 

  //componentWillMount() {}
    

  render() {
    let rpta = this.props.instrucciones.slice(0,this.props.indiceEjecutado).map((e,ind) => {
      console.log(e);
      console.log(ind);
      let estilo1 = {wordWrap: "break-word"};
      if(e.tipo===1)
          return <tr key={ind}>
                <td>{ind}</td>
                <td>{e.url}</td>
                <td>user=******&clave=******</td>                
                <td>TOKEN *******</td>
                </tr>
      else
        return <tr key={ind}>
                <td>{ind}</td>
                <td>{e.url}</td>
                <td style={estilo1}>{JSON.stringify(e.datos)}</td>
                <td style={estilo1}>{JSON.stringify(e.respuesta)}</td>
              </tr>;
    });
    console.log(rpta);
    return (
      <div>
        <h2>Resultado ejecucion hasta {this.props.indiceEjecutado}</h2>
        <table border={1}>
          <thead>
            <tr>
              <th>Nro</th>
              <th>URL</th>
              <th>Datos</th>
              <th>Respuesta</th>
            </tr>
          </thead>
          <tbody>
              {rpta}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Respuesta;
