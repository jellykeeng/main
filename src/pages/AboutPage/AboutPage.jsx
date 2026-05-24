import React from "react";
import { Header, Footer } from "../../components/common";
import { Container, LightSection, SectionHeading } from "../../styles/common";

const AboutPage = () => (
  <>
    <Header variant="light" />
    <main>
      <LightSection style={{ paddingTop: "10rem" }}>
        <Container>
          <SectionHeading>About DreamNet</SectionHeading>
        </Container>
      </LightSection>
    </main>
    <Footer />
  </>
);

export default AboutPage;