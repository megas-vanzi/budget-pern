import React from "react";
import PropTypes from "prop-types";
import { Button, Icon, Label } from "semantic-ui-react";

const ButtonEdit = ({ id }) => {
  const clickEdit = () => {
    console.log(`edit click ${id}`);
  };

  return (
    <Button onClick={clickEdit} as="div" labelPosition="right">
      <Button color="teal">
        <Icon name="keyboard" />
      </Button>
      <Label as="a" basic color="teal" pointing="left">
        Edit
      </Label>
    </Button>
  );
};

ButtonEdit.propTypes = {
  id: PropTypes.number,
};

export default ButtonEdit;
