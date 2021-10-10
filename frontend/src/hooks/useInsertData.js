import { useCallback, useEffect, useState } from "react";
import Axios from "axios";

const useInsertData = ({ expenseType, date, ammount, concept }) => {
  useEffect(() => {
    console.log("Loading...");

    // pasar id, date, ammount y concept (expense)
    const fetchData = async (expense, date, ammount, concept) => {
      try {
        const { data } = await Axios.post(
          `http://localhost:4000/expense`,
          {
            expense,
            date,
            ammount,
            concept,
          } // date, ammount, concept
        );
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData(expenseType, date, ammount, concept);
    // acá hay que pasar la data de InputForm
  }, []);
};

export default useInsertData;
