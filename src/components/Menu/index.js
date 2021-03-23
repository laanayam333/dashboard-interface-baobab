import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { selectIsSidebarOpen } from "redux/sidebar";

import { StyledMenu } from "components/Menu/Menu.styled";

const Menu = () => {
  const isSidebarOpen = useSelector(selectIsSidebarOpen);

  return (
    <StyledMenu isSidebarOpen={isSidebarOpen}>
      <a href="/">Page 1</a>
      <a href="/">Page 2</a>
      <a href="/">Page 3</a>
    </StyledMenu>
  );
};

Menu.propTypes = {
  isSidebarOpen: PropTypes.bool.isRequired,
};

export default Menu;
