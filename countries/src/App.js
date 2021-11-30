import React from "react";
import "./App.css";
import Home from "./components/Home";
import CountriesList from "./components/CountriesList";
import {
  BrowserRouter,
  Link,
  Routes,
  Route,
  useParams,
} from "react-router-dom";
import CountrySingle from "./components/CountrySingle";

const RouteWrapper = (props) => {
  const params = useParams();
  return <CountrySingle params={params} {...props} />;
};
const App = () => {
  return (
    <BrowserRouter>
      <nav>
        <ul>
          <li>
            <Link className="menu_list" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="menu_list" to="/countries">
              Countries
            </Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route index element={<Home />} />
        <Route path="/countries" element={<CountriesList />} />
        <Route path="/countries/:name" element={<RouteWrapper />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
