import logo from "./logo.svg";
import "./App.css";
import "./key";

function App() {
  let url =
    "https://api.edamam.com/search?q=chicken&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&from=0&to=3&calories=591-722&health=alcohol-free";

  return (
    <div className="App">
      <h1>hello world</h1>
    </div>
  );
}

export default App;
