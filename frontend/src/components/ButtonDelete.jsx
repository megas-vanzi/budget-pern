import React from "react";
import PropTypes from "prop-types";
import { Button, Icon, Label } from "semantic-ui-react";
import Axios from "axios";

const ButtonDelete = ({ id }) => {
  const clickDelete = () => {
    console.log(`click delete ${id}`);
    fetchData(id);
  };

  const fetchData = async (id) => {
    try {
      const { data } = await Axios.delete(
        `http://localhost:4000/expense/${id}`
      ); // localhost 4000  id de la expense a deletear
      console.log(data);
    } catch (error) {
      console.log(error);
    }
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
