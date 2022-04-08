import React from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import { useDispatch } from "react-redux";
import { registerAction } from "../../redux/actions/actions";

const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formValues, handleInputChange, reset] = useForm({
    username: "",
    email: "",
    password: "",
    comfirmPassword: "",
  });

  const { username, email, password, comfirmPassword } = formValues;
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(registerAction(formValues));
    reset();
    navigate("/");
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="register">
        <div className="columns is-mobile is-centered">
          <div className="column is-one-third">
            <div className="field">
              <label className="label" htmlFor="exampleInputEmail1">
                Nombre de Usuario
              </label>
              <input
                className="input"
                type="text"
                name="username"
                placeholder="Nombre de usuario"
                value={username}
                onChange={handleInputChange}
              />
            </div>
            <div className="field">
              <label className="label" htmlFor="exampleInputEmail1">
                Email
              </label>
              <input
                className="input"
                type="email"
                name="email"
                placeholder="Email"
                value={email}
                onChange={handleInputChange}
              />
            </div>
            <div className="field">
              <label className="label" htmlFor="exampleInputPassword1">
                Password
              </label>
              <input
                className="input"
                type="password"
                name="password"
                placeholder="Password"
                value={password}
                onChange={handleInputChange}
              />
            </div>
            <div className="field">
              <label className="label" htmlFor="exampleInputPassword1">
                Confirmar Password
              </label>

              <input
                className="input"
                type="password"
                name="comfirmPassword"
                placeholder="Confirmar Password"
                value={comfirmPassword}
                onChange={handleInputChange}
              />
            </div>

            <div className="field">
              <button
                type="submit"
                className="button is-primary is-outlined is-pulled-right"
              >
                Register
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Register;
