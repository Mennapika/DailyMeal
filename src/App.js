import "./styles.css";

import React, { useState } from "react";
import LandingPage from "./LandingPage";
import { Switch, Route } from "react-router-dom";
import MealList from "./MealList";

function App() {
  const [mealData, setMealData] = useState(null);
  const [calories, setCalories] = useState(2000);
  function getMealData() {
    fetch(
      `https://api.spoonacular.com/mealplanner/generate?apiKey=cb1c464d94f142c08b156c5beddade8b&timeFrame=day&targetCalories=${calories}`
    )
      .then((response) => response.json())
      .then((data) => {
        setMealData(data);
        <Route path="/MealList">
          <MealList mealData={mealData} />
        </Route>;
      })
      .catch(() => {
        console.log("error");
      });
  }
  function handleChange(e) {
    setCalories(e.target.value);
  }
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <LandingPage
            mealData={mealData}
            handleChange={handleChange}
            getMealData={getMealData}
          />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
