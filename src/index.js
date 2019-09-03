import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider } from '@apollo/react-hoc';
import ApolloClient from 'apollo-boost';
import './index.css';
import App from './App';


const client = new ApolloClient({
    uri: 'http://api.tweakvideos.net/graphql',
  });


ReactDOM.render(
<ApolloProvider client={client}>
    <App />
</ApolloProvider>, document.getElementById('root'));

