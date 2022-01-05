import React from "react";
import NavBar from "./Navbar";
import { Link } from "react-router-dom";

export default function LandingPage(props) {
  return (
    <div className="container">
      <NavBar />
      <div className="right-sidebar"></div>
      <div className="content">
        <div className="left-content">
          <div className="left">
            <h2>Food</h2>
            <h3>
              Discover Healthy
              <br></br>& Delicious Food
            </h3>
          </div>
          <form>
            <input
              type="number"
              placeholder="Calories (e.g. 2000)"
              onChange={props.handleChange}
            />
            <Link className="btn_link" to="/MealList">
              <button onClick={props.getMealData}>Get Daily Meal Plan</button>
            </Link>
          </form>
        </div>
        <div className="right">
          <img src={require("./img/veg.png")} className="veg" alt="veg" />
          <img src={require("./img/fd.png")} className="plate" alt="plate" />
        </div>
      </div>
    </div>
  );
}
