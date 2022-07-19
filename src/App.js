import React, { useState } from "react";
import UserChart from "./components/User/UserChart";
import UserForm from "./components/Form/UserForm";
import Grid from "@material-ui/core/Grid";
import "./App.css";
import BarChart from "./components/User/BarChart";

function App() {
  const [initData, setInitData] = useState([
    // { label: "Aditi", value: 0 },
    // { label: "Jojie", value: 0 },
    // { label: "Abhi", value: 0 },
    // { label: "Joy", value: 0 },
    // { label: "Joe", value: 0 },
    // { label: "Rani", value: 0 },
    // { label: "Ishu", value: 0 },
  ]);
  const [userData, setUserData] = useState({
    labels: [],
    datasets: [
      {
        label: "BMI calculated",
        data: [],
      },
    ],
  });

  const [bmiData, setBmiData] = useState(0);

  return (
    <Grid container className="root">
      <Grid item xs={12}>
        <h1 className="head"> BMI Calculator</h1>
      </Grid>
      <Grid container item direction="column">
        <Grid item xs={12} md={6}>
          <div className="items">
            <UserForm
              userData={userData}
              setUserData={setUserData}
              initData={initData}
              setInitData={setInitData}
              setBmiData={setBmiData}
              bmiData={bmiData}
            />
          </div>
        </Grid>
        <Grid item xs={12} md={6} className="chartresult">
          <div className="res">
            <div className="result">
              {/* <UserChart initData={initData} bmiData={bmiData} /> */}
              <BarChart userData={userData} />
            </div>
          </div>
        </Grid>
      </Grid>
    </Grid>
  );
}
export default App;
