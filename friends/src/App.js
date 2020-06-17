import React from "react";
import "./App.css";
// start of my imports
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Login from "./components/Login";
import PrivateRoute from "./components/PrivateRoute";
import FriendsList from "./components/FriendsList";

function App() {
  const logout = () => {
    const token = window.localStorage.getItem("token");

    if (token) {
      window.localStorage.removeItem("token");
    }
  };
  return (
    <Router>
      <div className="App">
        <ul>
          <li>
            <Link to="/login"> Login </Link>
          </li>
          <li>
            <Link to="/" onClick={logout}> 
            Logout
            </Link>
          </li>
          <li>
            <Link to="/protected"> My Friends </Link>
          </li>
        </ul>
        <Switch>
          {/* protected Routes */}
          <PrivateRoute exact path="/protected" component={FriendsList} />
          <Route path="/login" component={Login} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
