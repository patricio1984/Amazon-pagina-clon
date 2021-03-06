import React, { useEffect } from 'react';
import './App.css';
import Checkout from "./components/checkout/Checkout";
import Header from "./components/header/Header";
import Home from "./components/homepage/Home";
import Login from "./components/login/Login";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { auth } from "./db/firebase";
import { useStateValue } from "./context/StateProvider";

function App() {

  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged(authUser => {


      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser
        })

      } else {
        dispatch({
          type: "SET_USER",
          user: null
        })
      }
    })
  }, [])
  
  return (
    <Router>
      <div className="app">
        <main>
          <Switch>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/checkout">
              <Header />
              <Checkout />
            </Route>
            <Route path="/">
              <Header />
              <Home />
            </Route>  
          </Switch>
        </main>
      </div>
    </Router>
  );
}

export default App;
