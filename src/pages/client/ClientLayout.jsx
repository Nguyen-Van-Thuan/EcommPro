import React from "react";
import { Outlet } from "react-router-dom";
import ClientHeader from "../../components/client/ClientHeader";
import ClientFooter from "../../components/client/ClientFooter";

const ClientLayout = () => {
  return (
    <>
      <ClientHeader />
      <Outlet />
      <ClientFooter />
    </>
  );
};

export default ClientLayout;
