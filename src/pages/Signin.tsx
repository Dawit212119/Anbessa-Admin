import React, { useState } from "react";
import { ArrowLeftIcon, X } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import ArrowLeft from "../util/arrowLeft";
import axios from "axios";
import toast from "react-hot-toast";
const apiUrl = "http://localhost:8000";
const token = localStorage.getItem("access_token");

const Signin = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState<string>("");

  // Handle form submission

  // const handleSubmit = async (e: React.FormEvent) => {
  //   try {
  //     if (formData.password.length < 4) {
  //       setError("Password must be greater than 4 characters.");
  //       return;
  //     }
  //     e.preventDefault();
  //     setError("");
  //     // const Response = await fetch("/route/signin", {
  //     //   method: "POST",
  //     //   headers: {
  //     //     "Content-Type": "application/json",
  //     //   },
  //     //   body: JSON.stringify({
  //     //     ...formData,
  //     //   }),
  //     // });
  //     const data = await Response.json();
  //   } catch (error) {
  //     setError("faild to login");
  //   }
  // };
  // const phoneNumberRegex = /^\+251\d{9}$/;
  // if (!phoneNumberRegex.test(formData.phoneNumber)) {
  //   setError("Phone number must be in the format +251XXXXXXXXX.");
  //   return;
  // }
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.password.length < 4) {
      setError("Password must be greater than 4 characters.");
      return;
    }
    try {
      const response = await axios.post(
        `${apiUrl}/api/token/`,
        {
          email: formData.email,
          password: formData.password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log(response);
      const { access, refresh } = response.data;

      localStorage.setItem("access_token", access);
      localStorage.setItem("refresh_token", refresh);
      console.log(access, refresh);
      console.log("Sign-in successful!");
      toast.success("Sign-in successful!");
      navigate("/Dashboard");
    } catch (err) {
      console.error(err);
      setError("Invalid username or password");
    }
  };

  return (
    <>
      <div className="max-w-lg mx-auto inset-0  bg-black  p-10 ">
        <div className="bg-gray-900 p-8 rounded-lg w-full max-w-md relative">
          <div className="flex justify-center mb-8 border-b border-gray-800 pb-4">
            <h2 className="text-lg font-semibold text-white">Login</h2>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Email
              </label>
              <input
                type="email"
                className="w-full bg-gray-800 rounded-lg px-4 py-2 text-white"
                placeholder="admin@gmail.com"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Password
              </label>
              <input
                type="password"
                className="w-full bg-gray-800 rounded-lg px-4 py-2 text-white"
                placeholder="Enter your password"
                value={formData.password}
                onChange={(e) =>
                  setFormData({ ...formData, password: e.target.value })
                }
              />
              <Link to="/password-reset" className="text-sm text-red-500 pt-3">
                {" "}
                <p>Forgot Password</p>{" "}
              </Link>{" "}
            </div>

            {error && <div className="text-red-500 text-sm">{error}</div>}

            <button
              type="submit"
              className="w-full bg-orange-500 text-white py-2 rounded-lg"
            >
              Login
            </button>
          </form>
          <p className="mt-5 text-white ">
            Don`t have an account?{" "}
            <span className="text-orange-800">
              <Link to="/signup">Sign Up</Link>
            </span>
          </p>
        </div>
      </div>
    </>
  );
};

export default Signin;
