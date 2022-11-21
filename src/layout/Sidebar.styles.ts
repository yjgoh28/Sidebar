import { Link } from "react-router-dom";
import styled from "styled-components";

const BASE_SIDEBAR_LENGTH = 48;

export const Sidebar = styled.nav`
  grid-area: sidebar;
  position: sticky;
  height: calc(100vh - 16px);
  min-height: ${768 - 16}px;
  margin-bottom: 8px;
  width: 100px;
`;

export const SidebarLabel = styled.label`
  display: none;
  font-family: Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  color: white;
  text-transform: capitalize;
  transform: translateY(1px);
  line-height: 20px;
  font-size: 16px;
  white-space: nowrap;
  text-overflow: clip;
  overflow: hidden;
`;

export const SidebarContent = styled.ul<{ longestLabelWidth: number }>`
  list-style: none;
  margin: 0;
  padding: 0;
  padding-left: 8px;
  display: flex;
  width: ${BASE_SIDEBAR_LENGTH}px;
  flex-direction: column;
  align-items: center;
  background-color: #1d1a38;
  height: 100%;
  padding-top: 32px;
  overflow: hidden;
  transition: width 0.2s ease;

  &:hover {
    width: ${({ longestLabelWidth }) => {
      const computedSidebarLength =
        BASE_SIDEBAR_LENGTH + longestLabelWidth + 64;
      return computedSidebarLength;
    }}px;
    ${SidebarLabel} {
      display: block;
    }
  }
`;

export const SidebarItem = styled.li`
  width: 100%;
  transition: background-color 0.2s ease;
  cursor: pointer;
  height: 60px;
  display: flex;
  align-items: center;
  &:hover {
    background-color: rgba(255, 255, 255, 0.05);
  }
`;

export const SidebarLink = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
`;

export const IconContainer = styled.div`
  width: 48px;
  min-width: 48px;
  height: 48px;
  display: flex;
  align-items: center;

  & > svg {
    color: whitesmoke;
  }
`;
