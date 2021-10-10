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
      <table className="ui very basic right aligned table">
        <thead>
          <tr>
            <td>Id</td>
            <td>Concept</td>
            <td>Ammount</td>
            <td>Date</td>
            <td>Actions</td>
          </tr>
        </thead>
        <tbody>
          {expenses.map(({ id_expense, concept, ammount, date }) => {
            return (
              <ExpenseItems
                key={id_expense}
                id={id_expense}
                con={concept}
                value={ammount}
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
