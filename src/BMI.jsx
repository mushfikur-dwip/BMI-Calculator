import "./BMI.css";
import "bootstrap/dist/css/bootstrap.css";
import React, {useState} from "react";
// Put any other imports below so that CSS from your
// components takes precedence over default styles.
function BMI() {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmi, setBmi] = useState(0);
  const [msg, setMsg] = useState("");

  // Calculate BMI
  const calBMI = (e) => {
    e.preventDefault();
    if (!weight || !height || weight <= 0 || height <= 0) {
      setMsg(
      "Please Enter valid Weight and Height Values"
      );
    } else {
      let bmi = (weight / (height * height)) * 703;
      setBmi(bmi.toFixed(2));
      //Message

      if (bmi < 18.5) {
        setMsg("You are underweight");
      } else if (bmi >= 18.5 && bmi <= 24.9) {
        setMsg("You are in the optimum weight range");
      } else if (bmi >= 25 && bmi <= 29.9) {
        setMsg("You are overweight");
      } else if (bmi >= 30 && bmi <= 34.9) {
        setMsg("You are in Class I obesity");
      } else if (bmi >= 35 && bmi <= 39.9) {
        setMsg("You are in Class II obesity");
      } else if (bmi >= 40) {
        setMsg("You are in Class III obesity.");
      }
      else {
        setMsg("Please Enter the valid Weight and Height Value");
      }
    }
  }

  // Reset the value
  const reload = () => {
    setWeight(""); // Reset weight
    setHeight(""); // Reset height
    setBmi(0); // Reset BMI
    setMsg("");
  };
  return (
    <>
      <div className="app">
        <div className="container">
          <div className="heading">
            <h1>BMI Calculator</h1>
          </div>
          <form onSubmit={calBMI}>
            <div className="weight">
              <label htmlFor="">Weight (ibs)</label>
              <input
                type="number"
                value={weight}
                onChange={ (e)=> setWeight(e.target.value)}
                placeholder="Enter Wight Value"
              />
            </div>
            <div className="height">
              <label htmlFor="">Height (in)</label>
              <input
                type="number"
                value={height}
                onChange={(e) => setHeight(e.target.value)}
                placeholder="Enter Wight Value"
              />
            </div>
            <div className="buttons">
              <button className="submit_btn" type="submit">
                Submit
              </button>
              <button className="reload" type="button" onClick={reload}>
                Reset
              </button>
            </div>
          </form>
          <div className="msg">
            <span>
              Your BMI is <span className="bmi-point">{bmi} kg/m<sup>2</sup></span>
            </span>
            <span>
              <span className="bmi-msg">{msg}</span>
            </span>
            <span className="dev">
              <p>Made by <a target="blank" href="https://facebook.com/mushfikur.a.k">Mushfikur Rahman</a></p>
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default BMI;
