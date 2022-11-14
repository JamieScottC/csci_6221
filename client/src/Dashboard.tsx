import React, { useEffect, useState } from "react";
import { auth } from "./firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import "./Dashboard.css";

function Dashboard() {
  const [user, loading] = useAuthState(auth);
  useEffect(() => {
    if (loading) {
      return;
    }
  }, [user, loading]);
  return (
    <div className="dashboard">
      <div className="container">
        <span>Welcome, {user?.displayName}</span>
      </div>
    </div>
  );
}
export default Dashboard;
