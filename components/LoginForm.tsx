"use client";
import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";

const LoginForm = () => {
  const positions = ["justify-center", "justify-end", "justify-start"];
  const [randomNum, setRandomNum] = useState<number>(0);

  const handleMouseEnter = () => {
    setRandomNum((prevNum) => {
      let newNum;
      do {
        newNum = Math.floor(Math.random() * 3);
      } while (newNum === prevNum);
      return newNum;
    });
  };

  return (
    <div className="h-[400px] w-[400px] bg-white rounded-lg shadow-2xl flex items-center justify-center p-4">
      <form className="w-full">
        <h1 className="text-xl font-extrabold text-center mb-6">
          Welcome! Sign in here
        </h1>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="email"
          >
            Email
          </label>
          <input
            required
            id="email"
            type="email"
            placeholder="Enter your email"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="password"
          >
            Password
          </label>
          <input
            required
            id="password"
            type="password"
            placeholder="Enter your password"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <AnimatePresence>
          <motion.div className={`flex ${positions[randomNum]} w-full`}>
            <motion.button
              key={randomNum}
              className="bg-blue-500 w-40 h-10 font-bold rounded text-white"
              onMouseEnter={handleMouseEnter}
              onClick={handleMouseEnter}
            >
              Sign in
            </motion.button>
          </motion.div>
        </AnimatePresence>
      </form>
    </div>
  );
};

export default LoginForm;
