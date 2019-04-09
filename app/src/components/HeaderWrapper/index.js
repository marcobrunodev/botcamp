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
    border: 0px solid transparent;
    border-left-width: 100vw;
    border-top: 14px solid #26265e;
  }
`;

export default HeaderWrapper;
