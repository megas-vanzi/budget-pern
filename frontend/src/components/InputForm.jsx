import React, { useState, useCallback, useEffect } from "react";
import PropTypes from "prop-types";
import { useFormik } from "formik";
import * as Yup from "yup";
import Axios from "axios";
// Redux
import { useDispatch } from "react-redux";
import { addNewExpenseAction } from "../redux/actions/egresosActions";

function InputForm({ expenseType }) {
  const [submit, setSubmit] = useState([]);

  const [expense, setExpense] = useState({
    date: "",
    amount: "",
    concept: "",
    expense: expenseType,
  });

  const handleChange = (e) => {
    setExpense({
      ...expense,
      [e.target.name]: e.target.value,
    });
  };

  // Dispatch
  const dispatch = useDispatch();
  // Action
  const addExpense = (i) => dispatch(addNewExpenseAction(i));

  const handleSubmit = (e) => {
    e.preventDefault();

    try {
      dispatch(addExpense(expense));
      console.log("agregando");
      console.log(expense);
    } catch (error) {
      console.log(error);
    }

    setExpense({
      ...expense,
      date: "",
      amount: "",
      concept: "",
    });
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
      <h1>Input Form</h1>
      <form className="ui form" onSubmit={handleSubmit}>
        <div className="two fields">
          <div className="field">
            <label> Date </label>
            <input
              type="text"
              name="date"
              placeholder="yyyy-mm-dd <> dd/mm/yyyy"
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
              placeholder="How much?"
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
            placeholder="Describe your expense"
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
              Reset
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

InputForm.propTypes = {
  expenseType: PropTypes.string,
};

export default InputForm;
