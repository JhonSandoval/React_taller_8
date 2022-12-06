import React, { useEffect, useState } from "react"


const Tabla = () => {

    
    
    const [equipo, setEquipo] = React.useState([])
    const [haveError, sethaveError] = React.useState([])

    React.useEffect(()  => {
       // console.log('useEffect')
        obtenerDatos()
       
    }, [])

    const obtenerDatos = async () => {
        const data = await fetch('https://jsonplaceholder.typicode.com/users')
        const users = await data.json()
        let haveErrorValue = false

        if (true) {
            console.log('aca hay un error')
            haveErrorValue = true

        } else {
            console.log('aca no hay un error')
            haveErrorValue = false
        }
        //console.log(users)
        setEquipo(users)
        sethaveError(haveErrorValue)
    }

    return (
        
        <di>
            { 
            haveError ? 
                <div class="alert alert-danger" role="alert">
                    ocurrio un error
                </div>
            : 
                <div class="alert alert-success" role="alert">
                    cargo correctamente
                </div>
                
            }

            <h1> prueba</h1>
            <ul>{equipo.map(item => 
                
                <li key={item.id}>{item.name} - {item.email} </li>

                )} </ul>

        </di>
    )

}

export default Tabla

