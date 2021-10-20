import { BrowserRouter as Router, NavLink } from "react-router-dom";
import MainRouter from "./Router";
import Navigation from "./components/navigation/Navigation";
import Footer from "./components/footer/Footer";

import "./App.css";

function App() {
  console.log(" tests are running");
  return (
    <div className="App">
      <Router>
        <header className="App-header">
          <Navigation />
          <NavLink to="/page/1">H!!Om!!E</NavLink>
        </header>

        <MainRouter />
      </Router>
      <Footer />
    </div>
  );
}

export default App;
