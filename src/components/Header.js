import React from "react";
import { withRouter, NavLink } from "react-router-dom";
import { FirebaseContext } from "../firebase";
import { Loading } from "./../utils/Loading";

function Header() {
  const { user, firebase } = React.useContext(FirebaseContext);
  console.log(user);
  return (
    <div className="header">
      <div className="flex">
        <img src="/logo.png" alt="Hooks News Logo" className="logo" />
        <NavLink to="/" className="header-title">
          Hooks News
        </NavLink>
        <NavLink to="/" className="header-link">
          new
        </NavLink>
        <div className="divider">|</div>
        <NavLink className="header-link" to="/top">
          top
        </NavLink>
        <div className="divider">|</div>
        <NavLink className="header-link" to="search">
          search
        </NavLink>
        {user && (
          <>
            <div className="divider">|</div>

            <NavLink className="header-link" to="/create">
              submit
            </NavLink>
          </>
        )}
      </div>

      <div className="flex">
        {user ? (
          <>
            <div className="header-name">
              <i>{user.displayName}</i>
            </div>
            <div className="divider">|</div>
            <div className="header-button" onClick={() => firebase.logout()}>
              logout
            </div>
          </>
        ) : (
          <NavLink className="header-link" to="/login">
            login
          </NavLink>
        )}
        {/* {user !== null ? "LOG" : <Loading />} */}
      </div>
    </div>
  );
}

export default Header;
