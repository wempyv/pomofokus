/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext } from "react";
import { SettingContext } from "../context/SettingContext";

const Main = () => {
  const {
    title,
    minutes,
    seconds,
    startTimer,
    stopTimer,
    isRunning,
  } = useContext(SettingContext);

  return (
    <div className="section-main text-center">
      <div className="section-timer">
        <span className="minutes">{minutes}</span>
        <span>:</span>
        <span className="seconds">{seconds}</span>
      </div>
      <div className="section-monitor">
        <span>{title}</span>
      </div>
      <div className="section-button-main">
        {!isRunning && (
          <button onClick={startTimer} className="button button-play">
            <i className="fa fa-play"></i> START
          </button>
        )}
        {isRunning && (
          <button onClick={stopTimer} className="button button-play">
            <i className="fa fa-stop"></i> STOP
          </button>
        )}
      </div>
    </div>
  );
};

export default Main;
