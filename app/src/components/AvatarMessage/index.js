import React from "react";

import AvatarBot from "../AvatarBot";
import MessageBotcamp from "../MessageBotcamp";

import { Wrapper } from "./styles"

const AvatarMessage = ({content}) => (
    <Wrapper>
        <AvatarBot />
        <MessageBotcamp bot>{content}</MessageBotcamp>
    </Wrapper>
);

export default AvatarMessage;
