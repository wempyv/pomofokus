import React from "react";
import Navigasi from "./components/Navigasi";
import Main from "./components/Main";
import Setting from "./components/Setting";
import Modal from "./components/Modal";
function App() {
  return (
    <div className="container">
      <Navigasi />
      <Main />
      <Setting />
      <Modal />
    </div>
  );
}

export default App;
