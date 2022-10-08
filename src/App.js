import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';
import { Web3ReactProvider } from "@web3-react/core";
import { providers } from "ethers";

import './App.css';

import { Home } from './home';
import { Layout } from './Layout';
import { Gallery } from './gallery';

function getLibrary(provider) {
  return new providers.Web3Provider(provider);
}

function App() {
  return (
    <React.Fragment>
      <Web3ReactProvider getLibrary={getLibrary}>
      <CssBaseline />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path=":country" element={<Layout />}>
          <Route path="" element={<Gallery />} />
          </Route>
        </Routes>
      </BrowserRouter>
      </Web3ReactProvider>
    </React.Fragment>
  );
}

export default App;
