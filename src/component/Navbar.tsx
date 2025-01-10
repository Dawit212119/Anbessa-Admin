import React from "react";
import { useSelector } from "react-redux";

export default function Navbar() {
  // const { currentUser } = useSelector((state) => state.user || {});
  return (
    <div className="flex items-center mx-auto gap-2">
      <img src="src/img/Logo.png" className="w-20 h-20" />
      <p className="font-bold text-[90px] mx-w-[30px] mt-7 pb-6 text-white">
        Anbessa <span className="text-orange-500">Bus </span>
      </p>
    </div>
  );
}
