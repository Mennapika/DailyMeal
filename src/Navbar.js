import { Link } from "react-router-dom";
import React from "react";
export default function NavBar() {
  return (
    <nav>
      <Link to="/" className="logo">
        Eat Smart
      </Link>
    </nav>
  );
}
