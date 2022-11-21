import * as S from "./Sidebar.styles";
import { routes } from "../routes";
import { useLocation, matchPath } from "react-router";
import { useMemo } from "react";
import { IconContext } from "react-icons/lib";

const Sidebar = () => {
  const location = useLocation();
  const currentRoute = useMemo(
    () => routes.find((route) => matchPath(location.pathname, route.path)),
    [location]
  );

  console.log(currentRoute);

  const longestLabelWidth = useMemo(() => {
    if (currentRoute?.sidebarNavItems === undefined) {
      return 0;
    }
    const sidebarItems = [...currentRoute?.sidebarNavItems];

    const longestLabel = sidebarItems.sort(
      (a, b) => b.name.length - a.name.length
    )[0].name;

    const root = document.getElementById("root");
    const label = document.createElement("label");
    label.innerText = longestLabel || "";
    root?.appendChild(label);
    const longestWidth = label.offsetWidth;
    root?.removeChild(label);
    return longestWidth;
  }, [currentRoute]);

  return (
    <S.Sidebar>
      <IconContext.Provider value={{ color: "white", size: "2em" }}>
        <S.SidebarContent longestLabelWidth={longestLabelWidth}>
          {currentRoute?.sidebarNavItems?.map((item) => {
            return (
              <S.SidebarItem key={item.path}>
                <S.SidebarLink to={item.path}>
                  <S.IconContainer>
                    <item.icon />
                  </S.IconContainer>
                  <S.SidebarLabel>{item.name}</S.SidebarLabel>
                </S.SidebarLink>
              </S.SidebarItem>
            );
          })}
        </S.SidebarContent>
      </IconContext.Provider>
    </S.Sidebar>
  );
};

export default Sidebar;
