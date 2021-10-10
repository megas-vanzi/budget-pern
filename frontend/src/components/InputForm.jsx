import React, { useState, useEffect } from "react";
import { Form, Button } from "semantic-ui-react";
import PropTypes from "prop-types";
import { useFormik } from "formik";
import * as Yup from "yup";

function InputForm({ expenseType }) {
  const [tipo, setTipo] = useState(expenseType);
  //used useState, if not expenseType would have,
  //instead of a string initialValue, an object
  const formik = useFormik({
    initialValues: {
      expenseType: tipo,
      date: "",
      ammount: "",
      concept: "",
    },
    validationSchema: Yup.object({
      date: Yup.date().required("Ingresar la fecha"),
      ammount: Yup.number().required("Indique el monto"),
      concept: Yup.string().required(
        "Describa la operación que desea registrar"
      ),
    }),
    onSubmit: (formData) => {
      console.log(formData);
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
            placeholder="yyyy-mm-dd"
            onChange={formik.handleChange}
            error={formik.errors.date}
          />
          <Form.Input
            fluid
            label="Ammount"
            name="ammount"
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
