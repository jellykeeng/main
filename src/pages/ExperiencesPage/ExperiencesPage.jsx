import React from "react";
import { Header, Footer } from "../../components/common";
import { Container, DarkSection, SectionHeading } from "../../styles/common";

const ExperiencesPage = () => (
  <>
    <Header variant="dark" />
    <main>
      <DarkSection style={{ paddingTop: "10rem" }}>
        <Container>
          <SectionHeading>Experiences</SectionHeading>
        </Container>
      </DarkSection>
    </main>
    <Footer />
  </>
);

export default ExperiencesPage;