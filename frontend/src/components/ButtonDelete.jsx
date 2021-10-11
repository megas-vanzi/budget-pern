import React from "react";
import PropTypes from "prop-types";
import { Button, Icon, Label } from "semantic-ui-react";

const ButtonDelete = ({ id }) => {
  const clickDelete = () => {
    console.log(`click delete ${id}`);
  };

  return (
    <Button onClick={clickDelete} as="div" labelPosition="right">
      <Button color="red">
        <Icon name="window close" />
      </Button>
      <Label as="a" basic color="red" pointing="left">
        Del
      </Label>
    </Button>
  );
};

ButtonDelete.propTypes = {
  id: PropTypes.number,
};

export default ButtonDelete;
