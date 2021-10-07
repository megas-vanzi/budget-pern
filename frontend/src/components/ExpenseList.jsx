import React from "react";
import { useFetchData } from "../hooks/useFetchData";
import ExpenseItems from "./ExpenseItems";

const ExpenseList = () => {
  const [expenses] = useFetchData();

  return (
    <>
      <table>
        <thead>
          Expense Table Render
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
