import React, { useContext } from "react";
import { SettingContext } from "../context/SettingContext";
const Navigasi = () => {
  const { executing, setExecuting, setCheckTimer, stopTimer } = useContext(
    SettingContext
  );

  const handleClick = (e) => {
    const changeExecuting = { ...executing, active: e.target.value };
    setExecuting(changeExecuting);
    setCheckTimer(false);
    stopTimer();
  };

  return (
    <div className="section-header">
      <h1>Pomofokus</h1>
      <div className="section-button">
        <button
          className={
            executing.active === "work" ? "button button-active" : "button"
          }
          value="work"
          onClick={handleClick}
        >
          pomodoro
        </button>
        <button
          className={
            executing.active === "short" ? "button button-active" : "button"
          }
          value="short"
          onClick={handleClick}
        >
          short break
        </button>
        <button
          className={
            executing.active === "long" ? "button button-active" : "button"
          }
          value="long"
          onClick={handleClick}
        >
          long break
        </button>
      </div>
    </div>
  );
};

export default Navigasi;
