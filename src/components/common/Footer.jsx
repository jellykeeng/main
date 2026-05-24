import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { media } from "../../styles/theme";

const Footer = () => (
  <FooterWrapper>
    <FooterInner>
      <FooterGrid>
        <BrandCol>
          <LogoRow to="/">
            <LogoCircle />
            <span>DreamNet</span>
          </LogoRow>
          <BrandDesc>
            Expanding human experience through advanced neural technology
          </BrandDesc>
        </BrandCol>

        <LinkCol>
          <ColTitle>Product</ColTitle>
          <ColLink to="/experiences">Experiences</ColLink>
          <ColLink to="/patch">The Patch</ColLink>
          <ColLink to="/how-it-works">How It Works</ColLink>
          <ColLink to="/patch">Pricing</ColLink>
        </LinkCol>

        <LinkCol>
          <ColTitle>Company</ColTitle>
          <ColLink to="/about">About</ColLink>
          <ColLink to="/about">Ethics & Safety</ColLink>
          <ColLink to="/about">Research</ColLink>
          <ColLink to="/about">Careers</ColLink>
        </LinkCol>

        <LinkCol>
          <ColTitle>Support</ColTitle>
          <ColLink to="#">Help Center</ColLink>
          <ColLink to="#">Safety Guidelines</ColLink>
          <ColLink to="#">Contact</ColLink>
          <ColLink to="#">FAQ</ColLink>
        </LinkCol>
      </FooterGrid>

      <FooterBottom>
        <Copyright>© 2026 DreamNet. All experiences reserved.</Copyright>
        <BottomLinks>
          <BottomLink href="#">Privacy</BottomLink>
          <BottomLink href="#">Terms</BottomLink>
          <BottomLink href="#">Consent</BottomLink>
        </BottomLinks>
      </FooterBottom>
    </FooterInner>
  </FooterWrapper>
);

export default Footer;

const FooterWrapper = styled.footer`
  position: relative;
  border-top: 1px solid rgba(139, 92, 246, 0.1);
  padding: 5rem 1.5rem;
`;

const FooterInner = styled.div`
  max-width: ${({ theme }) => theme.layout.maxWidth};
  margin: 0 auto;
`;

const FooterGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem;
  margin-bottom: 4rem;

  ${media.md} {
    grid-template-columns: 2fr 1fr 1fr 1fr;
  }
`;

const BrandCol = styled.div``;

const LogoRow = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.foreground};
`;

const LogoCircle = styled.div`
  width: 2rem;
  height: 2rem;
  border-radius: 9999px;
  background: linear-gradient(to bottom right, #7c3aed, #8b5cf6, #6d28d9);
  box-shadow: 0 10px 15px -3px rgba(124, 58, 237, 0.3);
`;

const BrandDesc = styled.p`
  opacity: 0.6;
  font-size: ${({ theme }) => theme.fontSizes.sm};
  line-height: 1.625;
`;

const LinkCol = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

const ColTitle = styled.h4`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  opacity: 0.9;
  margin-bottom: 0.25rem;
`;

const ColLink = styled(Link)`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  opacity: 0.6;
  transition: opacity 500ms ease;
  text-decoration: none;

  &:hover {
    opacity: 1;
  }
`;

const FooterBottom = styled.div`
  padding-top: 2rem;
  border-top: 1px solid rgba(139, 92, 246, 0.1);
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;

  ${media.md} {
    flex-direction: row;
    justify-content: space-between;
  }
`;

const Copyright = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  opacity: 0.4;
`;

const BottomLinks = styled.div`
  display: flex;
  gap: 1.5rem;
`;

const BottomLink = styled.a`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  opacity: 0.4;
  transition: opacity 500ms ease;
  text-decoration: none;

  &:hover {
    opacity: 0.7;
  }
`;