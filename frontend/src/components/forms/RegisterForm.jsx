import React from "react";

const RegisterForm = () => {
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
      RegisterForm
      <form onSubmit={handleSubmit}>
        <div>
          <label> Username </label>
          <input />
          <label> Email </label>
          <input />
          <label> Password </label>
          <input />
          <button>Submit Register</button>
          <button>Cancel</button>
        </div>
      </form>
    </div>
  );
};

export default RegisterForm;
