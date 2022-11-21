import styled from "styled-components";

export const Layout = styled.div`
  min-height: 768px;
  display: grid;
  grid-template-columns: auto 1fr;
  grid-template-areas: "sidebar body";
`;

export const Body = styled.div`
  grid-area: body;
  margin-left: 8px;
`;
