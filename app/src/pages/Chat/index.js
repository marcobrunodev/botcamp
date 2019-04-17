import React from "react";
import { Link } from "react-router-dom";

import HeaderWrapper from "../../components/HeaderWrapper";
import LogoBotcamp from "../../components/LogoBotcamp";
import LogoutBotcamp from "../../components/LogoutBotcamp";
import InputMessage from "../../components/InputMessage";
import MessageBotcamp from "../../components/MessageBotcamp";

const Chat = () => (
  <>
    <HeaderWrapper>
      <LogoBotcamp small />
      <Link to="/">
        <LogoutBotcamp />
      </Link>
    </HeaderWrapper>

    <div>
      <MessageBotcamp />
    </div>

    <InputMessage />
  </>
);
export default Chat;
