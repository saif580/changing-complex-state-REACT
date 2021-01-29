import React from "react";

function App() {
  const [fname, setfName] = React.useState("");
  const [lname, setlName] = React.useState("");
  function changefName(e) {
    setfName(e.target.value);
  }
  function changelName(e) {
    setlName(e.target.value);
  }
  return (
    <div className="container">
      <h1>
        Hello {fname} {lname}
      </h1>
      <form>
        <input
          onChange={changefName}
          value={fname}
          name="fName"
          placeholder="First Name"
        />
        <input
          onChange={changelName}
          value={lname}
          name="lName"
          placeholder="Last Name"
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
