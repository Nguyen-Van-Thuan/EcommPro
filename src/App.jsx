import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/admin/Home";
import Layout from "./pages/admin/Layout";
import Wallet from "./pages/admin/Wallet";
import NotFound from "./pages/admin/NotFound";
import Profile from "./pages/admin/Profile";
import Setting from "./pages/admin/Setting";
import Help from "./pages/admin/Help";
import ClientLayout from "./pages/client/ClientLayout";
import ClientHome from "./pages/client/ClientHome";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ClientLayout />}>
          <Route index element={<ClientHome />} />
        </Route>
        <Route path="/dashboad" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/dashboad/wallet" element={<Wallet />} />
          <Route path="/dashboad/profile" element={<Profile />} />
          <Route path="/dashboad/setting" element={<Setting />} />
          <Route path="/dashboad/help" element={<Help />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;