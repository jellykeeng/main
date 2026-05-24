import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import { media } from "../../styles/theme";

const NAV_ITEMS = [
  { label: "Home", path: "/" },
  { label: "Experiences", path: "/experiences" },
  { label: "The Patch", path: "/patch" },
  { label: "How It Works", path: "/how-it-works" },
  { label: "About", path: "/about" },
];

const Header = () => {
  const { pathname } = useLocation();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <HeaderWrapper $scrolled={scrolled}>
      <HeaderInner>
        <LogoLink to="/">
          <LogoCircle />
          <LogoText>DreamNet</LogoText>
        </LogoLink>

        <Nav>
          {NAV_ITEMS.map((item) => (
            <NavLink
              key={item.label}
              to={item.path}
              $active={pathname === item.path}
            >
              {item.label}
              <NavUnderline />
            </NavLink>
          ))}
        </Nav>

        <AccountButton to="/account">Account</AccountButton>
      </HeaderInner>
    </HeaderWrapper>
  );
};

export default Header;

const HeaderWrapper = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 50;
  transition: all 700ms ease;
  background-color: ${({ $scrolled }) =>
    $scrolled ? "rgba(0, 8, 20, 0.8)" : "transparent"};
  backdrop-filter: ${({ $scrolled }) =>
    $scrolled ? "blur(24px)" : "none"};
  border-bottom: 1px solid
    ${({ $scrolled }) =>
      $scrolled ? "rgba(139, 92, 246, 0.15)" : "transparent"};
`;

const HeaderInner = styled.div`
  max-width: ${({ theme }) => theme.layout.maxWidth};
  margin: 0 auto;
  padding: 1.25rem 1.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const LogoLink = styled(Link)`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  text-decoration: none;
`;

const LogoCircle = styled.div`
  width: 2rem;
  height: 2rem;
  border-radius: 9999px;
  background: linear-gradient(to bottom right, #7c3aed, #8b5cf6, #6d28d9);
  box-shadow: 0 10px 15px -3px rgba(124, 58, 237, 0.3);
`;

const LogoText = styled.span`
  letter-spacing: -0.025em;
  color: ${({ theme }) => theme.colors.foreground};
`;

const Nav = styled.div`
  display: none;
  align-items: center;
  gap: 2rem;

  ${media.md} {
    display: flex;
  }
`;

const NavUnderline = styled.span`
  position: absolute;
  bottom: -4px;
  left: 0;
  width: 0;
  height: 1px;
  background-color: rgba(240, 244, 248, 0.3);
  transition: width 700ms ease;
`;

const NavLink = styled(Link)`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  opacity: ${({ $active }) => ($active ? 1 : 0.7)};
  transition: opacity 500ms ease;
  position: relative;
  text-decoration: none;

  &:hover {
    opacity: 1;
  }

  &:hover ${NavUnderline} {
    width: 100%;
  }
`;

const AccountButton = styled(Link)`
  display: none;
  padding: 0.5rem 1.25rem;
  border-radius: 9999px;
  background: linear-gradient(to right, #7c3aed, #7c3aed);
  color: white;
  font-size: ${({ theme }) => theme.fontSizes.sm};
  box-shadow: 0 10px 15px -3px rgba(124, 58, 237, 0.3);
  text-decoration: none;
  transition: all 700ms ease;

  ${media.md} {
    display: inline-flex;
  }

  &:hover {
    opacity: 0.9;
  }
`;