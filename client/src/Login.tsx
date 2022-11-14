import React, { useEffect } from "react";
import { auth, signInWithGoogle, signInWithGithub } from "./firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import "./Login.css";

function Login() {
  const [user, loading] = useAuthState(auth);
  useEffect(() => {
    if (loading) {
      return;
    }
  }, [user, loading]);
  return (
    <div className="login">
      <div className="container">
        <button className="google_button" onClick={signInWithGoogle}>
          Login with Google
        </button>
        <button className="github_button" onClick={signInWithGithub}>
          Login with Github
        </button>
      </div>
    </div>
  );
}
export default Login;
