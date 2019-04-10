import React from "react";

import HeaderWrapper from "../../components/HeaderWrapper";
import LogoBotcamp from "../../components/LogoBotcamp";
import LogoutBotcamp from "../../components/LogoutBotcamp";
import InputMessage from "../../components/InputMessage";

const Chat = () => (
  <>
    <HeaderWrapper>
      <LogoBotcamp small />
      <a href="/">
        <LogoutBotcamp />
      </a>
    </HeaderWrapper>

    <InputMessage />
  </>
);
export default Chat;
