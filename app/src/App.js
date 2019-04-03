import React, { Component } from "react";

import LoginWrapper from "./components/LoginWrapper";
import LogoBotcamp from "./components/LogoBotcamp";
import BtnBotcamp from "./components/BtnBotcamp";

import "./styles/reset.css";

class App extends Component {
  render() {
    return (
      <LoginWrapper>
        <LogoBotcamp />
        <BtnBotcamp content="Entrar" />
      </LoginWrapper>
    );
  }
}

export default App;
