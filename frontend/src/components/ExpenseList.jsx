import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import ButtonEdit from "./ButtonEdit";
import ButtonDelete from "./ButtonDelete";
import { numberFormat } from "../helpers/numberFormat";
import Axios from "axios";

const ExpenseList = ({
  query,
  setEditing,
  setEditingId,
  setEditingDate,
  setEditingAmount,
  setEditingConcept,
}) => {
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
              <tr>
                <td>{date.slice(0, -14)}</td>
                <td>{concept}</td>
                <td>{numberFormat(amount)}</td>
                <td>
                  <div
                    onClick={() => {
                      setEditing(true);
                      setEditingId(id_expense);
                      setEditingDate(date);
                      setEditingAmount(amount);
                      setEditingConcept(concept);
                    }}
                  >
                    <ButtonEdit id={id_expense} />
                  </div>
                  <ButtonDelete id={id_expense} />
                </td>
              </tr>
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
