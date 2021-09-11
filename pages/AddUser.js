import React from 'react';
import { gql, useMutation } from '@apollo/client';

const ADD_NEW_USER = gql`
  mutation createUser(
    $nombre: String!
    $apellido: String!
    $tamanoPredio: String!
  ) {
    createUser(
      input: {
        nombre: $nombre
        apellido: $apellido
        tamanoPredio: $tamanoPredio
      }
    ) {
      id
      nombre
      apellido
      tamanoPredio
    }
  }
`;

const AddUser = () => {
  const [createUser] = useMutation(ADD_NEW_USER);

  let nombre, apellido, tamanoPredio;

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          createUser({
            variables: {
              nombre: nombre.value,
              apellido: apellido.value,
              tamanoPredio: tamanoPredio.value,
            },
          });
        }}>
        <input
          ref={(value) => (nombre = value)}
          id='nombre'
          placeholder='ingrese nómbre'
        />
        <input
          ref={(value) => (apellido = value)}
          id='apellido'
          placeholder='ingrese apellido'
        />
        <input
          ref={(value) => (tamanoPredio = value)}
          id='tamanoPredio'
          placeholder='ingrese tamaño del predio'
        />
        <button type='submit'> Nuevo Usuario </button>
      </form>
    </div>
  );
};

export default AddUser;
