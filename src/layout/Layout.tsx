import { Outlet } from "react-router";
import * as S from "./Layout.styles";
import Sidebar from "./Sidebar";

const Layout = () => {
  return (
    <S.Layout>
      <Sidebar></Sidebar>
      <S.Body>
        <Outlet />
      </S.Body>
    </S.Layout>
  );
};

export default Layout;
