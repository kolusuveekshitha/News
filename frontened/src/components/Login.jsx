import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");

  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post("http://localhost:3000/auth/login", {
        email,
        password,
      });

      setMsg(data.message);
      localStorage.setItem("userInfo", JSON.stringify(data));

      setTimeout(() => navigate("/news"), 1000);
    } catch (err) {
      setMsg(err.response?.data?.message || "Error occurred");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-100 to-gray-300 dark:from-gray-900 dark:to-gray-800">
      <div className="w-full max-w-md bg-white dark:bg-gray-900 rounded-2xl shadow-2xl p-8">
        {/* Heading */}
        <h1 className="text-3xl font-extrabold text-center text-gray-900 dark:text-gray-100 mb-3">
          Real-time News Application
        </h1>
        <p className="text-center text-gray-600 dark:text-gray-400 mb-6">
          Please login to continue
        </p>

        {/* Form */}
        <form className="flex flex-col gap-4" onSubmit={submitHandler}>
          <div>
            <label className="block text-gray-700 dark:text-gray-300 text-sm mb-1">
              Email
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-primaryRed transition"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 dark:text-gray-300 text-sm mb-1">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-primaryRed transition"
              required
            />
          </div>

          <button
            type="submit"
            className="bg-primaryRed text-white py-3 rounded-lg font-semibold hover:bg-red-700 cursor-pointer transition duration-200 shadow-md hover:shadow-lg"
          >
            Login
          </button>
        </form>

        {/* Message */}
        {msg && (
          <p className="mt-4 text-center text-sm font-medium text-primaryRed">
            {msg}
          </p>
        )}

        {/* Register Link */}
        <p className="mt-6 text-center text-gray-700 dark:text-gray-300">
          Don’t have an account?{" "}
          <Link
            to="/register"
            className="text-primaryRed font-semibold hover:underline"
          >
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
