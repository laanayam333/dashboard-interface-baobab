import styled, { css } from "styled-components";

export const StyledMenu = styled.nav(
  ({ theme, isSidebarOpen }) => css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    background: ${theme.colors.primaryDark};
    height: 100vh;
    text-align: left;
    padding: 2rem;
    position: absolute;
    top: 0;
    left: 0;
    transform: ${isSidebarOpen ? "translateX(0)" : "translateX(-100%)"};
    transition: transform 0.3s ease-in-out;

    @media (max-width: ${theme.mobile}) {
      width: 100%;
    }

    a {
      font-size: 2rem;
      text-transform: uppercase;
      padding: 2rem 0;
      font-weight: bold;
      letter-spacing: 0.5rem;
      color: ${theme.primaryDark};
      text-decoration: none;
      transition: color 0.3s linear;

      @media (max-width: ${theme.mobile}) {
        font-size: 1.5rem;
        text-align: center;
      }

      &:hover {
        color: ${theme.primaryHover};
      }
    }
  `
);
