import React, { useEffect, useState } from "react";
import { auth } from "./firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import "./Dashboard.css";
import Modal from "react-modal";
import { PieChart } from "react-minimal-pie-chart";
function Dashboard() {
  const [user, loading] = useAuthState(auth);
  const [entertainment, setEntertainement] = useState(() => {
    const storage = parseInt(localStorage.getItem("entertainment") || "20");
    return storage;
  });
  const [income, setIncome] = useState(() => {
    const storage = parseInt(localStorage.getItem("income") || "20");
    return storage;
  });
  const [food, setFood] = useState(() => {
    const storage = parseInt(localStorage.getItem("food") || "20");
    return storage;
  });
  const [transportation, setTransportation] = useState(() => {
    const storage = parseInt(localStorage.getItem("transportation") || "20");
    return storage;
  });
  const [utilities, setUtilities] = useState(() => {
    const storage = parseInt(localStorage.getItem("utilities") || "20");
    return storage;
  });
  const [medical, setMedical] = useState(() => {
    const storage = parseInt(localStorage.getItem("medical") || "20");
    return storage;
  });
  const [housing, setHousing] = useState(() => {
    const storage = parseInt(localStorage.getItem("housing") || "20");
    return storage;
  });
  const [savings, setSavings] = useState(20);
  const [maxEntertainment, setMaxEntertainement] = useState(1000);
  const [maxFood, setMaxFood] = useState(1000);
  const [maxTransportation, setMaxTransportation] = useState(1000);
  const [maxUtilities, setMaxUtilities] = useState(1000);
  const [maxMedical, setMaxMedical] = useState(1000);
  const [maxHousing, setMaxHousing] = useState(1000);
  const [isOpen, setIsOpen] = useState(false);
  const modalStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      "background-color": "#1f2029",
      display: "flex",
      "flex-direction": "column",
      "justify-content": "center",
    },
  };
  useEffect(() => {
    if (loading) {
      return;
    }
  }, [user, loading]);
  useEffect(() => {
    setSavings(
      income -
        (entertainment + food + transportation + utilities + medical + housing)
    );
    localStorage.setItem("entertainment", JSON.stringify(entertainment));
    localStorage.setItem("food", JSON.stringify(food));
    localStorage.setItem("transportation", JSON.stringify(transportation));
    localStorage.setItem("utilities", JSON.stringify(utilities));
    localStorage.setItem("medical", JSON.stringify(medical));
    localStorage.setItem("housing", JSON.stringify(housing));
    localStorage.setItem("income", JSON.stringify(income));
  }, [
    entertainment,
    food,
    transportation,
    utilities,
    medical,
    housing,
    income,
  ]);
  //Modal.setAppElement("#app");
  return (
    <div className="dashboard">
      <Modal
        isOpen={isOpen}
        onRequestClose={() => setIsOpen(false)}
        style={modalStyles}
        contentLabel="Example Modal"
        overlayClassName={"Overlay"}
      >
        <h2 style={{ color: "white" }}>
          Enter your max spending in each category:
        </h2>
        <form className="modal-form">
          <label>
            Entertainment:
            <input
              value={maxEntertainment}
              onChange={(e) =>
                e.target.value === ""
                  ? setMaxEntertainement(0)
                  : setMaxEntertainement(parseInt(e.target.value))
              }
            ></input>
          </label>
          <label>
            Food/Groceries:
            <input
              value={maxFood}
              onChange={(e) =>
                e.target.value === ""
                  ? setMaxFood(0)
                  : setMaxFood(parseInt(e.target.value))
              }
            ></input>
          </label>
          <label>
            Transportation:
            <input
              value={maxTransportation}
              onChange={(e) =>
                e.target.value === ""
                  ? setMaxTransportation(0)
                  : setMaxTransportation(parseInt(e.target.value))
              }
            ></input>
          </label>
          <label>
            Utilities:
            <input
              value={maxUtilities}
              onChange={(e) =>
                e.target.value === ""
                  ? setMaxUtilities(0)
                  : setMaxUtilities(parseInt(e.target.value))
              }
            ></input>
          </label>
          <label>
            Medical:
            <input
              value={maxMedical}
              onChange={(e) =>
                e.target.value === ""
                  ? setMaxMedical(0)
                  : setMaxMedical(parseInt(e.target.value))
              }
            ></input>
          </label>
          <label>
            Housing:
            <input
              value={maxHousing}
              onChange={(e) =>
                e.target.value === ""
                  ? setMaxHousing(0)
                  : setMaxHousing(parseInt(e.target.value))
              }
            ></input>
          </label>
        </form>
      </Modal>
      <span className="savings-text">Total Savings Per Month: ${savings}</span>
      {savings < 0 && <h2 className="spending-text">You are overspending!</h2>}
      <button className="savings-button" onClick={() => setIsOpen(true)}>
        Plan Your Savings
      </button>
      <label>
        Income Per Month{" "}
        <input
          className="savings-input"
          value={income}
          onChange={(e) =>
            e.target.value === ""
              ? setIncome(0)
              : setIncome(parseInt(e.target.value))
          }
        ></input>
      </label>
      <div className="container">
        <PieChart
          style={{ height: "50%", width: "100%" }}
          label={({ dataEntry }) =>
            "$" + dataEntry.value + "  " + dataEntry.title
          }
          animate
          labelStyle={{
            fill: "white",
            opacity: 0.75,
            pointerEvents: "none",
            fontSize: 2,
          }}
          radius={15}
          labelPosition={110}
          data={[
            { title: "Entertainment", value: entertainment, color: "#E38627" },
            { title: "Food", value: food, color: "#6A2135" },
            { title: "Transportation", value: transportation, color: "blue" },
            { title: "Utilities", value: utilities, color: "yellow" },
            { title: "Medical", value: medical, color: "cyan" },
            { title: "Housing", value: food, color: "black" },
          ]}
        />
        <form className="cat-form">
          <label>
            Entertainment:
            <input
              className={entertainment > maxEntertainment ? "red-border" : ""}
              value={entertainment}
              onChange={(e) =>
                e.target.value === ""
                  ? setEntertainement(0)
                  : setEntertainement(parseInt(e.target.value))
              }
            ></input>
          </label>
          <label>
            Food/Groceries:
            <input
              className={food > maxFood ? "red-border" : ""}
              value={food}
              onChange={(e) =>
                e.target.value === ""
                  ? setFood(0)
                  : setFood(parseInt(e.target.value))
              }
            ></input>
          </label>
          <label>
            Transportation:
            <input
              className={transportation > maxTransportation ? "red-border" : ""}
              value={transportation}
              onChange={(e) =>
                e.target.value === ""
                  ? setTransportation(0)
                  : setTransportation(parseInt(e.target.value))
              }
            ></input>
          </label>
          <label>
            Utilities:
            <input
              className={utilities > maxUtilities ? "red-border" : ""}
              value={utilities}
              onChange={(e) =>
                e.target.value === ""
                  ? setUtilities(0)
                  : setUtilities(parseInt(e.target.value))
              }
            ></input>
          </label>
          <label>
            Medical:
            <input
              className={medical > maxMedical ? "red-border" : ""}
              value={medical}
              onChange={(e) =>
                e.target.value === ""
                  ? setMedical(0)
                  : setMedical(parseInt(e.target.value))
              }
            ></input>
          </label>
          <label>
            Housing:
            <input
              className={housing > maxHousing ? "red-border" : ""}
              value={housing}
              onChange={(e) =>
                e.target.value === ""
                  ? setHousing(0)
                  : setHousing(parseInt(e.target.value))
              }
            ></input>
          </label>
        </form>
      </div>
    </div>
  );
}
export default Dashboard;
