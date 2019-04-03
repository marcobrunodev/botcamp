import styled from "styled-components";

import background from "../../img/ecossistema-background.png";

const LoginWrapper = styled.main`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background-image: url(${background});
  box-sizing: border-box;
  width: 100vw;
  height: 100vh;
  padding-top: 120px;
  padding-bottom: 80px;
`;

export default LoginWrapper;
