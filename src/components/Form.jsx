import React, { useState } from "react";
import FormError from "./FormError";
import Card from "./Card";

const Form = () => {
  const [deportista, setDeportista] = useState({
    nombre: "",
    apellido: "",
    deporte: "",
  });

  const [show, setShow] = useState(false);
  const [error, setError] = useState(false);
  const [deportistasList, setDeportistasList] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      deportista.nombre.trim().length > 2 &&
      deportista.nombre.trimStart() === deportista.nombre &&
      deportista.apellido.trim().length > 2 &&
      deportista.deporte.trim().length > 5
    ) {
      setShow(true);
      setError(false);
      setDeportistasList([...deportistasList, deportista]);
      setDeportista({ nombre: "", apellido: "", deporte: "" });
    } else {
      setError(true);
    }

    console.log("Nombre a enviar:", deportista.nombre);
    console.log("Apellido a enviar:", deportista.apellido);
    console.log("Deporte a enviar:", deportista.deporte);
  };

  return (
    <>
      <h3>¿Quienes son tus deportistas favoritos?</h3>
      <form onSubmit={handleSubmit}>
        <label>Nombre: </label>
        <input
          type="text"
          value={deportista.nombre}
          placeholder="Ingresa el nombre"
          onChange={(event) =>
            setDeportista({ ...deportista, nombre: event.target.value })
          }
        />
        <label>Apellido: </label>
        <input
          type="text"
          value={deportista.apellido}
          placeholder="Ingresa el apellido"
          onChange={(event) =>
            setDeportista({ ...deportista, apellido: event.target.value })
          }
        />
        <label>Deporte: </label>
        <input
          type="text"
          placeholder="Ingresa el deporte"
          value={deportista.deporte}
          onChange={(event) =>
            setDeportista({ ...deportista, deporte: event.target.value })
          }
        />
        <button type="submit">Enviar</button>
      </form>
      {error && <FormError />}
      {show && <Card deportistas={deportistasList} />}
    </>
  );
};

export default Form;
