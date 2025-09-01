import React from "react";
import Gree from "./components/greeting";
import Hello from "./components/hello";
import UsestateComponent from "./components/UsestateComponent";

export default function App() {

  const name2 = "KR";
  const place = "palakkad";

  return (
    <div>
      <h1 style={{ color: "red" }}>react js</h1>

      <p>
        Lorem ipsum dolor sit amet consectetur aovident minus soluta est dig vident minus soluta est d
        
      </p>
      <Gree lastName={name2} place={place} />
      <p>
        Lorem ipsum dolor sit amet consectetuventore provident minus ris
        inventore provilibe
      </p>
      <Hello />
      <UsestateComponent />
    </div>
  );
}