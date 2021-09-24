import React from "react";
import PropTypes from "prop-types";

const ExpenseItems = ({ id, con, value, date }) => {
  return (
    <>
      <tr>
        <td>{id}</td>
        <td>{con}</td>
        <td>{value}</td>
        <td>{date}</td>
        <td>Edit - Delete</td>
      </tr>
    </>
  );
};

ExpenseItems.propTypes = {
  id: PropTypes.number,
  con: PropTypes.string,
  value: PropTypes.string,
  date: PropTypes.string,
};

export default ExpenseItems;
