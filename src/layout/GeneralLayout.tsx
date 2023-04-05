import React from "react";
import styled from "styled-components";
import Header from "../components/Header";

const Container = styled.div`
  width: 500px;
  height: 100vh;
  margin: 0 auto;
  border: 1px solid black;
`;

interface GeneralLayoutProps {
  children: React.ReactNode;
}

const GeneralLayout: React.FC<GeneralLayoutProps> = ({ children }) => {
  return (
    <Container>
      <Header />
      <div>{children}</div>
    </Container>
  );
};

export default GeneralLayout;
