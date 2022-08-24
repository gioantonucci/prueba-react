import React from "react";
import '../styles/Home.css'
import { Link } from 'react-router-dom'

function Home() {
  return (
        <nav>
          <ul>
            <Link to='/rutauno'>
                <li>Ruta 1</li>
            </Link>
            <Link to='/rutados'>
                <li>Ruta 2</li>
            </Link>
          </ul>
        </nav>
  )
}

export default Home;
