import { BrowserRouter as Router } from "react-router-dom";
/* import Home from "../src/components/home/Home"; */
import "./App.css";
/* import PokeDetails from "./components/P-cardDetails/PokeDetails"; */
import MainRouter from "./Router";

function App() {
  console.log(" tests are running");
  return (
    <div className="App">
      {/*    <header className="App-header">
      </header> */}

      <Router>
        <MainRouter />
      </Router>
    </div>
  );
}

export default App;
