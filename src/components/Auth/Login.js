import React from "react";
import { Link } from "react-router-dom";
import useFormValidation from "./useFormValidation";
import validateLogin from "./validateLogin";
// import firebase from "../../firebase";
import firebase from "./../../firebase/firebase";

const INITIAL_STATE = {
  name: "",
  email: "",
  password: "",
};

function Login(props) {
  const {
    handleChange,
    handleSubmit,
    values,
    handleBlur,
    errors,
    isSubmmitting,
  } = useFormValidation(INITIAL_STATE, validateLogin, authenticateUser);
  const [login, setLogin] = React.useState(true);
  const [firebaseError, setFirebaseError] = React.useState(null);

  async function authenticateUser() {
    const { name, email, password } = values;
    try {
      login
        ? await firebase.login(email, password)
        : await firebase.register(name, email, password);

      props.history.push("/");
    } catch (error) {
      console.error("Authentication error", error);
      setFirebaseError(error.message);
    }
  }

  return (
    <div className="">
      <h2 className="mv3">{login ? "Login" : "Create Account"}</h2>
      <form onSubmit={handleSubmit} className="flex flex-column">
        {/* Name */}
        {!login && (
          <input
            name="name"
            onChange={handleChange}
            value={values.name}
            type="text"
            placeholder="Your Name"
            autoComplete="off"
          />
        )}

        {/* Email */}
        <input
          onBlur={handleBlur}
          name="email"
          value={values.email}
          className={errors.email && "error-input"}
          onChange={handleChange}
          type="text"
          placeholder="Your email"
          autoComplete="off"
        />
        {errors.email && <p className="error-text">{errors.email}</p>}

        {/* Password */}
        <input
          value={values.password}
          onBlur={handleBlur}
          className={errors.password && "error-input"}
          name="password"
          onChange={handleChange}
          type="password"
          placeholder="Choose a secure password"
          autoComplete="off"
        />
        {errors.password && <p className="error-text">{errors.password}</p>}

        {/* Firebase error */}
        {firebaseError && <p className="error-text">{firebaseError}</p>}

        {/* Buttons */}
        <div className="flex mt3">
          <button
            className="button pointer mr2"
            type="submit"
            disabled={isSubmmitting}
            style={{ background: isSubmmitting ? "grey" : "orange" }}
          >
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
      <div className="forgot-password">
        <Link to="/forgot">Forgot password?</Link>
      </div>
    </div>
  );
}

export default Login;
