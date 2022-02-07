import React, { useState } from "react";
import Abm from "./Abm";
import EditForm from "../components/forms/EditForm";
import ExpenseList from "../components/ExpenseList";
import InputForm from "../components/forms/InputForm";
import Modal from "../components/modals/Modal";

function Ingresos() {
  const [editing, setEditing] = useState(false);
  const [editingId, setEditingId] = useState("");
  const [editingDate, setEditingDate] = useState("");
  const [editingAmount, setEditingAmount] = useState("");
  const [editingConcept, setEditingConcept] = useState("");

  const [modal, setModal] = useState(false);

  return (
    <>
      <Abm />
      <button className="clickMe"></button>
      <Modal show={modal} title="My Modal" />
      <h2 align="center">Ingresos</h2>
      <div className="ui text container">
        <InputForm expenseType="ingreso" />
      </div>

      <div className="ui very padded text segment">
        <ExpenseList
          setEditing={setEditing}
          setEditingId={setEditingId}
          setEditingDate={setEditingDate}
          setEditingAmount={setEditingAmount}
          setEditingConcept={setEditingConcept}
          query="In"
        />
        <p id="shaping">Shaping Budget App in React</p>
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

export default Ingresos;
