import React from "react";
import PropTypes from "prop-types";

const LastTenItems = ({ type, con, value, date }) => {
  return (
    <>
      <tr>
        <td>{type}</td>
        <td>{con}</td>
        <td>{value}</td>
        <td>{date}</td>
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
