import React from "react";
import styled from "styled-components";
import { media } from "../../styles/theme";

const FOOTER_COLUMNS = [
  { title: "PRODUCT", links: ["The Patch", "Patch Connect", "Patch Pro"] },
  { title: "COMPANY", links: ["About", "Press", "Careers"] },
  { title: "SUPPORT", links: ["Help Center", "Return Policy", "Memory Management"] },
];

const Footer = () => (
  <FooterWrapper>
    <FooterInner>
      <FooterGrid>
        <BrandColumn>
          <BrandName>DREAMNET</BrandName>
          <BrandDescription>
            Experience anything. Remember everything.
            Why live it once, when you can own&nbsp;it?
          </BrandDescription>
        </BrandColumn>
        {FOOTER_COLUMNS.map((col) => (
          <LinkColumn key={col.title}>
            <ColumnTitle>{col.title}</ColumnTitle>
            {col.links.map((link) => (
              <FooterLink key={link} href="#">{link}</FooterLink>
            ))}
          </LinkColumn>
        ))}
      </FooterGrid>
      <FooterBottom>
        <Copyright>&copy; {new Date().getFullYear()} DreamNet Corp. All rights reserved.</Copyright>
      </FooterBottom>
    </FooterInner>
  </FooterWrapper>
);

export default Footer;

const FooterWrapper = styled.footer`
  background-color: ${({ theme }) => theme.colors.bgDark};
  border-top: 1px solid ${({ theme }) => theme.colors.borderDark};
  padding: ${({ theme }) => theme.spacing["3xl"]} 0 ${({ theme }) => theme.spacing.xl};
`;

const FooterInner = styled.div`
  max-width: ${({ theme }) => theme.layout.maxWidth};
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.layout.containerPadding};
`;

const FooterGrid = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr;
  gap: ${({ theme }) => theme.spacing["2xl"]};
  ${media.md} { grid-template-columns: 1fr 1fr; }
  ${media.sm} { grid-template-columns: 1fr; }
`;

const BrandColumn = styled.div``;

const BrandName = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  letter-spacing: 0.2em;
  color: ${({ theme }) => theme.colors.textPrimary};
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

const BrandDescription = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.textSecondary};
  line-height: 1.7;
  max-width: 280px;
`;

const LinkColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.sm};
`;

const ColumnTitle = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.xs};
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  letter-spacing: 0.15em;
  color: ${({ theme }) => theme.colors.textSecondary};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`;

const FooterLink = styled.a`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.textSecondary};
  transition: color ${({ theme }) => theme.transitions.fast};
  &:hover { color: ${({ theme }) => theme.colors.textPrimary}; opacity: 1; }
`;

const FooterBottom = styled.div`
  margin-top: ${({ theme }) => theme.spacing["3xl"]};
  padding-top: ${({ theme }) => theme.spacing.lg};
  border-top: 1px solid ${({ theme }) => theme.colors.borderDark};
`;

const Copyright = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.xs};
  color: ${({ theme }) => theme.colors.textMuted};
`;