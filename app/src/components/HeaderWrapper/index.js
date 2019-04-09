import styled from "styled-components";

const HeaderWrapper = styled.header`
  background-color: #26265e;
  padding: 10px 16px;
  display: flex;
  justify-content: space-between;
  position: relative;

  ::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    transform: translateY(100%);
    border: 0px solid transparent;
    border-top: 14px solid #26265e;
    border-left-width: 100vw;
  }
`;

export default HeaderWrapper;
