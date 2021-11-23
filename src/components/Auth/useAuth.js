import React from "react";
import firebase from "../../firebase";

function useAuth() {
  const [authUser, setAuthUser] = React.useState(null);

  React.useEffect(() => {
    // onAuthStateChange is a listener
    const unsubscribe = firebase.auth.onAuthStateChanged((user) => {
      if (user) {
        setAuthUser(user);
      } else {
        setAuthUser(null);
      }
    });
    // Unsubscribe to the listener
    return () => unsubscribe();
  }, []);

  return authUser;
}

export default useAuth;
