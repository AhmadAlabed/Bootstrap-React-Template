import React from "react";
import { Outlet } from "react-router-dom";
const MasterLayout = () => {
  return (
    <>
      <Outlet></Outlet>
    </>
  );
};

export default MasterLayout;
