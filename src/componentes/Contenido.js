import React from "react"

import Carosuel from './Carosuel'
import Nav from "./Nav";
//import Content from "./Content"
import Descripcion from "./Descripcion"
import Tabla from './Tabla'
import Tabla2 from './Tabla2'
import Tabla3 from './Tabla3'

class Contenido extends React.Component{

    constructor(props){
        super(props);
        this.state = {
        };

    }

render(){
    return (
        <div> 
           
            <Nav />
            <Carosuel  />
            <br /> <br />
            <Descripcion />
            <Tabla2 />
            <Tabla3 />
            <Tabla />

          
           
        </div>


    )
  }
}

export default Contenido
