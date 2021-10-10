import React, { useEffect, useState } from "react";
import Axios from "axios";
import { numberFormat } from "../helpers/numberFormat";

const Balance = () => {
  const [expenseIn, setExpenseIn] = useState([]);
  const [expenseOut, setExpenseOut] = useState([]);
  const [balance, setBalance] = useState(0);

  useEffect(() => {
    (async () => {
      const { data } = await Axios.get(`http://localhost:4000/expenseIn`);

      if (data.results) {
        setExpenseIn(data.results);
      } else {
        setExpenseIn(data);
      }
    })();
  }, [expenseIn]);

  useEffect(() => {
    (async () => {
      const { data } = await Axios.get(`http://localhost:4000/expenseOut`);

      if (data.results) {
        setExpenseOut(data.results);
      } else {
        setExpenseOut(data);
      }
    })();
  }, [expenseOut]);

  useEffect(() => {
    let resultado = 0;

    let sumaIn = expenseIn.map((e) => +e.amount);
    let sumaOut = expenseOut.map((e) => +e.amount);

    for (let i = 0; i < sumaIn.length; i++) {
      resultado += sumaIn[i];
    }

    for (let i = 0; i < sumaOut.length; i++) {
      resultado -= sumaOut[i];
    }

    setBalance(resultado);
  }, [expenseOut]);

  return <h2 align="center">Balance: {numberFormat(balance)}</h2>;
};

export default Balance;
