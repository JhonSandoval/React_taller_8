import React, { useEffect, useState, PureComponent } from "react"
var data = require('../Data.json')


export default class Datos extends PureComponent {
    render() {


        return (
            <div className="container mt-5" align="center">

<h4>Lista de Precios</h4>
<br />

<div className="row">

    <div className="col-md-12">

        <table className="table table-bordered">
            <thead className="thead-dark">
                <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Nombre</th>
                    <th scope="col">Stock</th>
                    <th scope="col">Precio</th>
                    <th scope="col">Imagen</th>
                </tr>
            </thead>
            <tbody>

                {data.map(item => (

                    <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.title}</td>
                        <td>{item.content}</td>
                        <td>{item.precio}</td>
                        <td>{item.img}</td>
                    {/**    <td><img src={src="https://picsum.photos/800/600?random=4"} /></td>
                   */} </tr>

                ))}

            </tbody>

        </table>
        </div>
        </div>
        </div>


        )
    }
}

