import "./App.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./components/Card";

const App = () => {
  const [mealsData, setMealsData] = useState([]);
  const [inputResult, setInputResult] = useState("");

  useEffect(() => {
    axios
      .get("https://www.themealdb.com/api/json/v1/1/search.php?s=" + inputResult)
      .then((res) => setMealsData(res.data.meals));
      // veux dire que le useEffect se rejouera lorsque la valeur de l'input changera
  }, [inputResult]);

  return (
    <div className="app-container">
      <h1>Welcome to the cooking App</h1>
      <input
        type="text"
        placeholder="Entrez le nom de votre aliment"
        onChange={(e) => setInputResult(e.target.value)}
      />
      <div className="meals-container">
        {mealsData.map((meal) => (
          <Card key={meal.idMeal} meal={meal} />
        ))}
      </div>
    </div>
  );
};

export default App;
