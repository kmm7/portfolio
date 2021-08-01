import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { ToastContainer } from "react-toastify";

import NavBar from "./pages/NavBar";
import Home from "./pages/Home";
import Contacts from "./pages/Contacts";
import Fun from "./pages/Fun";
import history from "./utils/history";

export default function App() {
  return (
    <div className="App">
    <ToastContainer/>
    <Router history={history}>
        <header>
            <NavBar/>
        </header>
        <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/havefun" exact component={Fun}/>
            <Route path="/contacts" component={Contacts}/>
        </Switch>
    </Router>
</div>
  );
}
