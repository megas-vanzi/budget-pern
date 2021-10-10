import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import ExpenseItems from "./ExpenseItems";
import Axios from "axios";

const ExpenseList = ({ query }) => {
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
            <td>Date</td>
            <td>Concept</td>
            <td>Amount</td>
            <td>Actions</td>
          </tr>
        </thead>
        <tbody>
          {expenses.map(({ id_expense, concept, amount, date }) => {
            return (
              <ExpenseItems
                key={id_expense}
                id={id_expense}
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

ExpenseList.propTypes = {
  query: PropTypes.string,
};

export default ExpenseList;
