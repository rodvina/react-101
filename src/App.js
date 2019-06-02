import React from "react";
// import logo from "./logo.svg";
import "./App.css";
import ContactCard from "./components/ContactCard";

function App() {
  return (
    <div>
      <ContactCard name="Bob O" phone="555-233-2343" email="bob@gmail.com" />
      <ContactCard name="Bob S" phone="775-233-6743" email="bobs@gmail.com" />
      <ContactCard
        name="Linda T"
        phone="555-243-2113"
        email="lindat@gmail.com"
      />
      <ContactCard
        name="Michael J"
        phone="324-233-2343"
        email="mj23@gmail.com"
      />
    </div>
  );
}

export default App;
