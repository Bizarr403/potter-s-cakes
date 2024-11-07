import React from "react";
import Links from "./navlinks";
import Logo from "./logo";
import Action from "./action";
import "../App.css";
function Nav() {
  return (
    <header>
      <nav className="navbar">
        <Logo />
        <Links href="/home" name="Cupcakes" />
        <Links href="/home" name="Cookies" />
        <Links href="/home" name="Recipes" />
        <Links href="/home" name="Contact Us" />
        <Action class="slink" Text="Shop Now" />
      </nav>
    </header>
  );
}

export default Nav;
