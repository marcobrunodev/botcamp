import React from "react";
import { Link } from "react-router-dom";

import HeaderWrapper from "../../components/HeaderWrapper";
import LogoBotcamp from "../../components/LogoBotcamp";
import LogoutBotcamp from "../../components/LogoutBotcamp";
import InputMessage from "../../components/InputMessage";
import MessageBotcamp from "../../components/MessageBotcamp";
import MessageWrapper from "../../components/MessageWrapper";
import AvatarBot from "../../components/AvatarBot";

const Chat = () => (
  <>
    <HeaderWrapper>
      <LogoBotcamp small />
      <Link to="/">
        <LogoutBotcamp />
      </Link>
    </HeaderWrapper>

    <MessageWrapper>
      <MessageBotcamp>!rg</MessageBotcamp>
      <MessageBotcamp>!cpf</MessageBotcamp>
      <MessageBotcamp>!asdkfjhasd</MessageBotcamp>

      <AvatarBot />
    </MessageWrapper>

    <InputMessage />
  </>
);
export default Chat;
