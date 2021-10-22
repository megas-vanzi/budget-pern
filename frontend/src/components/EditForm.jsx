import React, { useState, useEffect, Component } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
// Redux
import { useDispatch, useSelector } from "react-redux";
import { editEgresoAction } from "../redux/actions/egresosActions";

function EditForm() {
  const [expense, setExpense] = useState({
    date: "",
    amount: "",
    concept: "",
    expenseId: "",
  });

  const expenseToEdit = useSelector((state) => state.egresos.expenseToEdit);

  useEffect(() => {
    expenseToEdit === null
      ? setExpense({
          date: "",
          amount: "",
          concept: "",
          expenseId: "",
        })
      : setExpense(expenseToEdit);
  }, [expenseToEdit]);

  const handleChange = (e) => {
    setExpense({
      ...expense,
      [e.target.name]: e.target.value,
    });
  };

  // Dispatch
  const dispatch = useDispatch();
  // Action
  const editExpense = (i) => dispatch(editEgresoAction(i));

  const handleSubmit = (e) => {
    e.preventDefault();

    try {
      dispatch(editExpense(expense));
      console.log("editando");
      console.log(expense);
    } catch (error) {
      console.log(error);
    }
  };

  const validationSchema = Yup.object().shape({
    date: Yup.date()
      .required("Ingresar la fecha")
      .typeError("Ingresar fecha en formato válido"),
    amount: Yup.number()
      .required("Indique el monto")
      .typeError("Ingrese el valor en números"),
    concept: Yup.string().required("Describa la operación que desea registrar"),
  });

  const formik = useFormik({
    validationSchema: validationSchema,
  });

  const renderErrorMessage = (field) => {
    return (
      formik.touched[field] && (
        <div style={{ color: "coral" }}>{formik.errors[field]}</div>
      )
    );
  };

  return (
    <div className="ui padded container">
      <h2 id="edit-form">Edit Form</h2>
      <form className="ui form" onSubmit={handleSubmit}>
        <div className="two fields">
          <div className="field">
            <label> Date </label>
            <input
              type="text"
              name="date"
              placeholder="Edit Date"
              onChange={handleChange}
              error={formik.errors.date}
              value={expense.date}
            />
            {renderErrorMessage("date")}
          </div>
          <div className="field">
            <label> Amount </label>
            <input
              type="text"
              name="amount"
              placeholder="Edit Amount"
              onChange={handleChange}
              error={formik.errors.amount}
              value={expense.amount}
            />
            {renderErrorMessage("amount")}
          </div>
        </div>
        <div className="field">
          <label> Concept </label>
          <textarea
            rows="3"
            type="text"
            name="concept"
            placeholder="Edit Concept"
            onChange={handleChange}
            error={formik.errors.concept}
            value={expense.concept}
          />
          {renderErrorMessage("concept")}
        </div>
        <div className="ui grid two column row">
          <div className="left floated column">
            <button className="ui button " type="submit">
              Submit
            </button>
          </div>
          <div className="right floated column">
            <button
              className="ui button right floated"
              type="reset"
              onClick={() =>
                setExpense({
                  ...expense,
                  date: "",
                  amount: "",
                  concept: "",
                })
              }
            >
              Cancel
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default EditForm;
