import React, { Component } from "react";
import { Form } from "semantic-ui-react";

class EditForm extends Component {
  state = {};

  handleChange = (e, { value }) => this.setState({ value });

  render() {
    const { value } = this.state;
    return (
      <>
        <h2>Edit Form</h2>
        <Form>
          <Form.Group widths="equal">
            <Form.Input fluid label="Date" placeholder="{date}" />
            <Form.Input fluid label="Ammount" placeholder="{ammount}" />
          </Form.Group>

          <Form.TextArea label="Concept" placeholder="{concept}" />

          <Form.Button>Submit</Form.Button>
        </Form>
      </>
    );
  }
}

export default EditForm;
