import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import ButtonEdit from "./ButtonEdit";
import ButtonDelete from "./ButtonDelete";
import { numberFormat } from "../helpers/numberFormat";
import Axios from "axios";
// Redux
import { useDispatch, useSelector } from "react-redux";
import { editExpenseSetAction, getExpenseAction } from "../redux/actions";

const ExpenseList = ({
  query,
  setEditing,
  setEditingId,
  setEditingDate,
  setEditingAmount,
  setEditingConcept,
}) => {
  const [expenses, setExpenses] = useState([]);
  const [something, setSomething] = useState({
    id: "",
    concept: "",
    amount: "",
    date: "",
  });

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

  useEffect(() => {
    dispatch(getExpenseAction(query));
  }, []);

  const expenseQuery = useSelector((state) => state.expenses);
  console.log(expenseQuery);

  // Dispatch
  const dispatch = useDispatch();
  // Action
  const editExpenseSet = (i) => dispatch(editExpenseSetAction(i));

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
                      editExpenseSet({
                        id: id_expense,
                        concept: concept,
                        amount: amount,
                        date: date,
                      });
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
