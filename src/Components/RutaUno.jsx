import React from 'react'
import Home from './Home'
import '../styles/tabla.css'

function RutaUno() {
  let datos = [
    {
        nombre: "Pedro",
        edad: 20,
        carrera: "Ingeniería",
        hobbie: "Futbol"
    },
    {
        nombre: "Rodrigo",
        edad: 22,
        carrera: "Arquitectura",
        hobbie: "Bajo eléctrico"
    },
    {
        nombre: "Romina",
        edad: 21,
        carrera: "Abogacía",
        hobbie: "Acrobacia"
    },
    {
        nombre: "Ana",
        edad: 23,
        carrera: "Contadora",
        hobbie: "Astronomía"
    }
]


  return (
    <div>
      <Home/>
     <table>
      <thead>
      <tr>
        <th>Nombre</th>
        <th>Edad</th>
        <th>Carrera</th>
        <th>Hobbie</th>
      </tr>
      </thead>
      <tbody>
      <tr>
        <td>{datos[0].nombre}</td>
        <td>{datos[0].edad}</td>
        <td>{datos[0].carrera}</td>
        <td>{datos[0].hobbie}</td>
      </tr>
      <tr>
      <td>{datos[1].nombre}</td>
        <td>{datos[1].edad}</td>
        <td>{datos[1].carrera}</td>
        <td>{datos[1].hobbie}</td>
      </tr>
      <tr>
      <td>{datos[2].nombre}</td>
        <td>{datos[2].edad}</td>
        <td>{datos[2].carrera}</td>
        <td>{datos[2].hobbie}</td>
      </tr>
      <tr>
      <td>{datos[3].nombre}</td>
        <td>{datos[3].edad}</td>
        <td>{datos[3].carrera}</td>
        <td>{datos[3].hobbie}</td>
      </tr>
      </tbody>
     </table>
    </div>
  )
}

export default RutaUno
