import React, { useState, useEffect } from "react";

export default function NexusDirectory() {
  const [users, setUser] = useState([]);
  const [error, setError] = useState(null);
  const [count, setCount] = useState(0);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        setUser(data);
        setCount(data.length);
      })
      .catch((err) => {
        setError(err.message);
      });
  }, []);

  return (
    <div>
      <header className="sticky top-0 w-full z-50 bg-white/90 backdrop-blur-xl shadow-sm h-16 flex items-center px-6 justify-between">
        <div className="flex items-center gap-3 text-[#004ac6]">
          <div className="w-9 h-9 rounded-lg bg-blue-100 flex items-center justify-center">
            <span className="material-symbols-outlined text-[20px]">hub</span>
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-sm leading-none text-gray-900">
              Nexus Corp
            </span>
            <span className="text-[10px] text-gray-500 uppercase tracking-wider mt-0.5">
              Enterprise OS
            </span>
          </div>
        </div>
        <div className="flex-1 max-w-md hidden md:block ml-8">
          <div className="relative flex items-center">
            <span className="material-symbols-outlined absolute left-3 text-gray-400 text-[20px]">
              search
            </span>
            <input
              className="w-full pl-10 pr-16 py-2 bg-gray-50 rounded-lg text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
              placeholder="Search employees, teams, skillsets..."
              type="text"
            />
            <div className="absolute right-2.5 px-1.5 py-0.5 rounded bg-gray-200 text-gray-500 text-[10px] font-bold tracking-wide">
              ⌘K
            </div>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <button className="w-9 h-9 rounded-lg bg-gray-50 flex items-center justify-center text-gray-500 hover:text-gray-900 transition-colors">
            <span className="material-symbols-outlined text-[20px]">
              notifications
            </span>
          </button>
          <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white">
            <span className="material-symbols-outlined text-[18px]">
              person
            </span>
          </div>
        </div>
      </header>
    </div>
  );
}
