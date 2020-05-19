import React from "react";
import Register from "./components/register";
import Login from "./components/login";

import { Route } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <Link className="sign-btn" to="/">
        Sign Up
      </Link>
      <br />
      <Link className="login-btn" to="/login">
        Login
      </Link>
      <div className="App">
        <Route exact path="/" component={Register} />
        <Route path="/login" component={Login} />
      </div>
    </Router>
  );
}

export default App;
