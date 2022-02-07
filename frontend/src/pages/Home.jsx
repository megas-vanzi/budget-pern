import React from "react";
import Balance from "../components/Balance";
import LastTenList from "../components/LastTenList";

function Home() {
  return (
    <>
      <h1 align="center">Home</h1>

      <div className="ui padded text container segment">
        <Balance />

        <LastTenList query="LastTen" />

        <p>Shaping Budget App in React</p>
      </div>
    </>
  );
}

export default Home;
