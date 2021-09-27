import React from "react";
import { useFetchData } from "../hooks/useFetchData";
import ExpenseItems from "./ExpenseItems";

const Expense = () => {
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
          {expenses.map(({ id, concept, ammount, date }) => {
            return (
              <ExpenseItems
                key={id}
                id={id}
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

export default Expense;
