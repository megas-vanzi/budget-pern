import React, { useEffect, useState } from "react";
import ExpenseItems from "./ExpenseItems";
import Axios from "axios";

const ExpenseList = () => {
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    (async () => {
      const { data } = await Axios.get("http://localhost:4000/expense/");

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

export default ExpenseList;
