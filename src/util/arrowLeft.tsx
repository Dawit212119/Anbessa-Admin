import { ArrowLeftIcon, ArrowLeftRightIcon } from "lucide-react";
import { BrowserRouter, useNavigate } from "react-router-dom";

export default function ArrowLeft() {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate(-1)}
      className="flex items-center text-white cursor-pointer"
    >
      <ArrowLeftIcon />
    </div>
  );
}
