import React from "react";
import styled, { css } from "styled-components";

const VARIANTS = {
  primary: css`
    background-color: ${({ theme }) => theme.colors.accent};
    color: ${({ theme }) => theme.colors.bgDark};
    border: 1px solid ${({ theme }) => theme.colors.accent};
    &:hover {
      background-color: ${({ theme }) => theme.colors.accentHover};
      border-color: ${({ theme }) => theme.colors.accentHover};
    }
  `,
  secondary: css`
    background-color: transparent;
    color: ${({ theme }) => theme.colors.textPrimary};
    border: 1px solid ${({ theme }) => theme.colors.borderDark};
    &:hover { border-color: ${({ theme }) => theme.colors.textSecondary}; }
  `,
  secondaryDark: css`
    background-color: transparent;
    color: ${({ theme }) => theme.colors.textDark};
    border: 1px solid ${({ theme }) => theme.colors.borderLight};
    &:hover { border-color: ${({ theme }) => theme.colors.textDarkSecondary}; }
  `,
  ghost: css`
    background-color: transparent;
    color: ${({ theme }) => theme.colors.textPrimary};
    border: 1px solid transparent;
    &:hover { background-color: rgba(255, 255, 255, 0.05); }
  `,
};

const Button = ({ children, variant = "primary", icon, ...props }) => (
  <StyledButton $variant={variant} {...props}>
    {children}
    {icon && <IconWrapper>{icon}</IconWrapper>}
  </StyledButton>
);

export default Button;

const StyledButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.875rem 2rem;
  font-size: ${({ theme }) => theme.fontSizes.xs};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  letter-spacing: 0.12em;
  text-transform: uppercase;
  border-radius: ${({ theme }) => theme.radii.full};
  transition: all ${({ theme }) => theme.transitions.normal};
  white-space: nowrap;
  ${({ $variant }) => VARIANTS[$variant]}
  &:active { transform: scale(0.98); }
`;

const IconWrapper = styled.span`
  display: inline-flex;
  align-items: center;
  font-size: 1em;
`;