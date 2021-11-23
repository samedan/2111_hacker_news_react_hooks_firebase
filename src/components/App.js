import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Login from "./Auth/Login";
import ForgotPassword from "./Auth/ForgotPassword";
import CreateLink from "./Link/CreateLink";
import LinkList from "./Link/LinkList";
import SearchLinks from "./Link/SearchLinks";
import LinkDetail from "./Link/LinkDetail";
import Header from "./Header";
import useAuth from "./Auth/useAuth";
import firebase, { FirebaseContext } from "./../firebase";

function App() {
  // REACT CONTEXT to pass the AUTH Data
  const user = useAuth();

  return (
    <BrowserRouter>
      <FirebaseContext.Provider value={{ user, firebase }}>
        <div className="app-container">
          <Header />
          <div className="route-container">
            <Switch>
              <Route exact path="/" render={() => <Redirect to="/new/1" />} />
              <Route path="/create" component={CreateLink} />
              <Route path="/login" component={Login} />
              <Route path="/forgot" component={ForgotPassword} />
              <Route path="/search" component={SearchLinks} />
              <Route path="/top" component={CreateLink} />
              <Route path="/new/:page" component={LinkList} />
              <Route path="/link/:linkId" component={LinkDetail} />
            </Switch>
          </div>
        </div>
      </FirebaseContext.Provider>
    </BrowserRouter>
  );
}

export default App;
