import React, { useEffect, useState, PureComponent } from "react"
var data = require('../Data.json')


export default class Datos extends PureComponent {
    render() {


        return (


            <div class="row row-cols-1 row-cols-md-3 mb-3 text-center">
                {data.map(item => (
                <div class="col">
                <div class="card mb-4 rounded-3 shadow-sm border-primary">
                    <div class="card-header py-3 text-bg-primary border-primary">
                        <h4 class="my-0 fw-normal">{item.id} - {item.title} </h4>
                    </div>
                    <div class="card-body">
                        <h1 class="card-title pricing-card-title">{item.precio}<small class="text-muted fw-light">.000</small></h1>
                        <ul class="list-unstyled mt-3 mb-4">
                            <li>{item.content}</li>
                        </ul>
                        <button type="button" class="w-100 btn btn-lg btn-primary">Contact us</button>
                    </div>
                </div>
            </div>
                    // <tr key={item.id}>
                    //     <td>{item.id}</td>
                    //     <td>{item.title}</td>
                    //     <td>{item.content}</td>
                    //     <td>{item.precio}</td>
                    //     <td>{item.img}</td>
                    // </tr>

                ))}

            </div>


        )
    }
}

