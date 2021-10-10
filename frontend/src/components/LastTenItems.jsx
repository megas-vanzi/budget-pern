import React from "react";
import PropTypes from "prop-types";
import { numberFormat } from "../helpers/numberFormat";

const LastTenItems = ({ type, con, value, date }) => {
  return (
    <>
      <tr
        style={
          type === "ingreso"
            ? { backgroundColor: "#DEEEED" }
            : { backgroundColor: "#EEDEDE" }
        }
      >
        <td>{type}</td>
        <td>{date.slice(0, -14)}</td>
        <td>{numberFormat(value)}</td>
        <td>{con}</td>
      </tr>
    </>
  );
};

LastTenItems.propTypes = {
  type: PropTypes.string,
  con: PropTypes.string,
  value: PropTypes.string,
  date: PropTypes.string,
};

export default LastTenItems;
