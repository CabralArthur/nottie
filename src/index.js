import React from 'react';
import Root from './Root';
import ReactDOM from 'react-dom/client';
import { ChakraProvider } from '@chakra-ui/react'

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <ChakraProvider>
        <Root />
    </ChakraProvider>
  </React.StrictMode>
);
