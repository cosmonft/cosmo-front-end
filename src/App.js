import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';
import { Web3ReactProvider } from "@web3-react/core";
import { providers } from "ethers";
import NFTView from "../src/views/nftView.jsx"

import './App.css';

import { Home } from './home';
import { Layout } from './Layout';
import ProfileView from "./views/profileView.jsx";

function getLibrary(provider) {
  return new providers.Web3Provider(provider);
}

function App() {
  return (
    <Web3ReactProvider getLibrary={getLibrary}>
    <React.Fragment>
      <CssBaseline />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:country" element={<Layout />}></Route>
          <Route path="/gallery/:nftid" exact element={<NFTView />} />
          <Route path="/profile" exact element={<ProfileView />}/>
        </Routes>
      </BrowserRouter>
    </React.Fragment>
    </Web3ReactProvider>
  );
}

export default App;
