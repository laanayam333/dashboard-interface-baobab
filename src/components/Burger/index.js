import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { selectIsSidebarOpen } from "redux/sidebar";

import { toggleSidebar } from "redux/sidebar";

import { StyledBurger } from "components/Burger/Burger.styled";

const Burger = () => {
  const isSidebarOpen = useSelector(selectIsSidebarOpen);
  const dispatch = useDispatch();

  return (
    <StyledBurger isSidebarOpen={isSidebarOpen} onClick={() => dispatch(toggleSidebar())}>
      <div />
      <div />
      <div />
    </StyledBurger>
  );
};

Burger.propTypes = {
  isSidebarOpen: PropTypes.bool.isRequired,
  toggleSidebar: PropTypes.func.isRequired,
};

export default Burger;
