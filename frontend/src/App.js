import "./App.css";
import Expense from "./components/Expense";
import FormControl from "./components/FormControl";

function App() {
  return (
    <div className="App">
      <FormControl />
      <Expense />
      <header className="App-header">
        <p>Starting Budget App in React</p>
      </header>
    </div>
  );
}

export default App;
