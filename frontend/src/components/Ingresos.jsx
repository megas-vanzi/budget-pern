import React from "react";
import EditForm from "./EditForm";
import ExpenseList from "./ExpenseList";
import InputForm from "./InputForm";

function Ingresos() {
  return (
    <>
      <h2 align="center">Ingresos</h2>
      <div className="ui text container">
        <InputForm />
      </div>
      <div className="ui very padded text segment">
        <ExpenseList />
        <p>Shaping Budget App in React</p>
      </div>
      <div className="ui padded text container segment">
        <EditForm />
      </div>
    </>
  );
}

export default Ingresos;
