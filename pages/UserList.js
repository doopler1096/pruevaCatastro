const ListaDeTitulares = ({ catastrolists }) => (
  <div>
    {catastrolists.map((a, i) => (
      <div key={a.id}>
        <div>
          <p>Nombre del titlular: {a.nombre}</p>
          <p>Apellido: {a.apellido}</p>
          <p>
            Tamaño del predio reportado: {a.tamanoPredio} m². ID del predio{' '}
            {a.id}
          </p>
        </div>
      </div>
    ))}
  </div>
);

export default ListaDeTitulares;
