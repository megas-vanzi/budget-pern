import React from "react";
import EditForm from "./EditForm";
import ExpenseList from "./ExpenseList";
import InputForm from "./InputForm";

function Egresos() {
  return (
    <>
      <h2 align="center">Egresos</h2>
      <div className="ui text container">
        <InputForm expenseType="egreso" />
      </div>
      <div className="ui very padded text segment">
        <ExpenseList query="Out" />
        <p>Shaping Budget App in React</p>
      </div>
      <div className="ui padded text container segment">
        <EditForm />
      </div>
    </>
  );
}

export default Egresos;
