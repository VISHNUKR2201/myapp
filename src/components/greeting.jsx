import React from "react";
import "./greeting.css";

export default function Greeting({ lastName, place }) {
  const name = "VISHNU";
  
  return (
    <>
      <div className="good">Good Night ....</div>
      <h1>
        Staff: {name} {lastName} {place}
      </h1>
    </>
  );
}