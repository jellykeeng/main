import React from "react";
import Header from "../components/common/Header.jsx";
import Footer from "../components/common/Footer.jsx";
import styled from "styled-components";

const ExperiencesPage = () => (
  <>
    <Header />
    <Main><Title>Experiences</Title></Main>
    <Footer />
  </>
);

export default ExperiencesPage;

const Main = styled.main`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8rem 1.5rem;
`;

const Title = styled.h1`
  font-size: 3rem;
  letter-spacing: -0.025em;
`;