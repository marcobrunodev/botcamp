import React from "react";

import LoginWrapper from "../../components/LoginWrapper";
import LogoBotcamp from "../../components/LogoBotcamp";
import BtnBotcamp from "../../components/BtnBotcamp";

const Login = () => (
  <LoginWrapper>
    <LogoBotcamp />
    <a href="/chat">
      <BtnBotcamp content="Entrar" />
    </a>
  </LoginWrapper>
);

export default Login;
