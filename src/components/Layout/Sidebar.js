import { useSelector } from "react-redux";
import styled from "styled-components";
import { selectIsSidebarOpen } from "redux/sidebar";

const SidebarContainer = styled.div`
  width: 25vw;
  display: ${(props) => (props.isSidebarOpen === true ? "block" : "none")};
  height: 100vh;
  z-index: 100;
  background-color: ${(props) => props.theme.colors.mediumAccent};
`;

const Sidebar = () => {
  const isSidebarOpen = useSelector(selectIsSidebarOpen);

  return (
    <SidebarContainer isSidebarOpen={isSidebarOpen}>
      <h1>Sidebar</h1>
    </SidebarContainer>
  );
};

export default Sidebar;
