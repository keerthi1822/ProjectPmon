import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "../src/components/home/Home";
import "./App.css";

function App() {
  console.log(" tests are running");
  return (
    <div className="App">
      {/*    <header className="App-header">
      </header> */}

      <Router>
        <Switch>
          <Route path="/" component={Home} exact />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
