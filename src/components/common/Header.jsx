import React from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import { media } from "../../styles/theme";

const NAV_ITEMS = [
  { label: "HOME", path: "/" },
  { label: "EXPERIENCES", path: "/experiences" },
  { label: "THE PATCH", path: "/patch" },
  { label: "HOW IT WORKS", path: "/how-it-works" },
  { label: "ACCOUNT", path: "/account" },
  { label: "ABOUT", path: "/about" },
];

const Header = ({ variant = "dark" }) => {
  const isDark = variant === "dark";
  const { pathname } = useLocation();

  return (
    <HeaderWrapper $isDark={isDark}>
      <HeaderInner>
        <Logo to="/" $isDark={isDark}>DREAMNET</Logo>
        <Nav>
          {NAV_ITEMS.map((item) => (
            <NavLink
              key={item.label}
              to={item.path}
              $isDark={isDark}
              $active={pathname === item.path}
            >
              {item.label}
            </NavLink>
          ))}
        </Nav>
        <SignInButton $isDark={isDark}>SIGN IN</SignInButton>
      </HeaderInner>
    </HeaderWrapper>
  );
};

export default Header;

const HeaderWrapper = styled.header`
  position: fixed;
  top: 0; left: 0; right: 0;
  z-index: 1000;
  height: ${({ theme }) => theme.layout.headerHeight};
  background-color: ${({ $isDark }) =>
    $isDark ? "rgba(10, 10, 10, 0.9)" : "rgba(245, 245, 240, 0.95)"};
  backdrop-filter: blur(12px);
  border-bottom: 1px solid
    ${({ $isDark, theme }) =>
      $isDark ? theme.colors.borderDark : theme.colors.borderLight};
`;

const HeaderInner = styled.div`
  max-width: ${({ theme }) => theme.layout.maxWidth};
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.layout.containerPadding};
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Logo = styled(Link)`
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  letter-spacing: 0.2em;
  color: ${({ $isDark, theme }) =>
    $isDark ? theme.colors.textPrimary : theme.colors.textDark};
  text-decoration: none;
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.xl};
  ${media.lg} { display: none; }
`;

const NavLink = styled(Link)`
  font-size: ${({ theme }) => theme.fontSizes.xs};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  letter-spacing: 0.1em;
  text-decoration: none;
  color: ${({ $isDark, $active, theme }) => {
    if ($active) return $isDark ? theme.colors.textPrimary : theme.colors.textDark;
    return $isDark ? theme.colors.textSecondary : theme.colors.textDarkSecondary;
  }};
  transition: color ${({ theme }) => theme.transitions.fast};
  border-bottom: ${({ $active }) => ($active ? "1px solid currentColor" : "none")};
  padding-bottom: 2px;

  &:hover {
    color: ${({ $isDark, theme }) =>
      $isDark ? theme.colors.textPrimary : theme.colors.textDark};
    opacity: 1;
  }
`;

const SignInButton = styled.button`
  font-size: ${({ theme }) => theme.fontSizes.xs};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  letter-spacing: 0.1em;
  color: ${({ $isDark, theme }) =>
    $isDark ? theme.colors.textPrimary : theme.colors.textDark};
  padding: 0.5rem 1.25rem;
  border: 1px solid
    ${({ $isDark, theme }) =>
      $isDark ? theme.colors.borderDark : theme.colors.borderLight};
  border-radius: ${({ theme }) => theme.radii.full};
  transition: all ${({ theme }) => theme.transitions.fast};

  &:hover {
    background-color: ${({ $isDark }) =>
      $isDark ? "rgba(255,255,255,0.05)" : "rgba(0,0,0,0.05)"};
  }
`;