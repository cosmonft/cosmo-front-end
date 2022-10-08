import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';
import NFTView from "../src/views/nftView.jsx"

import './App.css';

import { Home } from './home';
import { Layout } from './Layout';
import ProfileView from "./views/profileView.jsx";

function App() {
  return (
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
  );
}

export default App;
