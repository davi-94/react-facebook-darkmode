import styled from "styled-components";
import { NavButton } from "../../Navbar/NavItem/styles";

export const MenuItem = styled.button`
  display: flex;
  align-items: center;
  padding: 0.5rem;
  width: 100%;
  height: 60px;
  font-size: 1rem;
  color: ${(props) => props.theme.colors.textColor};
  border: 0;
  background-color: transparent;
  border-radius: var(--border-radius);
  transition: background var(--speed);
  cursor: pointer;
  outline: 0;

  h2 {
    margin-top: 0;
    margin-bottom: 0;
  }

  ${NavButton} {
    --button-size: calc(var(--nav-size) * 0.5);
    margin-right: 0.5rem;

    &:hover {
      filter: none;
    }
  }

  &:hover {
    color: ${(props) => props.theme.colors.primary};
    background-color: ${(props) => props.theme.colors.textColor};
  }

  .icon-right {
    margin-left: auto;
  }
`;