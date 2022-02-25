import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => (
  <nav className="ui raised very padded segment">
    <div className="ui text container">
      <Link className="ui teal inverted segment" to="/">
        Home
      </Link>
      <div className="ui right floated header">
        <button className="ui button">
          <Link to="/abm">ABM</Link>
        </button>
      </div>
    </div>
    <button>Login</button>
    <button>Logout</button>
    <button>Register</button>
  </nav>
);

export default Navbar;
