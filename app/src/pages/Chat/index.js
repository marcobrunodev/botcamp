import React from "react";
import { Link } from "react-router-dom";

import HeaderWrapper from "../../components/HeaderWrapper";
import LogoBotcamp from "../../components/LogoBotcamp";
import LogoutBotcamp from "../../components/LogoutBotcamp";
import InputMessage from "../../components/InputMessage";
import MessageBotcamp from "../../components/MessageBotcamp";
import MessageWrapper from "../../components/MessageWrapper";
import AvatarMessage from "../../components/AvatarMessage";

const Chat = () => (
  <>
    <HeaderWrapper>
      <LogoBotcamp small />
      <Link to="/">
        <LogoutBotcamp />
      </Link>
    </HeaderWrapper>

    <MessageWrapper>
      <MessageBotcamp>!cpf</MessageBotcamp>

      <AvatarMessage content="123.123.123-37" />
    </MessageWrapper>

    <InputMessage />
  </>
);
export default Chat;
