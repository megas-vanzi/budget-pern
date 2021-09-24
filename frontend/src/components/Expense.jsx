import React from "react";

const Expense = () => {
  const data = [
    {
      id: 3,
      concept: "Some random expense",
      ammount: "$ 544,00",
      date: "2021-08-10T03:00:00.000Z",
    },
    {
      id: 6,
      concept: "Some random expense",
      ammount: "$ 54,40",
      date: "2021-08-10T03:00:00.000Z",
    },
    {
      id: 7,
      concept: "Some random expense",
      ammount: "$ 58,40",
      date: "2021-08-10T03:00:00.000Z",
    },
    {
      id: 4,
      concept: "Another random expense",
      ammount: "$ 534,35",
      date: "2021-08-11T03:00:00.000Z",
    },
  ];

  console.log(data);

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
        <tbody></tbody>
      </table>
    </>
  );
};

export default Expense;
