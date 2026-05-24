import React from "react";
import Header from "../../components/common/Header.jsx";
import Footer from "../../components/common/Footer.jsx";
import styled from "styled-components";

const HomePage = () => (
  <>
    <Header />
    <Main>
      <HeroText>
        Experience anything.<br />
        Remember everything.
      </HeroText>
    </Main>
    <Footer />
  </>
);

export default HomePage;

const Main = styled.main`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8rem 1.5rem;
`;

const HeroText = styled.h1`
  font-size: 3.75rem;
  letter-spacing: -0.025em;
  line-height: 1;
  text-align: center;
`;