import React from "react";
import "./index.css";
// import "./App.css";

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
    <>
      <BrowserRouter>
        <nav className="bg-yellow-500">
          <ul className="flex border-b">
            <li className="-mb-px mr-1 mt-4 ml-2">
              <Link
                className=" inline-block  py-2 px-4 text-white font-semibold text-2xl"
                to="/"
              >
                Home
              </Link>
            </li>
            <li className="-mb-px mr-1 mt-4 ">
              <Link
                className="inline-block  py-2 px-4 text-white font-semibold text-2xl "
                to="/countries"
              >
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
    </>
  );
};

export default App;
