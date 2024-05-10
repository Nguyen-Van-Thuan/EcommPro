import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../../components/admin/Footer";
import Header from "../../components/admin/Header";
import Sidebar from "../../components/admin/Sidebar";

const Layout = () => {
  return (
    <>
      <Header />

      <div className="container-fluid">
        <div className="row">
          {/* SIDEBAR MENU  */}
          <Sidebar />

          {/* MAIN CONTENT */}
          <main className="main-wrapper col-md-9 ms-sm-auto py-4 col-lg-9 px-md-4 border-start">
            <Outlet />

            {/* Footer */}
            <Footer />
          </main>
        </div>
      </div>
    </>
  );
};

export default Layout;
