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

      <main className="max-w-[1440px] mx-auto px-4 md:px-8 py-8">
        <section className="w-full flex flex-col items-center justify-center text-center pb-8 pt-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gray-100 text-blue-600 text-xs font-semibold uppercase tracking-wider mb-4 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse"></span>
            Global Operations Members Active
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-[#1f2937] tracking-tight">
            Team Directory
          </h1>
          <p className="text-lg text-gray-500 mt-2 max-w-xl">
            Connecting you with our global network of innovators, directors, and
            cross-functional teams.
          </p>

          <div className="w-full max-w-3xl mt-8 flex flex-col gap-4">
            <div className="relative w-full shadow-sm rounded-xl overflow-hidden bg-white border border-gray-200">
              <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-[20px] pointer-events-none">
                search
              </span>
              <input
                className="w-full pl-11 pr-24 py-3 bg-white text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/25 transition-all"
                placeholder="Filter by name, username, email, or company..."
                type="text"
              />
              <div className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-semibold text-gray-500 px-2 py-1 rounded bg-gray-100">
                of
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-2">
              {users.map((u) => (
                <button className="px-4 py-1.5 rounded-full text-sm font-medium transition-all shadow-sm bg-white text-gray-500 hover:text-blue-600 hover:bg-gray-50 border border-gray-200">
                  {u.username}
                </button>
              ))}
            </div>
          </div>
        </section>

        <section className="w-full">
          {count > 0 ? (
            users.map((u) => (
              <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-3 gap-6">
                <article className="user-card flex flex-col bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-200 overflow-hidden border border-gray-100">
                  {/* Header */}
                  <div className="bg-gradient-to-r from-blue-50 to-indigo-50/60 p-5 flex items-center justify-between">
                    <div className="flex items-center gap-3.5">
                      <div className="w-12 h-12 rounded-full bg-[#2563eb] text-white flex items-center justify-center font-bold text-lg shadow-sm flex-shrink-0">
                        user initials
                      </div>
                      <div className="flex flex-col min-w-0">
                        <span className="text-[#1f2937] font-bold text-lg leading-tight truncate">
                          {u.name}
                        </span>
                        <span className="text-[#2563eb] font-medium text-sm mt-0.5 truncate">
                          {u.username}
                        </span>
                      </div>
                    </div>
                    <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-blue-100/70 text-[#2563eb] whitespace-nowrap ml-2">
                      user dept
                    </span>
                  </div>

                  <div className="p-5 space-y-3.5 flex-1 flex flex-col justify-between">
                    <div className="space-y-3">
                      <div>
                        <span className="text-[11px] font-semibold tracking-wider text-gray-500 uppercase flex items-center gap-1.5">
                          <span>📧</span> EMAIL
                        </span>
                        <p className="text-sm font-medium text-gray-800 break-all mt-0.5">
                          {u.email}
                        </p>
                      </div>
                      <div>
                        <span className="text-[11px] font-semibold tracking-wider text-gray-500 uppercase flex items-center gap-1.5">
                          <span>📞</span> PHONE
                        </span>
                        <p className="text-sm font-medium text-gray-800 break-all mt-0.5">
                          {u.phone}
                        </p>
                      </div>
                      <div>
                        <span className="text-[11px] font-semibold tracking-wider text-gray-500 uppercase flex items-center gap-1.5">
                          <span>🌐</span> WEBSITE
                        </span>
                        <p className="mt-0.5">
                          <a
                            className="text-sm font-medium text-[#2563eb] hover:underline break-all"
                            href={`https://${u.website}`}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {u.website}
                          </a>
                        </p>
                      </div>
                    </div>

                    <div>
                      <hr className="border-gray-200 my-3" />
                      <div className="space-y-3">
                        <div>
                          <span className="text-[11px] font-semibold tracking-wider text-gray-500 uppercase flex items-center gap-1.5">
                            <span>📍</span> ADDRESS
                          </span>
                          <p className="text-sm font-medium text-gray-800 mt-0.5 leading-snug">
                            {u.address.city}
                          </p>
                        </div>
                        <div>
                          <span className="text-[11px] font-semibold tracking-wider text-gray-500 uppercase flex items-center gap-1.5">
                            <span>🏢</span> COMPANY
                          </span>
                          <p className="text-[#1f2937] font-bold text-sm mt-0.5">
                            {u.company.name}
                          </p>
                          <span className="inline-block mt-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-600">
                            {u.company.bs}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              </div>
            ))
          ) : (
            <p>
              <div className="w-full flex flex-col items-center justify-center p-12 text-center bg-white rounded-xl shadow-sm border border-gray-100 mt-4">
                <div className="w-16 h-16 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 mb-4">
                  <span className="material-symbols-outlined text-[32px]">
                    person_search
                  </span>
                </div>
                <h3 className="text-xl font-bold text-[#1f2937]">
                  No personnel found
                </h3>
                <p className="text-gray-500 max-w-sm mt-1">
                  We couldn't find anyone matching your current search query or
                  filter selection.
                </p>
                <button className="mt-4 px-4 py-2 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition-colors">
                  Clear all filters
                </button>
              </div>
            </p>
          )}
          ;
        </section>
      </main>

      <footer className="w-full bg-white border-t border-gray-100 mt-12">
        <div className="max-w-[1440px] mx-auto px-4 md:px-8 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-xs text-gray-500">
            <span>Nexus Corp © 2025</span>
            <span>•</span>
            <span>Internal Organization Infrastructure</span>
          </div>
          <div className="flex items-center gap-6 text-xs text-gray-500">
            <a href="#" className="hover:text-blue-600 transition-colors">
              Security & Compliance
            </a>
            <a href="#" className="hover:text-blue-600 transition-colors">
              Directory API
            </a>
            <a href="#" className="hover:text-blue-600 transition-colors">
              Help Center
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
