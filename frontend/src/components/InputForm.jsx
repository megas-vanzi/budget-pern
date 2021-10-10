import React, { Component } from "react";
import { Form } from "semantic-ui-react";

const options = [
  { key: "i", text: "Ingreso", value: "ingreso" },
  { key: "e", text: "Egreso", value: "egreso" },
];

class InputForm extends Component {
  state = {};

  handleChange = (e, { value }) => this.setState({ value });

  render() {
    const { value } = this.state;
    return (
      <Form>
        <Form.Select
          fluid
          label="Type"
          options={options}
          placeholder="Ingreso/Egreso"
          className="five wide field"
        />

        <Form.Group widths="equal">
          <Form.Input fluid label="Date" placeholder="yyyy-mm-dd" />
          <Form.Input fluid label="Ammount" placeholder="How much?" />
        </Form.Group>

        <Form.TextArea label="Concept" placeholder="Expense description..." />

        <Form.Button>Submit</Form.Button>
      </Form>
    );
  }
}

export default InputForm;
