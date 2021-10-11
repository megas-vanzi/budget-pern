import React, { useState } from "react";
import EditForm from "./EditForm";
import ExpenseList from "./ExpenseList";
import InputForm from "./InputForm";

function Egresos() {
  const [editing, setEditing] = useState(false);
  const [editingId, setEditingId] = useState("");
  const [editingDate, setEditingDate] = useState("");
  const [editingAmount, setEditingAmount] = useState("");
  const [editingConcept, setEditingConcept] = useState("");

  return (
    <>
      <h2 align="center">Egresos</h2>
      <div className="ui text container">
        <InputForm expenseType="egreso" />
      </div>

      <div className="ui very padded text segment">
        <ExpenseList
          setEditing={setEditing}
          setEditingId={setEditingId}
          setEditingDate={setEditingDate}
          setEditingAmount={setEditingAmount}
          setEditingConcept={setEditingConcept}
          query="Out"
        />
        <p>Shaping Budget App in React</p>
      </div>

      <div className="ui padded text container segment">
        <EditForm
          id_expense={editingId}
          date={editingDate}
          amount={editingAmount}
          concept={editingConcept}
          setEditing={setEditing}
          setEditingId={setEditingId}
          setEditingDate={setEditingDate}
          setEditingAmount={setEditingAmount}
          setEditingConcept={setEditingConcept}
        />
      </div>
    </>
  );
}

export default Egresos;
