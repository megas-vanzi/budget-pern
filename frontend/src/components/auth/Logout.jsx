import React from "react";
import { useNavigate } from "react-router-dom";
import { logoutAction } from "../../redux/actions/actions";
import { useDispatch } from "react-redux";

const Logout = () => {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(logoutAction());
    navigate("/");
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="logout">
        <div className="columns is-mobile is-centered">
          <button
            type="submit"
            className="button is-danger is-outlined is-pulled-right"
          >
            {" "}
            Confirm Logout{" "}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Logout;
