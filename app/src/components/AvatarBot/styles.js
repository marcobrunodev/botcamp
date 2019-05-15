import styled from "styled-components";
import avatar from "../../img/avatar.png";

export const Wrapper = styled.figure`
    background-color: #26265e;
    height: 40px;
    width: 40px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
`;
export const Avatar = styled.img.attrs({src: avatar})``;
