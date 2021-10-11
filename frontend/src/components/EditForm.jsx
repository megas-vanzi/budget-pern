import React, { useState, useEffect, Component } from "react";
import PropTypes from "prop-types";
import { useFormik } from "formik";
import * as Yup from "yup";
import Axios from "axios";
import { numberFormat } from "../helpers/numberFormat";

function EditForm({
  id_expense,
  date,
  amount,
  concept,
  setEditing,
  setEditingId,
  setEditingDate,
  setEditingAmount,
  setEditingConcept,
}) {
  const [submit, setSubmit] = useState([]);

  useEffect(() => {
    const updateData = async (id, date, amount, concept) => {
      try {
        const { data } = await Axios.put(
          `http://localhost:4000/expense/${id}`,
          {
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

    updateData(id_expense, submit.date, submit.amount, submit.concept);
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

  const formik = useFormik({
    initialValues: {
      date: "",
      amount: "",
      concept: "",
    },
    onSubmit: (formData) => {
      setSubmit(formData);
      formik.resetForm();
      console.log(formData);
      setEditing(false);
      setEditingId("");
      setEditingDate("");
      setEditingAmount("");
      setEditingConcept("");
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
      <h2 id="edit-form">Edit Form</h2>
      <table>
        <tr>
          <td>{amount == "" ? "" : numberFormat(amount)}</td>
          <td>{concept}</td>
          <td>{date.slice(0, -14)}</td>
        </tr>
      </table>
      <form className="ui form" onSubmit={formik.handleSubmit}>
        <div className="two fields">
          <div className="field">
            <label> Date </label>
            <input
              type="text"
              name="date"
              placeholder="Edit Date"
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
              placeholder="Edit Amount"
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
            placeholder="Edit Concept"
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
              Cancel
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

EditForm.propTypes = {
  id_expense: PropTypes.number,
};

export default EditForm;
