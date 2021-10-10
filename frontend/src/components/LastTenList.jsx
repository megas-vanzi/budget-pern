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
      <table className="ui very basic right aligned table">
        <thead>
          <tr>
            <td>Type</td>
            <td>Concept</td>
            <td>Ammount</td>
            <td>Date</td>
          </tr>
        </thead>
        <tbody>
          {expenses.map(({ type, concept, ammount, date }) => {
            return (
              <LastTenItems
                type={type}
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

LastTenList.propTypes = {
  query: PropTypes.string,
};

export default LastTenList;
