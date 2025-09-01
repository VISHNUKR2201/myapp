import React, { useState } from "react";

export default function UsestateComponent() {
  const [count, setCount] = useState(100);
  const [name, setname] = useState("USER ID");
  const [loggedin, setLoggedin] = useState(false);
  
  console.log(loggedin);

  console.log(name);

  return (
    <div>
      
      <h2>Count :{count}</h2>
      <button onClick={() => setCount(count + 1)}>INCREMENT</button>
      <br></br>
      <br />
      <button onClick={() => setCount(count - 1)}>DECRIMENT</button>
      <br></br>
      <br />
      <button onClick={() => setCount(0)}>RESET</button>
      <br></br>
      <br />
      
      <input
        type="text"
        value={name}
        placeholder="name"
        onChange={(e) => setname(e.target.value)}
      />

      
      {loggedin ? <h2>welcome back</h2> : <h2> please login.</h2>}
      <button onClick={() => setLoggedin(!loggedin)}>
        {loggedin ? <>sign out</> : <>sign in</>}
      </button>
    </div>
  );
}