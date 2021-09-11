import { Query } from 'react-apollo';
import withData from '../config';
import React from 'react';
import ListaDeTitulares from './UserList';
import AddUser from './AddUser';

import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  gql,
} from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://pruevacatastro1096.herokuapp.com/v1/graphql',
  cache: new InMemoryCache(),
  options: {
    connectionParams: {
      headers: {
        'content-type': 'application/json',
        'x-hasura-admin-secret':
          'mqty3gj5LqetMXG3YcLlO4fTNrkC4VLkbCiEBDKySOBNPmX0j6div05yGulPme8W',
      },
    },
  },
});

const query = gql`
  query {
    catastrolist {
      id
      nombre
      apellido
      tamanoPredio
    }
  }
`;

const Index = ({ catastrolists }) => {
  return (
    <Query // <- Wrapping the main component with Query component from react-apollo
      query={query}
      fetchPolicy={'cache-and-network'}>
      {({ loading, data: { catastrolist: catastrolists } }) => {
        return (
          <ApolloProvider client={client}>
            <div>
              <h2>Ingresar datos del nuevo usuario</h2>
              <AddUser />
              <div>
                <h2>Lista de usuarios</h2>
                <ListaDeTitulares catastrolists={catastrolists} />
              </div>
            </div>
          </ApolloProvider>
        );
      }}
    </Query>
  );
};

export default withData(Index);
