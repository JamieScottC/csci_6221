import React, { useEffect, useState } from "react";
import { auth, signInWithGoogle, signInWithGithub } from "./firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import "./Login.css";

function Login() {
  const [user, loading] = useAuthState(auth);
  const [errorText, setErrorText] = useState("");
  useEffect(() => {
    if (loading) {
      return;
    }
  }, [user, loading]);
  const signIn = async (platform: string): Promise<void> => {
    if (platform === "google") {
      try {
        return await signInWithGoogle();
      } catch (err: any) {
        setErrorText(err.message);
      }
    } else {
      try {
        return await signInWithGithub();
      } catch (err: any) {
        setErrorText(err.message);
      }
    }
  };
  return (
    <div className="login">
      <div className="container-login">
        <button
          className="google_button"
          onClick={() => {
            signIn("google");
          }}
        >
          Login with Google
        </button>
        <button
          className="github_button"
          onClick={() => {
            signIn("github");
          }}
        >
          Login with Github
        </button>
        <span className="warning_text">{errorText}</span>
      </div>
    </div>
  );
}
export default Login;
