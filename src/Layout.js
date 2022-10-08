import React from "react";
import { Outlet } from "react-router-dom";
import { Gallery } from './gallery/index';


import PrimarySearchAppBar from './components/nav/';

export const Layout = () => {
  return (
    <>
      <PrimarySearchAppBar />
      <Gallery />
      <Outlet />
    </>
  );
};
