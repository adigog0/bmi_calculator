import React, { useState } from "react";
import "./UserForm.css";

const UserForm = (props) => {
  const [height, setEnteredHeight] = useState("");
  const [weight, setEnteredWeight] = useState("");
  const [enteredName, setEnteredName] = useState("");
  const [inf, setInfo] = useState("");

  const NameChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const HeightChangeHandler = (event) => {
    setEnteredHeight(event.target.value);
  };

  const WeightChangeHandler = (event) => {
    setEnteredWeight(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    let val = (
      [Number(weight) / Number(height) / Number(height)] * 10000
    ).toFixed(1);

    props.setBmiData(val);
    const initialData = props.initData;
    props.setInitData((prevState) => {
      return [...prevState, { label: enteredName, value: val }];
    });
    const labels = props.userData.labels;
    const data = props.userData.datasets[0].data;
    labels.push(enteredName);
    data.push(val);
    props.setUserData({
      labels: labels,
      datasets: [
        {
          label: "BMI calculated",
          data: data,
        },
      ],
    });

    // initialData.forEach((obj) => {
    //   if (obj.label === enteredName) {
    //     obj.value = val;
    //   }
    // });

    if (val < 18.5) {
      setInfo("Under Weight");
    } else if (val > 18.5 && val <= 24.9) {
      setInfo("Healthy");
    } else if (val > 24.9 && val < 30) {
      setInfo("Overweight");
    } else {
      setInfo("Obese");
    }
    setEnteredName("");
    setEnteredHeight("");
    setEnteredWeight("");
  };
  console.log(inf);
  return (
    <div className="userform">
      <form onSubmit={submitHandler}>
        <div className="data__controls">
          <div className="data__control">
            <label>Name</label>
            <input
              type="text"
              value={enteredName}
              onChange={NameChangeHandler}
            />
          </div>
          <div className="data__control">
            <label>Height</label>
            <input
              type="number"
              value={height}
              onChange={HeightChangeHandler}
              placeholder="height in cm"
            />
          </div>
          <div className="data__control">
            <label>Weight</label>
            <input
              type="number"
              value={weight}
              onChange={WeightChangeHandler}
              placeholder="Weight in kg"
            />
          </div>
          <div className="data__control">
            <label>BMI value</label>
            <input
              type="number"
              value={props.bmiData}
              placeholder="BMI value"
              disabled
            />
          </div>
          <div className="data__control">
            <label>Status</label>
            <input type="text" value={inf} placeholder="Status" disabled />
          </div>
        </div>
        <div className="data__actions">
          <button type="submit">Calculate</button>
        </div>
      </form>
    </div>
  );
};

export default UserForm;
