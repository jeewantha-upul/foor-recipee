import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import Axios from "axios";
import RecipeTile from "./RecipeTile";

function App() {
  const [query, setQuery] = useState("");
  const [recipes, setRecipes] = useState([]);
  const [healthLabel, setHealthLabel] = useState("vegan");

  // API ID and Key
  const YOUR_APP_ID = "8af20a67";
  const YOUR_APP_KEY = "1c1ac44957672692026e42e886860181";

  // API endpoint
  let url = `https://api.edamam.com/search?q=${query}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&health=${healthLabel}`;
  //API call
  const getData = async () => {
    let result = await Axios.get(url);
    setRecipes(result.data.hits);
    console.log(result.data.hits);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    getData();
  };
  return (
    <div className="app">
      <h1>Food Recipee </h1>

      {/* searching recipes */}
      <form action="" className="app__searchForm" onSubmit={submitHandler}>
        <input
          className="app__input"
          type="text"
          value={query}
          placeholder="Enter engredient"
          onChange={(e) => setQuery(e.target.value)}
        />
        <input className="app_submit" type="submit" value="search" />
      </form>

      <select className="app__healthLabels">
        <option onClick={() => setHealthLabel("vegan")}>Vegan</option>
        <option onClick={() => setHealthLabel("vegetarian")}>vegetarian</option>
        <option onClick={() => setHealthLabel("paleo")}>paleo</option>
        <option onClick={() => setHealthLabel("dairy-free")}>dairy-free</option>
        <option onClick={() => setHealthLabel("gluten-free")}>
          gluten-free
        </option>
        <option onClick={() => setHealthLabel("wheat-free")}>wheat-free</option>
        <option onClick={() => setHealthLabel("egg-free")}>egg-free</option>
        <option onClick={() => setHealthLabel("peanut-free")}>
          peanut-free
        </option>
      </select>

      {/* rendering recipes */}
      <div className="app__recipes">
        {recipes.map((recipe) => (
          <RecipeTile recipe={recipe} />
        ))}
      </div>
    </div>
  );
}

export default App;
