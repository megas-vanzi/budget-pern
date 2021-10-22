import React from "react";
import PropTypes from "prop-types";
import { Button, Icon, Label } from "semantic-ui-react";
// Redux
import { useDispatch } from "react-redux";
import { deleteExpenseAction } from "../redux/actions/egresosActions";

const ButtonDelete = ({ id }) => {
  // Dispatch
  const dispatch = useDispatch();
  // Action
  const deleteExpense = (i) => dispatch(deleteExpenseAction(i));

  const clickDelete = () => {
    console.log(`click delete ${id}`);
    try {
      dispatch(deleteExpense(id));
      console.log("deleting");
      console.log(id);
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
