import React from "react";
import LastTenList from "./LastTenList";

function Home() {
  return (
    <div className="ui padded text container segment">
      <h1>Home</h1>
      <h3>Balance</h3>

      <LastTenList query="LastTen" />

      <p>Shaping Budget App in React</p>
    </div>
  );
}

export default Home;
