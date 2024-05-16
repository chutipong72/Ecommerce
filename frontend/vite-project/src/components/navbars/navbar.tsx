import React, { useContext, useState } from "react";
import logo from "../assets/logo.png";
import cartIcon from "../assets/cart_icon.png";
import { Link } from "react-router-dom";
import { ShopContext } from "../contexts/shopContext";
import "./navbar.css";

export const Navbar = () => {
  const [menu, setMenu] = useState("shop");
  const { getTotalCartItems } = useContext(ShopContext);

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="flex justify-between p-4 shadow-md shadow-black items-center xl:p-3 xl:px-10 lg:p-2 lg:px-5 md:p-1">
      <Link
        to="/"
        onClick={() => {
          setMenu("shop");
        }}
        className="flex items-center gap-2"
      >
        <img
          src={logo}
          alt="logo"
          className="w-[30px] h-[30px] md:h-[48px] md:w-[40px] lg:h-[48px] lg:w-[40px] xl:w-[40px] xl:h-[48px]"
        />
        <p to="/" className="text-black font-semibold text-base xl:text-lg">
          SHOPPALA
        </p>
      </Link>
      <button
        data-collapse-toggle="mobile-menu"
        type="button"
        className="md:hidden ml-3 text-gray-400 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-300 rounded-lg inline-flex items-center justify-center"
        aria-controls="mobile-menu-2"
        aria-expanded={isMobileMenuOpen}
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        <svg
          className="w-6 h-6"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
            clipRule="evenodd"
          ></path>
        </svg>
      </button>
      <div
        className={`md:block ${isMobileMenuOpen ? "" : "hidden"}`}
        id="mobile-menu"
      >
        <ul className="flex items-center justify-center sm:h-[80px] sm:w-full sm:top-[48px] sm:right-[0px] sm:bottom-[200px] sm:absolute sm:bg-white md:static list-none gap-[40px] text-gray-600 text-lg font-medium lg:gap-[100px] md:gap-[50px]">
          <li
            className={`flex flex-col items-center justify-center gap-2 cursor-pointer md:hover:bg-transparent md:border-0 pl-3 pr-4 py-2 md:hover:text-blue-700 md:p-0 ${
              menu === "shop" ? "text-blue-700" : ""
            }`}
            onClick={() => {
              setMenu("shop");
              setIsMobileMenuOpen(false);
            }}
          >
            <Link style={{ textDecoration: "none" }} to="/">
              Shop
            </Link>
            {menu === "shop" ? (
              <hr className="border-none w-4/5 h-1 rounded bg-red-500" />
            ) : (
              <></>
            )}
          </li>
          <li
            className={`flex flex-col items-center justify-center gap-2 cursor-pointer md:hover:bg-transparent md:border-0 pl-3 pr-4 py-2 md:hover:text-blue-700 md:p-0 ${
              menu === "men" ? "text-blue-700" : ""
            }`}
            onClick={() => {
              setMenu("men");
              setIsMobileMenuOpen(false);
            }}
          >
            <Link style={{ textDecoration: "none" }} to="/men">
              Men
            </Link>
            {menu === "men" ? (
              <hr className="border-none w-4/5 h-1 rounded bg-red-500" />
            ) : (
              <></>
            )}
          </li>
          <li
            className={`flex flex-col items-center justify-center gap-2 cursor-pointer md:hover:bg-transparent md:border-0 pl-3 pr-4 py-2 md:hover:text-blue-700 md:p-0 ${
              menu === "women" ? "text-blue-700" : ""
            }`}
            onClick={() => {
              setMenu("women");
              setIsMobileMenuOpen(false);
            }}
          >
            <Link style={{ textDecoration: "none" }} to="/women">
              Women
            </Link>
            {menu === "women" ? (
              <hr className="border-none w-4/5 h-1 rounded bg-red-500" />
            ) : (
              <></>
            )}
          </li>
          <li
            className={`flex flex-col items-center justify-center gap-2 cursor-pointer md:hover:bg-transparent md:border-0 pl-3 pr-4 py-2 md:hover:text-blue-700 md:p-0 ${
              menu === "kid" ? "text-blue-700" : ""
            }`}
            onClick={() => {
              setMenu("kid");
              setIsMobileMenuOpen(false);
            }}
          >
            <Link style={{ textDecoration: "none" }} to="/kid">
              Kid
            </Link>
            {menu === "kid" ? (
              <hr className="border-none w-4/5 h-1 rounded bg-red-500" />
            ) : (
              <></>
            )}
          </li>
        </ul>
      </div>
      <div className="flex items-center gap-4 xl:gap-3">
        {localStorage.getItem("auth-token") ? (
          <button
            onClick={() => {
              localStorage.removeItem("auth-token");
              window.location.replace("/");
            }}
            className="w-20 h-6 text-sm outline-none border-solid border-gray-400 border-2 rounded-full text-gray-600 xl:text-lg font-medium cursor-pointer bg-white xl:w-24 xl:h-8 lg:text-md lg:w-20 lg:h-6 md:text-sm md:w-16 md:h-6"
          >
            Logout
          </button>
        ) : (
          <Link to="/login">
            <button className="w-20 h-6 text-sm outline-none border-solid border-gray-400 border-2 rounded-full text-gray-600 xl:text-lg font-medium cursor-pointer bg-white xl:w-24 xl:h-8 lg:text-md lg:w-20 lg:h-6 md:text-sm md:w-16 md:h-6">
              Login
            </button>
          </Link>
        )}

        <Link to="/cart">
          <img src={cartIcon} alt="Cart Icon" className="w-8" />
        </Link>
        <div className="w-6 h-6 flex justify-center items-center mt-[-10px] ml-[-15px] border rounded-full text-sm text-white bg-red-500 xl:ml-[-12px] xl:text-xs lg:w-5 lg:h-5">
          {getTotalCartItems()}
        </div>
      </div>
    </div>
  );
};
