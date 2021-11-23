import React from "react";

function Login(props) {
  const [login, setLogin] = React.useState(true);
  return (
    <div className="">
      <h2 className="mv3">{login ? "Login" : "Create Account"}</h2>
      <form className="flex flex-column">
        {!login && (
          <input type="text" placeholder="Your Name" autocomplete="off" />
        )}

        <input type="text" placeholder="Your email" autocomplete="off" />
        <input
          type="password"
          placeholder="Choose a secure password"
          autocomplete="off"
        />
        <div className="flex mt3">
          <button className="button pointer mr2" type="submit">
            Submit
          </button>
          <button
            type="button"
            className="pointer button"
            // Updater Pattern
            // previous value of state
            onClick={() => setLogin((prevLogin) => !prevLogin)}
          >
            {login ? "Need to create an account?" : "Already have an account"}
          </button>
        </div>
      </form>
    </div>
  );
}

export default Login;
