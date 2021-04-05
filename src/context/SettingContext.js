/* eslint-disable default-case */
/* eslint-disable no-unused-vars */
import React, { useState, createContext, useRef, useEffect } from "react";
export const SettingContext = createContext();

function padTime(time) {
  return time.toString().padStart(2, "0");
}

function SettingContextProvider(props) {
  const [title, setTitle] = useState("Time for work!");
  const [executing, setExecuting] = useState({
    work: 25,
    short: 5,
    long: 15,
    active: "work",
  });
  const [timeLeft, setTimeLeft] = useState(executing.work * 60);
  const [isRunning, setIsRunning] = useState(false);
  const [checkTimer, setCheckTimer] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  let intervalRef = useRef(null);

  useEffect(() => {
    if (checkTimer) {
      return null;
    } else {
      setStart();
    }
  });

  function setStart() {
    switch (executing.active) {
      case "work":
        setTimeLeft(executing.work * 60);
        break;
      case "short":
        setTimeLeft(executing.short * 60);
        break;
      case "long":
        setTimeLeft(executing.long * 60);
        break;
    }
  }

  function startTimer() {
    setCheckTimer(true);
    if (intervalRef.current !== null) return;

    setTitle(`You're doing greet`);
    setIsRunning(true);
    intervalRef.current = setInterval(() => {
      setTimeLeft((timeLeft) => {
        if (timeLeft >= 1) {
          return timeLeft - 1;
        }
        // reset the timer
        resetTimer();
        if (timeLeft < 1) {
          playAlarm();
        }
        return 0;
      });
    }, 1000);
  }

  function stopTimer() {
    if (intervalRef.current === null) return;
    clearInterval(intervalRef.current);
    intervalRef.current = null;
    setTitle("Keep it up!");
    setIsRunning(false);
  }

  function resetTimer() {
    setIsRunning(false);
    clearInterval(intervalRef.current);
    intervalRef.current = null;
    setTitle("ready for the next round?");
    updateActive();
    setTimeLeft(executing.work * 60);
  }

  const minutes = padTime(Math.floor(timeLeft / 60));
  const seconds = padTime(timeLeft - minutes * 60);

  const updateExecute = (updatedSettings) => {
    setExecuting(updatedSettings);
    stopTimer();
    setCheckTimer(false);
  };

  const updateActive = () => {
    const changeExecuting = { ...executing, active: "work" };
    setExecuting(changeExecuting);
  };

  const playAlarm = () => {
    const audioEl = document.getElementsByClassName("audio-element")[0];
    audioEl.play();
  };

  return (
    <SettingContext.Provider
      value={{
        title,
        setTitle,
        timeLeft,
        setTimeLeft,
        isRunning,
        setIsRunning,
        startTimer,
        stopTimer,
        seconds,
        minutes,
        executing,
        updateExecute,
        setCheckTimer,
        setExecuting,
        resetTimer,
        openModal,
        setOpenModal,
      }}
    >
      {props.children}
      <div>
        <audio className="audio-element">
          <source src="https://assets.coderrocketfuel.com/pomodoro-times-up.mp3"></source>
        </audio>
      </div>
    </SettingContext.Provider>
  );
}

export default SettingContextProvider;
