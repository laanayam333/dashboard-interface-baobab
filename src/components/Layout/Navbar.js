import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { toggleSidebar } from "redux/sidebar";

const NavWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${(props) => props.theme.colors.dark};
  color: ${(props) => props.theme.colors.white};
`;

const Navbar = () => {
  const dispatch = useDispatch();

  return (
    <NavWrapper>
      <button onClick={() => dispatch(toggleSidebar())}>Toggle Sidebar</button>

      <h1>Company Logo</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/create">New Blog</Link>
      </nav>
    </NavWrapper>
  );
};

export default Navbar;
