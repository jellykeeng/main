import React from "react";
import { Header, Footer } from "../../components/common";
import { Container, DarkSection, SectionHeading } from "../../styles/common";

const AccountPage = () => (
  <>
    <Header variant="dark" />
    <main>
      <DarkSection style={{ paddingTop: "10rem" }}>
        <Container>
          <SectionHeading>Account</SectionHeading>
        </Container>
      </DarkSection>
    </main>
    <Footer />
  </>
);

export default AccountPage;