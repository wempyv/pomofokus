import React, { useContext } from "react";
import { SettingContext } from "../context/SettingContext";

const Setting = () => {
  const { setOpenModal } = useContext(SettingContext);
  const handleClick = () => {
    setOpenModal(false);
  };
  return (
    <div className="section-option">
      <button
        onClick={handleClick}
        data-toggle="modal"
        data-target="#exampleModalCenter"
      >
        <i className="fa fa-cog"></i>
      </button>
    </div>
  );
};

export default Setting;
