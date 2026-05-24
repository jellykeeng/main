import React from "react";
import { Header, Footer } from "../../components/common";
import { Container, DarkSection, SectionHeading } from "../../styles/common";

const HomePage = () => (
  <>
    <Header variant="dark" />
    <main>
      <DarkSection style={{ paddingTop: "10rem" }}>
        <Container>
          <SectionHeading>
            Experience anything.<br />
            Remember everything.
          </SectionHeading>
        </Container>
      </DarkSection>
    </main>
    <Footer />
  </>
);

export default HomePage;