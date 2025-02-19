import React from "react";
import { IconType } from "react-icons";
interface ActionBtnProps {
  icon: IconType;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
}

const Actionbtn: React.FC<ActionBtnProps> = ({
  icon: Icon,
  onClick,
  disabled,
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`flex items-center justify-center rounded w-[40px] h-[30px] text-slate-700 border-slate-400 border cursor-pointer ${
        disabled && "opacity-50 cursor-not-allowed"
      }`}
    >
      {" "}
      <Icon size={18} />{" "}
    </button>
  );
};
export default Actionbtn;
