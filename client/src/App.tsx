import "./App.css";
import Login from "./Login";
import Dashboard from "./Dashboard";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./firebase";

function App() {
  const [user] = useAuthState(auth);
  console.log(user);
  const renderPage = () => {
    if (user) {
      return <Dashboard></Dashboard>;
    } else if (!user) {
      return <Login></Login>;
    }
  };
  return <div className="App">{renderPage()}</div>;
}

export default App;
