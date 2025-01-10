import React, { useEffect, useState } from "react";
import { useLoaderData, useLocation } from "react-router-dom";
import Select from "react-select";
import axios from "axios";
import toast from "react-hot-toast";
import { duration } from "@mui/material";
const apiUrl = "http://localhost:8000";
interface AddRouteProps {
  Routename?: string;
}
const options = [
  { value: "4 killo-mexico", label: "4 killo-mexico" },
  { value: "mexico-bethel", label: "mexico-bethel" },
  { value: "22-cmc", label: "22-cmc" },
  { value: "ayat-atobstera", label: "ayat-atobstera" },
];

//   handle submit

const AddRoute: React.FC<AddRouteProps> = ({ Routename }) => {
  const [selectedOption, setSelectedOption] = useState({
    value: "",
    label: "",
  });
  const [error, setError] = useState("");
  const [coordinate, setCoordinates] = useState({
    lat: 0,
    long: 0,
  });
  const [bus, setbus] = useState();
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        setCoordinates({
          lat: position.coords.latitude,
          long: position.coords.longitude,
        });
      }),
        (err) => {
          setError("Location access denied or unavailable.");
          console.error(err);
        };
    }
  });
  useEffect(() => {
    if (Routename) {
      const route = options.find((option) => option.value === Routename);
      setSelectedOption(route || { value: "", label: "" });
    }
  }, [Routename]);
  const handleBusNumber = (e) => {
    setbus(e.target.value);
  };
  const token = localStorage.getItem("access_token");
  if (!token) {
    console.error("Token not found");
    return;
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(bus);
    const path1 = selectedOption.value.split("-");

    ///   add route and bus number.
    try {
      const res = await axios.post(
        `${apiUrl}/api/routes/`,
        {
          start_location: path1[0],
          end_location: path1[1],
          distance: 10,
          duration: 3,
          bus_stops: path1[1],
          bus_number: bus,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (res) {
        alert("add successfull");
      }
      console.log(res);
      toast.success("Application accepted");
    } catch (error) {
      setError("error");
    }

    console.log("submit");
  };
  const handleChange = (option) => {
    setSelectedOption(option);
    console.log("Selected option:", option);
  };
  return (
    <div className="flex flex-col">
      <div className="space-y-4">
        <div>
          <div
            style={{ width: "300px", margin: "20px auto" }}
            className=" text-black  p-10"
          >
            <Select
              options={options}
              value={selectedOption}
              onChange={handleChange}
              isSearchable={true} // Enables search functionality
              placeholder="Select a route..."
            />
          </div>

          <div>
            <label className="block text-sm font-bold mb-2">Bus Number</label>
            <input
              type="number"
              placeholder="Enter destination"
              value={bus}
              onChange={handleBusNumber}
              className="w-full bg-gray-800 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>
        </div>
        <button
          onClick={handleSubmit}
          className="w-full bg-orange-500 hover:bg-orange-600 text-white py-2 rounded-lg font-semibold"
        >
          Add Route
        </button>
      </div>
      <div className="w-full  mt-8 md:mt-0">
        {" "}
        {/* Set width to full */}
        <h3 className="text-3xl font-semibold text-gray-700 mb-4 p-5">
          Your Location
        </h3>
        <iframe
          src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.8365724670785!2d${coordinate.long}!3d${coordinate.lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164bcb59a44f27e9%3A0x4b66ffb9399b750!2sYour%20Location!5e0!3m2!1sen!2sus!4v1632868717050`}
          width="300"
          height="500"
          loading="lazy"
          className="w-full mx-auto p-5 "
        ></iframe>
      </div>
    </div>
  );
};

export default AddRoute;
