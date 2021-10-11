import React, { useState, useCallback, useEffect } from "react";
import PropTypes from "prop-types";
import { useFormik } from "formik";
import * as Yup from "yup";
import Axios from "axios";

function InputForm({ expenseType }) {
  const [submit, setSubmit] = useState([]);

  useEffect(() => {
    const insertData = async (expense, date, amount, concept) => {
      try {
        const { data } = await Axios.post(
          `http://localhost:4000/expense`,
          {
            expense,
            date,
            amount,
            concept,
          } // date, ammount, concept
        );
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    };

    insertData(expenseType, submit.date, submit.amount, submit.concept);
  }, [submit]);

  const validationSchema = Yup.object().shape({
    date: Yup.date()
      .required("Ingresar la fecha")
      .typeError("Ingresar fecha en formato válido"),
    amount: Yup.number()
      .required("Indique el monto")
      .typeError("Ingrese el valor en números"),
    concept: Yup.string().required("Describa la operación que desea registrar"),
  });

  const [tipo, setTipo] = useState(expenseType);
  //used useState, if not expenseType would have,
  //instead of a string initialValue, an object
  const formik = useFormik({
    initialValues: {
      expenseType: tipo,
      date: "",
      amount: "",
      concept: "",
    },
    onSubmit: (formData) => {
      setSubmit(formData);
      formik.resetForm();
      console.log(formData);
    },
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
      <form className="ui form" onSubmit={formik.handleSubmit}>
        <div className="two fields">
          <div className="field">
            <label> Date </label>
            <input
              type="text"
              name="date"
              placeholder="yyyy-mm-dd <> dd/mm/yyyy"
              onChange={formik.handleChange}
              error={formik.errors.date}
              {...formik.getFieldProps("date")}
            />
            {renderErrorMessage("date")}
          </div>
          <div className="field">
            <label> Amount </label>
            <input
              type="text"
              name="amount"
              placeholder="How much?"
              onChange={formik.handleChange}
              error={formik.errors.amount}
              {...formik.getFieldProps("amount")}
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
            onChange={formik.handleChange}
            error={formik.errors.concept}
            {...formik.getFieldProps("concept")}
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
              onClick={formik.resetForm}
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
