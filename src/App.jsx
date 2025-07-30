import { Fragment, useState } from "react";
import "./App.css";

const App = () => {
  const [name, setName] = useState("my131");
  const [job, setJob] = useState("Programmer");
  setName;
  return (
    <>
      <div className="card">
        <img src="./avatar.webp" alt="avatar"></img>
        <h2>{name}</h2>
        <h2>{job}</h2>
      </div>
    </>
  );
};

export default App;
