import React from "react";
import { Link } from "react-router-dom";

const SubNavbar = () => (
  <nav className="ui raised very padded segment">
    <div className="ui text container">
      <button className="ui button">
        <Link to="/ingresos">Ingresos</Link>
      </button>

      <button className="ui button">
        <Link to="/egresos">Egresos</Link>
      </button>
    </div>
  </nav>
);

export default SubNavbar;
