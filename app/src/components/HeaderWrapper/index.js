import styled from "styled-components";

const HeaderWrapper = styled.header`
  background-color: #26265e;
  padding: 10px 16px;
  display: flex;
  justify-content: space-between;

  ::after {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border: 50px solid;
    border-top-color: blue;
    border-right-color: transparent;
    border-bottom-color: transparent;
    border-left-color: transparent;
  }
`;

export default HeaderWrapper;
