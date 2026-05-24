import styled from "styled-components";
import { media } from "./theme";

export const Container = styled.div`
  width: 100%;
  max-width: ${({ theme }) => theme.layout.maxWidth};
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.layout.px};
`;

export const Section = styled.section`
  position: relative;
  padding: ${({ theme }) => theme.spacing[32]} ${({ theme }) => theme.layout.px};
`;

export const GradientText = styled.span`
  color: ${({ theme }) => theme.colors.purple400};
`;

export const PurpleButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: ${({ $large }) => ($large ? "1.25rem 2.5rem" : "0.625rem 1.25rem")};
  border-radius: ${({ theme }) => theme.radii.full};
  background: linear-gradient(
    to right,
    ${({ theme }) => theme.colors.purple600},
    ${({ theme }) => theme.colors.violet600}
  );
  color: white;
  font-size: ${({ theme, $large }) =>
    $large ? theme.fontSizes.lg : theme.fontSizes.sm};
  position: relative;
  overflow: hidden;
  box-shadow: 0 10px 15px -3px rgba(124, 58, 237, 0.3),
    0 4px 6px -4px rgba(124, 58, 237, 0.3);
  transition: all ${({ theme }) => theme.transitions.slow};

  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 10px 15px -3px rgba(124, 58, 237, 0.4),
      0 4px 6px -4px rgba(124, 58, 237, 0.4);
  }

  &:active {
    transform: scale(0.98);
  }
`;