import React, { useEffect, useState } from "react"


const Tabla = () =>{

    
    
    const [equipo, setEquipo] = React.useState([])

    React.useEffect(()  => {
       // console.log('useEffect')
        obtenerDatos()
       
    }, [])

    const obtenerDatos = async () => {
       const data = await fetch('https://jsonplaceholder.typicode.com/users')
        const users = await data.json()
        //console.log(users)
        setEquipo(users)
    }

    return (
        <di>
            <h1> prueba</h1>
            <ul>{equipo.map(item => 
                
                <li key={item.id}>{item.name} - {item.email} </li>

                )} </ul>

        </di>
    )

}

export default Tabla

