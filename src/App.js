import React, { useState } from "react";
import "./App.css";
import CustomModal from "./components/CustomModal";

function App() {
  const [toggleModal, setToggleModal] = useState(false);
  return (
    <div>
      <button
        onClick={() => setToggleModal(!toggleModal)}
        className="bg-[#7b7be4]"
      >
        Open
      </button>
      <CustomModal btnToggle={toggleModal} />
    </div>
  );
}
export default App;
