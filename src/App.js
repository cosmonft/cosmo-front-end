import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';

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
          <Route path=":country" element={<Layout />}>
          <Route path="" element={<Gallery />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
