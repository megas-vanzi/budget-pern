import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import { useDispatch } from "react-redux";
import { loginAction } from "../../redux/actions/actions";

const Login = () => {
  const [formValues, handleChange, reset] = useForm({
    email: "",
    password: "",
  });

  const dispatch = useDispatch();

  const { email, password } = formValues;

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formValues);
    dispatch(loginAction(formValues));
    reset();
    navigate("/");
  };

  const [error, setError] = useState(false);
  // if logged, error true
  // ...
  // perhaps auth user store?
  // useSelector then

  return (
    <div>
      <form onSubmit={handleSubmit} className="login">
        <div className="columns is-mobile is-centered">
          <div className="column is-one-third">
            <div className="field">
              <label className="label"> Email: </label>
              <div className="control">
                <input
                  className="input"
                  type="text"
                  name="email"
                  value={email}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="field">
              <label className="label"> Password: </label>
              <div className="control">
                <input
                  className="input"
                  type="password"
                  name="password"
                  value={password}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="field is-clearfix">
              <button
                type="submit"
                className="button is-primary is-outlined is-pulled-right"
              >
                {" "}
                Login{" "}
              </button>
            </div>
          </div>
        </div>
      </form>
      <div className="Buscar Algo Copado de Bulma">
        Botones para cosas de Redux
        <button>login post</button>
      </div>
    </div>
  );
};

export default Login;
