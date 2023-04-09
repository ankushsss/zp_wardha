import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import NavigationOption from "./Dashboard/NavigationOption";
import Table from "./Table";
import villageLogo from "../Village_logo.png"
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";

export default function Dashboard() {
  const [toggleSidebar, setToggleSidebar] = useState(false);
  const [toggleDropdown, setToggleDropdown] = useState(false);
  const navigate = useNavigate()
  const [cookies, setCookie, removeCookie] = useCookies(['token']);
  

  return (
    <article className="w-full h-screen overflow-hidden ">
      <div>
        <div className="flex h-screen " style={{ background: "#F4E3E9" }}>
          {/*  div dgn onCLick, biar bisa keluar dari toggle sidebar */}
          {/* @click="sidebarOpen = false" */}
          <div
            // className="sidebarOpen ? 'block' : 'hidden'"
            className={`fixed z-20 inset-0  opacity-50 transition-opacity lg:hidden ${
              toggleSidebar ? "block" : "hidden"
            }`}
            onClick={() => setToggleSidebar((prevState) => !prevState)}
          ></div>

          <div
            // className="sidebarOpen ? 'translate-x-0 ease-out' : '-translate-x-full ease-in'"
            className={`bg fixed z-30 inset-y-0 left-0 w-64  overflow-y-auto transition duration-300 transform lg:translate-x-0 lg:static lg:inset-0 ${
              toggleSidebar
                ? "translate-x-0 ease-out"
                : "-translate-x-full ease-in"
            }`}
          >
            <div className="flex flex-row items-center justify-center mt-8">
              <div className="flex items-center " style={{textAlign:"center"}}>
              <img src={villageLogo} style={{width:"50%",margin:"0 auto"}}/>
              </div>
            </div>

            <NavigationOption />
          </div>

          <div className="flex-1 flex flex-col overflow-hidden">
            <header className="flex justify-between items-center py-4 px-6 bg-white border-b-4 border-indigo-600">
              <div className="flex items-center">
                {/* burger toggle button */}
                <button
                  className="text-gray-500 focus:outline-none lg:hidden"
                  onClick={() => setToggleSidebar((prevState) => !prevState)}
                >
                  <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M4 6H20M4 12H20M4 18H11"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                </button>

                {/* search input */}
                <div className="relative mx-4 lg:mx-0">
                  <span className="absolute inset-y-0 left-0 pl-3 flex items-center">
                    <svg
                      className="h-5 w-5 text-gray-500"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                  </span>

                  <input
                    className="form-input w-32 sm:w-64 rounded-md pl-10 pr-4 focus:border-indigo-600"
                    type="text"
                    placeholder="Search"
                  />
                </div>
              </div>

              <div className="flex items-center">
                {/* dropdown */}
                <div className="relative">
                  {/* @click="dropdownOpen = ! dropdownOpen" */}
                  <button
                    className="relative block h-8 w-8 rounded-full overflow-hidden shadow focus:outline-none"
                    onClick={() => setToggleDropdown((prevState) => !prevState)}
                  >
                    <img
                      className="h-full w-full object-cover"
                      src="https://images.unsplash.com/photo-1528892952291-009c663ce843?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=296&amp;q=80"
                      alt="Your avatar"
                    />
                  </button>

                  {/* div dgn onCLick, biar bisa keluar dari dropdown profile  */}
                  {/* @click="dropdownOpen = false" */}
                  <div
                    className={`fixed inset-0 h-full w-full z-10 ${
                      toggleDropdown ? "" : "hidden"
                    }`}
                    onClick={() => setToggleDropdown((prevState) => !prevState)}
                  ></div>

                  <div
                    className={`absolute right-0 mt-2 w-48 bg-white rounded-md overflow-hidden shadow-xl z-10 ${
                      toggleDropdown ? "" : "hidden"
                    }`}
                  >
                    <a
                      href="/"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-600 hover:text-white"
                    >
                      Profile
                    </a>
                    <a
                      href="/"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-600 hover:text-white"
                    >
                      Products
                    </a>
                    <a
                      onClick={()=>{
                        removeCookie(["token"])
                        navigate("/")
                        window.location.reload()
                      }}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-600 hover:text-white"
                    >
                      Logout
                    </a>
                  </div>
                </div>
              </div>
            </header>

            {/* main content */}
            <main className="flex-1 overflow-x-hidden overflow-y-auto bg-white">
              <Outlet />
            </main>
          </div>
        </div>
      </div>
    </article>
  );
}
