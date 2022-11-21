import "./styles.css";
import { RoutePath, routes } from "./routes";
import Layout from "./layout/Layout";
import NoMatch from "./pages/NoMatch";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyles from "./globalStyles";

export default function App() {
  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            {routes.map((route) => {
              return (
                <Route
                  index={RoutePath.HOME === route.path}
                  path={route.path}
                  element={<route.component />}
                  key={route.name}
                />
              );
            })}
          </Route>
          <Route path="*" element={<NoMatch />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
