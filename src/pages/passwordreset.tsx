import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const PasswordResetRequest: React.FC = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await axios.post(
        "/api/password-reset/",
        { email },
        {
          headers: { "Content-Type": "application/json" },
        }
      );
      console.log("Response:", response);
      toast.success("Password reset link has been sent to your email!");
      setEmail(""); // Clear the email field
    } catch (err) {
      console.error("Error:", err);
      toast.error("Failed to send password reset email. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-lg mx-auto inset-0  bg-black  p-10 ">
      <div className="   bg-gray-900 p-8 rounded-lg w-full max-w-md relative">
        <h2 className="text-lg font-semibold text-white mb-3">
          Request Password Reset
        </h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-3">
              Email:
            </label>
            <input
              type="email"
              value={email}
              className="w-full bg-gray-800 rounded-lg px-4 py-2 text-white mb-3"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <button
            className="w-full bg-orange-500 text-white py-2 rounded-lg mt-4"
            type="submit"
            disabled={loading}
          >
            {loading ? "Sending..." : "Send Reset Link"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default PasswordResetRequest;
