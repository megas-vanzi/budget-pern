import React from "react";
import { Link } from "react-router-dom";

const SubNavbar = () => (
  <nav className="ui github padded text container segment">
    <div className="ui padded centered grid">
      <div className="ui six wide field">
        <button className="ui inverted teal button">
          <Link to="/ingresos">Ingresos</Link>
        </button>
      </div>

      <div className="ui six wide field">
        <button className="ui inverted teal  button">
          <Link to="/egresos">Egresos</Link>
        </button>
      </div>
    </div>
  </nav>
);

export default SubNavbar;
