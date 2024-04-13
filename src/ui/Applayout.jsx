import { Outlet } from "react-router-dom";
import SideBar from "./SideBar";
import Header from "./Header";
import styled from "styled-components";

const StyledApplayout = styled.div`
  display: grid;
  grid-template-columns: 26rem 1fr;
  grid-template-rows: auto 1fr;
  height: 100vh;
`;

const Main = styled.main`
  background-color: var(--color-gray-50);
  padding: 4rem 4.8rem 6.8rem;
`;

export default function Applayout() {
  return (
    <StyledApplayout>
      <Header />
      <SideBar />
      <Main>
        <Outlet />
      </Main>
    </StyledApplayout>
  );
}
