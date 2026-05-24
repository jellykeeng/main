import styled, { css } from "styled-components";
import { media } from "./theme";

export const Container = styled.div`
  width: 100%;
  max-width: ${({ theme }) => theme.layout.maxWidth};
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.layout.containerPadding};
  ${media.md} { padding: 0 1.25rem; }
`;

export const DarkSection = styled.section`
  background-color: ${({ theme }) => theme.colors.bgDark};
  color: ${({ theme }) => theme.colors.textPrimary};
  padding: ${({ theme }) => theme.spacing.section} 0;
  ${media.md} { padding: ${({ theme }) => theme.spacing["3xl"]} 0; }
`;

export const LightSection = styled.section`
  background-color: ${({ theme }) => theme.colors.bgLight};
  color: ${({ theme }) => theme.colors.textDark};
  padding: ${({ theme }) => theme.spacing.section} 0;
  ${media.md} { padding: ${({ theme }) => theme.spacing["3xl"]} 0; }
`;

export const headingStyles = css`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  line-height: 1.1;
  letter-spacing: -0.02em;
`;

export const labelStyles = css`
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: ${({ theme }) => theme.fontSizes.xs};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  text-transform: uppercase;
  letter-spacing: 0.15em;
`;

export const SectionLabel = styled.span`
  ${labelStyles}
  display: block;
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  color: ${({ $dark, theme }) =>
    $dark ? theme.colors.textSecondary : theme.colors.textDarkSecondary};
`;

export const SectionHeading = styled.h2`
  ${headingStyles}
  font-size: ${({ theme }) => theme.fontSizes["5xl"]};
  ${media.lg} { font-size: ${({ theme }) => theme.fontSizes["4xl"]}; }
  ${media.md} { font-size: ${({ theme }) => theme.fontSizes["3xl"]}; }
`;

export const BodyText = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.base};
  line-height: 1.7;
  color: ${({ $muted, theme }) =>
    $muted ? theme.colors.textSecondary : "inherit"};
`;

export const Divider = styled.hr`
  border: none;
  height: 1px;
  background-color: ${({ $dark, theme }) =>
    $dark ? theme.colors.borderDark : theme.colors.borderLight};
`;