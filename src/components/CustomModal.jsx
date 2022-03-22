import React from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";

function CustomModal({ btnToggle }) {
  return (
    <div>
      {btnToggle && (
        <div className="modalBackground bg-[#000] fixed top-0 right-0 w-full">
          <div className="modalContainer w-[60%]">
            <button className="btnClose">
              <AiOutlineCloseCircle />
            </button>
            <div className="modalTitle">
              <h2>Header</h2>
            </div>
            <div className="modalBody">
              <p>Body</p>
            </div>
            <div className="modalFooter">
              <div>
                <button>Cancel</button> <button>Sign in</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default CustomModal;
