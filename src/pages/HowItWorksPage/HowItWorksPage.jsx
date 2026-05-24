import React from "react";
import { Header, Footer } from "../../components/common";
import { Container, LightSection, SectionHeading } from "../../styles/common";

const HowItWorksPage = () => (
  <>
    <Header variant="light" />
    <main>
      <LightSection style={{ paddingTop: "10rem" }}>
        <Container>
          <SectionHeading>How It Works</SectionHeading>
        </Container>
      </LightSection>
    </main>
    <Footer />
  </>
);

export default HowItWorksPage;