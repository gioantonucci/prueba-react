import React, { useState } from "react";
import Home from "./Home";
import '../styles/form.css'

function RutaDos() {
  let [input, setInput] = useState({
    name: "",
    age: "",
    career: "",
  });

  function handleChange(e) {
    e.preventDefault();
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(input);
  }

  return (
    <div>
       <nav>
        <Home/>
      </nav>
      <div className="container">
      <form onSubmit={(e) => handleSubmit(e)}>
        <label htmlFor="name">Nombre</label>
        <input
          id="name"
          name="name"
          type="text"
          value={input.name}
          required
          onChange={(e) => handleChange(e)}
        ></input>
        <label htmlFor="age">Edad</label>
        <input
          name="age"
          id="age"
          required
          type="number"
          value={input.age}
          onChange={(e) => handleChange(e)}
        ></input>
        <label htmlFor="career">Carrera</label>
        <input
          name="career"
          id="career"
          required
          type="text"
          value={input.career}
          onChange={(e) => handleChange(e)}
        ></input>
        <button className="btn">Enviar</button>
      </form>
    </div>
    </div>
  );
}

export default RutaDos;
