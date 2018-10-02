import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Tester from './tester/Tester';

const SERIAL_ARM = 1234;
const SERIAL_READER = 86;
const SERIAL_FILLER = 100;
const SESION_ARM = 25;
const SESION_FILLER = 20;
const SESION_READER = 18;
const EXPERIMENT_ID = 980;
const PROJECT_ID = 786;
const instrucciones = [
  {
    descrip: "GET_TOKEN",
    url: "/login",
    tipo: 1,
    datos: null,
    respuesta:null
  },  
  {
    descrip: "IOT POLL ARM",
    url: "/instructions/",
    tipo: 20,
    datos: {
      "serial": SERIAL_ARM,  
      "firmware": "fmw",  
      "action": "POLL",  
      "status": "idle",
      "sessionid": SESION_ARM,
      "temperature": null,
      "time": null,  
      "data": null,  
      "result": null
    },
    respuesta:null
  },
  {
    descrip: "IOT POLL READER",
    url: "/instructions/",
    tipo: 21,
    datos: {
      "serial": SERIAL_READER,  
      "firmware": "fmw",  
      "action": "POLL",  
      "status": "idle",
      "sessionid": SESION_READER,
      "temperature": null,
      "time": null,  
      "data": null,  
      "result": null
    },
    respuesta:null
  },
  {
    descrip: "IOT POLL FILLER",
    url: "/instructions/",
    tipo: 22,
    datos: {
      "serial": SERIAL_FILLER,  
      "firmware": "fmw",  
      "action": "POLL",  
      "status": "idle",
      "sessionid": SESION_FILLER,
      "temperature": null,
      "time": null,  
      "data": null,  
      "result": null
    },
    respuesta:null
  },{
    descrip: "IOT POLL ARM",
    url: "/instructions/",
    tipo: 20,
    datos: {
      "serial": SERIAL_ARM,  
      "firmware": "fmw",  
      "action": "POLL",  
      "status": "idle",
      "sessionid": SESION_ARM,
      "temperature": null,
      "time": null,  
      "data": null,  
      "result": null
    },
    respuesta:null
  },
  {
    descrip: "IOT POLL READER",
    url: "/instructions/",
    tipo: 21,
    datos: {
      "serial": SERIAL_READER,  
      "firmware": "fmw",  
      "action": "POLL",  
      "status": "idle",
      "sessionid": SESION_READER,
      "temperature": null,
      "time": null,  
      "data": null,  
      "result": null
    },
    respuesta:null
  },
  {
    descrip: "IOT POLL FILLER",
    url: "/instructions/",
    tipo: 22,
    datos: {
      "serial": SERIAL_FILLER,  
      "firmware": "fmw",  
      "action": "POLL",  
      "status": "idle",
      "sessionid": SESION_FILLER,
      "temperature": null,
      "time": null,  
      "data": null,  
      "result": null
    },
    respuesta:null
  },{
    descrip: "IOT POLL ARM",
    url: "/instructions/",
    tipo: 20,
    datos: {
      "serial": SERIAL_ARM,  
      "firmware": "fmw",  
      "action": "POLL",  
      "status": "idle",
      "sessionid": SESION_ARM,
      "temperature": null,
      "time": null,  
      "data": null,  
      "result": null
    },
    respuesta:null
  },
  {
    descrip: "IOT POLL READER",
    url: "/instructions/",
    tipo: 21,
    datos: {
      "serial": SERIAL_READER,  
      "firmware": "fmw",  
      "action": "POLL",  
      "status": "idle",
      "sessionid": SESION_READER,
      "temperature": null,
      "time": null,  
      "data": null,  
      "result": null
    },
    respuesta:null
  },
  {
    descrip: "IOT POLL FILLER",
    url: "/instructions/",
    tipo: 22,
    datos: {
      "serial": SERIAL_FILLER,  
      "firmware": "fmw",  
      "action": "POLL",  
      "status": "idle",
      "sessionid": SESION_FILLER,
      "temperature": null,
      "time": null,  
      "data": null,  
      "result": null
    },
    respuesta:null
  },{
    descrip: "IOT POLL ARM",
    url: "/instructions/",
    tipo: 20,
    datos: {
      "serial": SERIAL_ARM,  
      "firmware": "fmw",  
      "action": "POLL",  
      "status": "idle",
      "sessionid": SESION_ARM,
      "temperature": null,
      "time": null,  
      "data": null,  
      "result": null
    },
    respuesta:null
  },
  {
    descrip: "IOT POLL READER",
    url: "/instructions/",
    tipo: 21,
    datos: {
      "serial": SERIAL_READER,  
      "firmware": "fmw",  
      "action": "POLL",  
      "status": "idle",
      "sessionid": SESION_READER,
      "temperature": null,
      "time": null,  
      "data": null,  
      "result": null
    },
    respuesta:null
  },
  {
    descrip: "IOT POLL FILLER",
    url: "/instructions/",
    tipo: 22,
    datos: {
      "serial": SERIAL_FILLER,  
      "firmware": "fmw",  
      "action": "POLL",  
      "status": "idle",
      "sessionid": SESION_FILLER,
      "temperature": null,
      "time": null,  
      "data": null,  
      "result": null
    },
    respuesta:null
  },{
    descrip: "IOT POLL ARM",
    url: "/instructions/",
    tipo: 20,
    datos: {
      "serial": SERIAL_ARM,  
      "firmware": "fmw",  
      "action": "POLL",  
      "status": "idle",
      "sessionid": SESION_ARM,
      "temperature": null,
      "time": null,  
      "data": null,  
      "result": null
    },
    respuesta:null
  },
  {
    descrip: "IOT POLL READER",
    url: "/instructions/",
    tipo: 21,
    datos: {
      "serial": SERIAL_READER,  
      "firmware": "fmw",  
      "action": "POLL",  
      "status": "idle",
      "sessionid": SESION_READER,
      "temperature": null,
      "time": null,  
      "data": null,  
      "result": null
    },
    respuesta:null
  },
  {
    descrip: "IOT POLL FILLER",
    url: "/instructions/",
    tipo: 22,
    datos: {
      "serial": SERIAL_FILLER,  
      "firmware": "fmw",  
      "action": "POLL",  
      "status": "idle",
      "sessionid": SESION_FILLER,
      "temperature": null,
      "time": null,  
      "data": null,  
      "result": null
    },
    respuesta:null
  },{
    descrip: "IOT POLL ARM",
    url: "/instructions/",
    tipo: 20,
    datos: {
      "serial": SERIAL_ARM,  
      "firmware": "fmw",  
      "action": "POLL",  
      "status": "idle",
      "sessionid": SESION_ARM,
      "temperature": null,
      "time": null,  
      "data": null,  
      "result": null
    },
    respuesta:null
  },
  {
    descrip: "IOT POLL READER",
    url: "/instructions/",
    tipo: 21,
    datos: {
      "serial": SERIAL_READER,  
      "firmware": "fmw",  
      "action": "POLL",  
      "status": "idle",
      "sessionid": SESION_READER,
      "temperature": null,
      "time": null,  
      "data": null,  
      "result": null
    },
    respuesta:null
  },
  {
    descrip: "IOT POLL FILLER",
    url: "/instructions/",
    tipo: 22,
    datos: {
      "serial": SERIAL_FILLER,  
      "firmware": "fmw",  
      "action": "POLL",  
      "status": "idle",
      "sessionid": SESION_FILLER,
      "temperature": null,
      "time": null,  
      "data": null,  
      "result": null
    },
    respuesta:null
  },{
    descrip: "IOT POLL ARM",
    url: "/instructions/",
    tipo: 20,
    datos: {
      "serial": SERIAL_ARM,  
      "firmware": "fmw",  
      "action": "POLL",  
      "status": "idle",
      "sessionid": SESION_ARM,
      "temperature": null,
      "time": null,  
      "data": null,  
      "result": null
    },
    respuesta:null
  },
  {
    descrip: "IOT POLL READER",
    url: "/instructions/",
    tipo: 21,
    datos: {
      "serial": SERIAL_READER,  
      "firmware": "fmw",  
      "action": "POLL",  
      "status": "idle",
      "sessionid": SESION_READER,
      "temperature": null,
      "time": null,  
      "data": null,  
      "result": null
    },
    respuesta:null
  },
  {
    descrip: "IOT POLL FILLER",
    url: "/instructions/",
    tipo: 22,
    datos: {
      "serial": SERIAL_FILLER,  
      "firmware": "fmw",  
      "action": "POLL",  
      "status": "idle",
      "sessionid": SESION_FILLER,
      "temperature": null,
      "time": null,  
      "data": null,  
      "result": null
    },
    respuesta:null
  },{
    descrip: "IOT POLL ARM",
    url: "/instructions/",
    tipo: 20,
    datos: {
      "serial": SERIAL_ARM,  
      "firmware": "fmw",  
      "action": "POLL",  
      "status": "idle",
      "sessionid": SESION_ARM,
      "temperature": null,
      "time": null,  
      "data": null,  
      "result": null
    },
    respuesta:null
  },
  {
    descrip: "IOT POLL READER",
    url: "/instructions/",
    tipo: 21,
    datos: {
      "serial": SERIAL_READER,  
      "firmware": "fmw",  
      "action": "POLL",  
      "status": "idle",
      "sessionid": SESION_READER,
      "temperature": null,
      "time": null,  
      "data": null,  
      "result": null
    },
    respuesta:null
  },
  {
    descrip: "IOT POLL FILLER",
    url: "/instructions/",
    tipo: 22,
    datos: {
      "serial": SERIAL_FILLER,  
      "firmware": "fmw",  
      "action": "POLL",  
      "status": "idle",
      "sessionid": SESION_FILLER,
      "temperature": null,
      "time": null,  
      "data": null,  
      "result": null
    },
    respuesta:null
  },{
    descrip: "IOT POLL ARM",
    url: "/instructions/",
    tipo: 20,
    datos: {
      "serial": SERIAL_ARM,  
      "firmware": "fmw",  
      "action": "POLL",  
      "status": "idle",
      "sessionid": SESION_ARM,
      "temperature": null,
      "time": null,  
      "data": null,  
      "result": null
    },
    respuesta:null
  },
  {
    descrip: "IOT POLL READER",
    url: "/instructions/",
    tipo: 21,
    datos: {
      "serial": SERIAL_READER,  
      "firmware": "fmw",  
      "action": "POLL",  
      "status": "idle",
      "sessionid": SESION_READER,
      "temperature": null,
      "time": null,  
      "data": null,  
      "result": null
    },
    respuesta:null
  },
  {
    descrip: "IOT POLL FILLER",
    url: "/instructions/",
    tipo: 22,
    datos: {
      "serial": SERIAL_FILLER,  
      "firmware": "fmw",  
      "action": "POLL",  
      "status": "idle",
      "sessionid": SESION_FILLER,
      "temperature": null,
      "time": null,  
      "data": null,  
      "result": null
    },
    respuesta:null
  },{
    descrip: "IOT POLL ARM",
    url: "/instructions/",
    tipo: 20,
    datos: {
      "serial": SERIAL_ARM,  
      "firmware": "fmw",  
      "action": "POLL",  
      "status": "idle",
      "sessionid": SESION_ARM,
      "temperature": null,
      "time": null,  
      "data": null,  
      "result": null
    },
    respuesta:null
  },
  {
    descrip: "IOT POLL READER",
    url: "/instructions/",
    tipo: 21,
    datos: {
      "serial": SERIAL_READER,  
      "firmware": "fmw",  
      "action": "POLL",  
      "status": "idle",
      "sessionid": SESION_READER,
      "temperature": null,
      "time": null,  
      "data": null,  
      "result": null
    },
    respuesta:null
  },
  {
    descrip: "IOT POLL FILLER",
    url: "/instructions/",
    tipo: 22,
    datos: {
      "serial": SERIAL_FILLER,  
      "firmware": "fmw",  
      "action": "POLL",  
      "status": "idle",
      "sessionid": SESION_FILLER,
      "temperature": null,
      "time": null,  
      "data": null,  
      "result": null
    },
    respuesta:null
  },{
    descrip: "IOT POLL ARM",
    url: "/instructions/",
    tipo: 20,
    datos: {
      "serial": SERIAL_ARM,  
      "firmware": "fmw",  
      "action": "POLL",  
      "status": "idle",
      "sessionid": SESION_ARM,
      "temperature": null,
      "time": null,  
      "data": null,  
      "result": null
    },
    respuesta:null
  },
  {
    descrip: "IOT POLL READER",
    url: "/instructions/",
    tipo: 21,
    datos: {
      "serial": SERIAL_READER,  
      "firmware": "fmw",  
      "action": "POLL",  
      "status": "idle",
      "sessionid": SESION_READER,
      "temperature": null,
      "time": null,  
      "data": null,  
      "result": null
    },
    respuesta:null
  },
  {
    descrip: "IOT POLL FILLER",
    url: "/instructions/",
    tipo: 22,
    datos: {
      "serial": SERIAL_FILLER,  
      "firmware": "fmw",  
      "action": "POLL",  
      "status": "idle",
      "sessionid": SESION_FILLER,
      "temperature": null,
      "time": null,  
      "data": null,  
      "result": null
    },
    respuesta:null
  },{
    descrip: "IOT POLL ARM",
    url: "/instructions/",
    tipo: 20,
    datos: {
      "serial": SERIAL_ARM,  
      "firmware": "fmw",  
      "action": "POLL",  
      "status": "idle",
      "sessionid": SESION_ARM,
      "temperature": null,
      "time": null,  
      "data": null,  
      "result": null
    },
    respuesta:null
  },
  {
    descrip: "IOT POLL READER",
    url: "/instructions/",
    tipo: 21,
    datos: {
      "serial": SERIAL_READER,  
      "firmware": "fmw",  
      "action": "POLL",  
      "status": "idle",
      "sessionid": SESION_READER,
      "temperature": null,
      "time": null,  
      "data": null,  
      "result": null
    },
    respuesta:null
  },
  {
    descrip: "IOT POLL FILLER",
    url: "/instructions/",
    tipo: 22,
    datos: {
      "serial": SERIAL_FILLER,  
      "firmware": "fmw",  
      "action": "POLL",  
      "status": "idle",
      "sessionid": SESION_FILLER,
      "temperature": null,
      "time": null,  
      "data": null,  
      "result": null
    },
    respuesta:null
  },{
    descrip: "IOT POLL ARM",
    url: "/instructions/",
    tipo: 20,
    datos: {
      "serial": SERIAL_ARM,  
      "firmware": "fmw",  
      "action": "POLL",  
      "status": "idle",
      "sessionid": SESION_ARM,
      "temperature": null,
      "time": null,  
      "data": null,  
      "result": null
    },
    respuesta:null
  },
  {
    descrip: "IOT POLL READER",
    url: "/instructions/",
    tipo: 21,
    datos: {
      "serial": SERIAL_READER,  
      "firmware": "fmw",  
      "action": "POLL",  
      "status": "idle",
      "sessionid": SESION_READER,
      "temperature": null,
      "time": null,  
      "data": null,  
      "result": null
    },
    respuesta:null
  },
  {
    descrip: "IOT POLL FILLER",
    url: "/instructions/",
    tipo: 22,
    datos: {
      "serial": SERIAL_FILLER,  
      "firmware": "fmw",  
      "action": "POLL",  
      "status": "idle",
      "sessionid": SESION_FILLER,
      "temperature": null,
      "time": null,  
      "data": null,  
      "result": null
    },
    respuesta:null
  },{
    descrip: "IOT POLL ARM",
    url: "/instructions/",
    tipo: 20,
    datos: {
      "serial": SERIAL_ARM,  
      "firmware": "fmw",  
      "action": "POLL",  
      "status": "idle",
      "sessionid": SESION_ARM,
      "temperature": null,
      "time": null,  
      "data": null,  
      "result": null
    },
    respuesta:null
  },
  {
    descrip: "IOT POLL READER",
    url: "/instructions/",
    tipo: 21,
    datos: {
      "serial": SERIAL_READER,  
      "firmware": "fmw",  
      "action": "POLL",  
      "status": "idle",
      "sessionid": SESION_READER,
      "temperature": null,
      "time": null,  
      "data": null,  
      "result": null
    },
    respuesta:null
  },
  {
    descrip: "IOT POLL FILLER",
    url: "/instructions/",
    tipo: 22,
    datos: {
      "serial": SERIAL_FILLER,  
      "firmware": "fmw",  
      "action": "POLL",  
      "status": "idle",
      "sessionid": SESION_FILLER,
      "temperature": null,
      "time": null,  
      "data": null,  
      "result": null
    },
    respuesta:null
  },{
    descrip: "IOT POLL ARM",
    url: "/instructions/",
    tipo: 20,
    datos: {
      "serial": SERIAL_ARM,  
      "firmware": "fmw",  
      "action": "POLL",  
      "status": "idle",
      "sessionid": SESION_ARM,
      "temperature": null,
      "time": null,  
      "data": null,  
      "result": null
    },
    respuesta:null
  },
  {
    descrip: "IOT POLL READER",
    url: "/instructions/",
    tipo: 21,
    datos: {
      "serial": SERIAL_READER,  
      "firmware": "fmw",  
      "action": "POLL",  
      "status": "idle",
      "sessionid": SESION_READER,
      "temperature": null,
      "time": null,  
      "data": null,  
      "result": null
    },
    respuesta:null
  },
  {
    descrip: "IOT POLL FILLER",
    url: "/instructions/",
    tipo: 22,
    datos: {
      "serial": SERIAL_FILLER,  
      "firmware": "fmw",  
      "action": "POLL",  
      "status": "idle",
      "sessionid": SESION_FILLER,
      "temperature": null,
      "time": null,  
      "data": null,  
      "result": null
    },
    respuesta:null
  },{
    descrip: "IOT POLL ARM",
    url: "/instructions/",
    tipo: 20,
    datos: {
      "serial": SERIAL_ARM,  
      "firmware": "fmw",  
      "action": "POLL",  
      "status": "idle",
      "sessionid": SESION_ARM,
      "temperature": null,
      "time": null,  
      "data": null,  
      "result": null
    },
    respuesta:null
  },
  {
    descrip: "IOT POLL READER",
    url: "/instructions/",
    tipo: 21,
    datos: {
      "serial": SERIAL_READER,  
      "firmware": "fmw",  
      "action": "POLL",  
      "status": "idle",
      "sessionid": SESION_READER,
      "temperature": null,
      "time": null,  
      "data": null,  
      "result": null
    },
    respuesta:null
  },
  {
    descrip: "IOT POLL FILLER",
    url: "/instructions/",
    tipo: 22,
    datos: {
      "serial": SERIAL_FILLER,  
      "firmware": "fmw",  
      "action": "POLL",  
      "status": "idle",
      "sessionid": SESION_FILLER,
      "temperature": null,
      "time": null,  
      "data": null,  
      "result": null
    },
    respuesta:null
  },{
    descrip: "IOT POLL ARM",
    url: "/instructions/",
    tipo: 20,
    datos: {
      "serial": SERIAL_ARM,  
      "firmware": "fmw",  
      "action": "POLL",  
      "status": "idle",
      "sessionid": SESION_ARM,
      "temperature": null,
      "time": null,  
      "data": null,  
      "result": null
    },
    respuesta:null
  },
  {
    descrip: "IOT POLL READER",
    url: "/instructions/",
    tipo: 21,
    datos: {
      "serial": SERIAL_READER,  
      "firmware": "fmw",  
      "action": "POLL",  
      "status": "idle",
      "sessionid": SESION_READER,
      "temperature": null,
      "time": null,  
      "data": null,  
      "result": null
    },
    respuesta:null
  },
  {
    descrip: "IOT POLL FILLER",
    url: "/instructions/",
    tipo: 22,
    datos: {
      "serial": SERIAL_FILLER,  
      "firmware": "fmw",  
      "action": "POLL",  
      "status": "idle",
      "sessionid": SESION_FILLER,
      "temperature": null,
      "time": null,  
      "data": null,  
      "result": null
    },
    respuesta:null
  },{
    descrip: "IOT POLL ARM",
    url: "/instructions/",
    tipo: 20,
    datos: {
      "serial": SERIAL_ARM,  
      "firmware": "fmw",  
      "action": "POLL",  
      "status": "idle",
      "sessionid": SESION_ARM,
      "temperature": null,
      "time": null,  
      "data": null,  
      "result": null
    },
    respuesta:null
  },
  {
    descrip: "IOT POLL READER",
    url: "/instructions/",
    tipo: 21,
    datos: {
      "serial": SERIAL_READER,  
      "firmware": "fmw",  
      "action": "POLL",  
      "status": "idle",
      "sessionid": SESION_READER,
      "temperature": null,
      "time": null,  
      "data": null,  
      "result": null
    },
    respuesta:null
  },
  {
    descrip: "IOT POLL FILLER",
    url: "/instructions/",
    tipo: 22,
    datos: {
      "serial": SERIAL_FILLER,  
      "firmware": "fmw",  
      "action": "POLL",  
      "status": "idle",
      "sessionid": SESION_FILLER,
      "temperature": null,
      "time": null,  
      "data": null,  
      "result": null
    },
    respuesta:null
  },{
    descrip: "IOT POLL ARM",
    url: "/instructions/",
    tipo: 20,
    datos: {
      "serial": SERIAL_ARM,  
      "firmware": "fmw",  
      "action": "POLL",  
      "status": "idle",
      "sessionid": SESION_ARM,
      "temperature": null,
      "time": null,  
      "data": null,  
      "result": null
    },
    respuesta:null
  },
  {
    descrip: "IOT POLL READER",
    url: "/instructions/",
    tipo: 21,
    datos: {
      "serial": SERIAL_READER,  
      "firmware": "fmw",  
      "action": "POLL",  
      "status": "idle",
      "sessionid": SESION_READER,
      "temperature": null,
      "time": null,  
      "data": null,  
      "result": null
    },
    respuesta:null
  },
  {
    descrip: "IOT POLL FILLER",
    url: "/instructions/",
    tipo: 22,
    datos: {
      "serial": SERIAL_FILLER,  
      "firmware": "fmw",  
      "action": "POLL",  
      "status": "idle",
      "sessionid": SESION_FILLER,
      "temperature": null,
      "time": null,  
      "data": null,  
      "result": null
    },
    respuesta:null
  },{
    descrip: "IOT POLL ARM",
    url: "/instructions/",
    tipo: 20,
    datos: {
      "serial": SERIAL_ARM,  
      "firmware": "fmw",  
      "action": "POLL",  
      "status": "idle",
      "sessionid": SESION_ARM,
      "temperature": null,
      "time": null,  
      "data": null,  
      "result": null
    },
    respuesta:null
  },
  {
    descrip: "IOT POLL READER",
    url: "/instructions/",
    tipo: 21,
    datos: {
      "serial": SERIAL_READER,  
      "firmware": "fmw",  
      "action": "POLL",  
      "status": "idle",
      "sessionid": SESION_READER,
      "temperature": null,
      "time": null,  
      "data": null,  
      "result": null
    },
    respuesta:null
  },
  {
    descrip: "IOT POLL FILLER",
    url: "/instructions/",
    tipo: 22,
    datos: {
      "serial": SERIAL_FILLER,  
      "firmware": "fmw",  
      "action": "POLL",  
      "status": "idle",
      "sessionid": SESION_FILLER,
      "temperature": null,
      "time": null,  
      "data": null,  
      "result": null
    },
    respuesta:null
  },{
    descrip: "IOT POLL ARM",
    url: "/instructions/",
    tipo: 20,
    datos: {
      "serial": SERIAL_ARM,  
      "firmware": "fmw",  
      "action": "POLL",  
      "status": "idle",
      "sessionid": SESION_ARM,
      "temperature": null,
      "time": null,  
      "data": null,  
      "result": null
    },
    respuesta:null
  },
  {
    descrip: "IOT POLL READER",
    url: "/instructions/",
    tipo: 21,
    datos: {
      "serial": SERIAL_READER,  
      "firmware": "fmw",  
      "action": "POLL",  
      "status": "idle",
      "sessionid": SESION_READER,
      "temperature": null,
      "time": null,  
      "data": null,  
      "result": null
    },
    respuesta:null
  },
  {
    descrip: "IOT POLL FILLER",
    url: "/instructions/",
    tipo: 22,
    datos: {
      "serial": SERIAL_FILLER,  
      "firmware": "fmw",  
      "action": "POLL",  
      "status": "idle",
      "sessionid": SESION_FILLER,
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
    this.state = { pasos:instrucciones, indiceActual:0,token:null,sessionidReader:0,sessionidARM:0 };
    this.ejecutarPaso = this.ejecutarPaso.bind(this);
  }   

  ejecutarPaso(indice,respuesta) {
    console.log("==== respuesta === "+indice);
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
    if(respuesta && respuesta.sessionid && indice===2) {
      console.log("SESION READER "+respuesta.sessionid);
      this.setState({sessionidReader:respuesta.sessionid});
    }
    if(respuesta && respuesta.sessionid && indice===1){
      console.log("SESION ARM "+respuesta.sessionid);
      this.setState({sessionidARM:respuesta.sessionid});
    } 
  }

  render() {
    return (
      <div className="App">
       <Tester  instrucciones={this.state.pasos} 
                instruccionNro={this.state.indiceActual}
                procesar={this.ejecutarPaso}
                currentIoTSessionARM={this.state.sessionidARM}
                currentIoTSessionReader={this.state.sessionidReader}
                token={this.state.token} ></Tester>
      </div>
    );
  }
}

export default App;
