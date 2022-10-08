import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';
import NFTView from "../src/views/nftView.jsx"

import './App.css';

import { Home } from './home';
import { Layout } from './Layout';
import { Gallery } from './gallery';

function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:country" element={<Layout />} />
          <Route path="/" exact element={<Gallery />} />
          <Route path="/gallery/:nftid" exact element={<NFTView />} />
        </Routes>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
