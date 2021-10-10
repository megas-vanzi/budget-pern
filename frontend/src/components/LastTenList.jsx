import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import LastTenItems from "./LastTenItems";
import Axios from "axios";

const LastTenList = ({ query }) => {
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    (async () => {
      const { data } = await Axios.get(`http://localhost:4000/expense${query}`);

      if (data.results) {
        setExpenses(data.results);
      } else {
        setExpenses(data);
      }
    })();
  }, [expenses]);

  return (
    <>
      <table className="ui very basic center aligned table">
        <thead>
          <tr>
            <td>Type</td>
            <td>Date</td>
            <td>Amount</td>
            <td>Concept</td>
          </tr>
        </thead>
        <tbody>
          {expenses.map(({ id_expense, type, concept, amount, date }) => {
            return (
              <LastTenItems
                key={id_expense}
                type={type}
                con={concept}
                value={amount}
                date={date}
              />
            );
          })}
        </tbody>
      </table>
    </>
  );
};

LastTenList.propTypes = {
  query: PropTypes.string,
};

export default LastTenList;
