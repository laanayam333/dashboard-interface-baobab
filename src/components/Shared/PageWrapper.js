import React from "react";

import styled from "styled-components";

const StyledPageWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: gray;
`;

const PageWrapper = ({ children }) => {
  return <StyledPageWrapper>{children}</StyledPageWrapper>;
};

export default PageWrapper;
