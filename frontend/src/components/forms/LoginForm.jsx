import React from "react";

const LoginForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();

    try {
      console.log("Submit Form");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      LoginForm
      <form onSubmit={handleSubmit}>
        <div>
          <label> Email </label>
          <input />
          <label> Password </label>
          <input />
          <button>Submit Login</button>
          <button>Cancel</button>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
