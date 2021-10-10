import React from "react";
import ExpenseList from "./ExpenseList";
import FormControl from "./FormControl";

function Egresos() {
  return (
    <>
      <h2 align="center">Egresos</h2>
      <div className="ui padded text container segment">
        <FormControl />
      </div>
      <div className="ui very padded text segment">
        <ExpenseList />
        <p>Shaping Budget App in React</p>
      </div>
    </>
  );
}

export default Egresos;
