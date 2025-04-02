import React from "react";
import { Link, Routes, Route } from "react-router-dom";
import V1 from "./v1";
import V2 from "./v2";
import V3 from "./v3";
import V4 from "./v4";

function App() {
  return (
    <div>
      <h1>Home Page , this is our updated react page </h1>
      <nav>
        <ul>
          <li>
            <Link to="/v1">V1</Link>
          </li>
          <li>
            <Link to="/v2">V2</Link>
          </li>
          <li>
            <Link to="/v3">V3</Link>
          </li>
          <li>
            <Link to="/v4">V4</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/v1" element={<V1 />} />
        <Route path="/v2" element={<V2 />} />
        <Route path="/v3" element={<V3 />} />
        <Route path="/v4" element={<V4 />} />
      </Routes>
    </div>
  );
}

export default App;
