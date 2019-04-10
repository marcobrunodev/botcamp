import React from "react";

import Chat from "./pages/Chat";
import Login from "./pages/Login";
import Exemplo from "./pages/Exemplo";

const Router = () => {
  const routers = [];
  routers["/chat"] = <Chat />;
  routers["/exemplo"] = <Exemplo />;

  return routers[window.location.pathname] || <Login />;
};

export default Router;
