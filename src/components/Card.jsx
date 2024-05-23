const Card = ({ deportistas }) => {
  return (
    <div>
      <h2>Lista de Deportistas Favoritos:</h2>
        {deportistas.map((deportista, index) => (
          <li key={index}>
              {deportista.nombre} {deportista.apellido}{" "} - {deportista.deporte}
          </li>
        ))}
    </div>
  );
};

export default Card;
