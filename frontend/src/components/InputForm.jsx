import React, { useState, useCallback, useEffect } from "react";
import { Form, Button } from "semantic-ui-react";
import PropTypes from "prop-types";
import { useFormik } from "formik";
import * as Yup from "yup";
import Axios from "axios";
import useInsertData from "../hooks/useInsertData";

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
    validationSchema: Yup.object({
      date: Yup.date().required("Ingresar la fecha"),
      amount: Yup.number().required("Indique el monto"),
      concept: Yup.string().required(
        "Describa la operación que desea registrar"
      ),
    }),
    onSubmit: (formData) => {
      setSubmit(formData);
    },
  });

  return (
    <div className="ui padded container">
      <h1>Input Form</h1>
      <Form onSubmit={formik.handleSubmit}>
        <Form.Group widths="equal">
          <Form.Input
            fluid
            label="Date"
            name="date"
            placeholder="yyyy-mm-dd <> dd/mm/yyyy"
            onChange={formik.handleChange}
            error={formik.errors.date}
          />
          <Form.Input
            fluid
            label="Amount"
            name="amount"
            placeholder="How much?"
            onChange={formik.handleChange}
            error={formik.errors.ammount}
          />
        </Form.Group>

        <Form.TextArea
          label="Concept"
          name="concept"
          placeholder="Expense description..."
          onChange={formik.handleChange}
          error={formik.errors.concept}
        />

        <Button type="submit">Submit</Button>
      </Form>
    </div>
  );
}

InputForm.propTypes = {
  expenseType: PropTypes.string,
};

export default InputForm;
