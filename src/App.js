import React from "react";
import { Route,BrowserRouter,Switch } from "react-router-dom";

import './App.css';


import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import Header from "./components/header/header.component";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";

function App() {
  return (
      <BrowserRouter>
          <Header/>
          <div>
              <Switch>
                  <Route exact={true} path="/" component={HomePage} />
                  <Route path="/shop" component={ShopPage}/>
                  <Route path="/signIn" component={SignInAndSignUpPage}/>
              </Switch>
          </div>
      </BrowserRouter>
  );
}

export default App;
