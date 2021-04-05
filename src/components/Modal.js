/* eslint-disable default-case */
import React, { useState, useContext } from "react";
import { SettingContext } from "../context/SettingContext";

const Modal = () => {
  const [newTimer, setNewTimer] = useState({
    work: 25,
    short: 5,
    long: 15,
    active: "work",
  });

  const { updateExecute, setOpenModal, openModal } = useContext(SettingContext);

  const handleClick = () => {
    setOpenModal(true);
  };

  const handleChange = (input) => {
    const { name, value } = input.target;
    switch (name) {
      case "work":
        setNewTimer({
          ...newTimer,
          work: parseInt(value),
        });
        break;
      case "shortBreak":
        setNewTimer({
          ...newTimer,
          short: parseInt(value),
        });
        break;
      case "longBreak":
        setNewTimer({
          ...newTimer,
          long: parseInt(value),
        });
        break;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateExecute(newTimer);
    handleClick();
  };

  return (
    <div
      className="modal fade"
      id="exampleModalCenter"
      tabIndex="-1"
      role="dialog"
      aria-labelledby="exampleModalCenterTitle"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content">
          <form onSubmit={handleSubmit}>
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLongTitle">
                Settings
              </h5>
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <div className="timer-setting">
                <div className="title-setting">
                  <h3>TIME (MINUTES)</h3>
                </div>
                <div className="form-setting">
                  <div className="row">
                    <div className="col">
                      <div className="input-form">
                        <label>pomodoro</label>
                        <input
                          type="number"
                          autocomplete="off"
                          name="work"
                          onChange={handleChange}
                          value={newTimer.work}
                          min="1"
                          required
                        />
                      </div>
                    </div>
                    <div className="col">
                      <div className="input-form">
                        <label>short break</label>
                        <input
                          autocomplete="off"
                          type="number"
                          name="shortBreak"
                          onChange={handleChange}
                          value={newTimer.short}
                          min="1"
                          required
                        />
                      </div>
                    </div>
                    <div className="col">
                      <div className="input-form">
                        <label>long break</label>
                        <input
                          type="number"
                          name="longBreak"
                          autocomplete="off"
                          onChange={handleChange}
                          value={newTimer.long}
                          min="1"
                          required
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              {openModal && (
                <span className="m-auto">Enjoy your time &#128076;</span>
              )}
              {!openModal && (
                <button type="submit" className="btn btn-success">
                  Apply
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Modal;
