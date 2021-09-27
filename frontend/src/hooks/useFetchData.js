import { useCallback, useEffect, useState } from "react";

export const useFetchData = () => {
  const [expenses, setExpenses] = useState([]);
  const [input, setInput] = useState("");

  const peticion = useCallback(async () => {
    let route = `http://localhost:4000/expense/`;

    if (input !== "") {
      route = `http://localhost:4000/expense/?query=${encodeURI(input)}`;
    } // query to filter expense type

    const res = await fetch(route);

    const data = await res.json();

    if (data.results) {
      setExpenses(data.results);
    } else {
      setExpenses(data);
    }
  }, [input]);

  useEffect(() => {
    peticion();
  }, [peticion]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const text = e.target[0].value;

    setInput(text);
  };

  return [expenses, handleSubmit];
};
