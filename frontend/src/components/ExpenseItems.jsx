import React from "react";
import PropTypes from "prop-types";
import ButtonEdit from "./ButtonEdit";
import ButtonDelete from "./ButtonDelete";
import { numberFormat } from "../helpers/numberFormat";

const ExpenseItems = ({ id, con, value, date }) => {
  return (
    <>
      <tr>
        <td>{date.slice(0, -14)}</td>
        <td>{con}</td>
        <td>{numberFormat(value)}</td>
        <td>
          <ButtonEdit />
          <ButtonDelete />
        </td>
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
