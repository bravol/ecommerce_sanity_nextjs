// import React from "react";

import { AiOutlineShopping } from "react-icons/ai";

import Cart from "./Cart";
import { useStateContext } from "../context/StateContext";

import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { GoLocation } from "react-icons/go";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useSession, signIn, signOut } from "next-auth/react";

import Link from "next/link";

const Navbar = () => {
  const { data: session } = useSession();
  const { showCart, setShowCart, totalQuantities } = useStateContext();

  return (
    // <div className="navbar-container">
    //   <p className="logo">
    //     <Link href="/">MUMU APP</Link>
    //   </p>

    <nav className="header">
      <Link href="/">
        <img className="header-logo" src="mumu1.png" alt="logo_image" />
      </Link>
      <div className="header-options" style={{ marginRight: "-10px" }}>
        <GoLocation style={{ color: "white" }} />
      </div>
      <div className="header-option">
        <span className="header-option1">Hello</span>
        <span className="header-option2">Select your Address</span>
      </div>
      <div className="search">
        <select>
          <option>All</option>
        </select>
        <input type="text" className="searchInput" />
        <FaSearch className="searchIcon" />
      </div>
      <div className="header-nav">
        <Link href="/login" className="header-link">
          <div className="header-option">
            <span className="header-option2">Sign In</span>
          </div>
        </Link>
        <Link href="/register" className="header-link">
          <div className="header-option">
            {/* <span className="header-option1">Hello Guest</span> */}
            <span className="header-option2">Register</span>
          </div>
        </Link>

        <button
          type="button"
          className="cart-icon"
          onClick={() => setShowCart(true)}
        >
          <AiOutlineShopping />
          <span className="cart-item-qty">{totalQuantities}</span>
        </button>

        {showCart && <Cart />}
      </div>
    </nav>
  );
};

export default Navbar;
