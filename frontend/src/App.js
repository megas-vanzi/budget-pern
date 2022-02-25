import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Abm from "./pages/Abm";
import Ingresos from "./pages/Ingresos";
import Egresos from "./pages/Egresos";
// Redux
import { Provider } from "react-redux";
import store from "./redux/store";
import LoginForm from "./components/forms/LoginForm";
import RegisterForm from "./components/forms/RegisterForm";

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={LoginForm} />
            <Route exact path="/register" component={RegisterForm} />
            <Route path="/abm" component={Abm} />
            <Route path="/ingresos" component={Ingresos} />
            <Route path="/egresos" component={Egresos} />
          </Switch>
        </div>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
