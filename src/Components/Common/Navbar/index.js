import React from "react";
import NavbarMobile from "./NavbarMobile";
import NavbarDesktop from "./NavbarDesktop";
import useCheckSize from "../../Hooks/useCheckSize";

function Navbar() {
  const size = useCheckSize();
  return size < 786 ? <NavbarMobile /> : <NavbarDesktop />;
}

export default Navbar;
