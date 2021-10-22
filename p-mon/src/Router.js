import { Switch, Route } from "react-router-dom";
import { Redirect } from "react-router";
import PokeDetails from "./components/P-cardDetails/PokeDetails";
import Home from "../src/components/home/Home";
import SelectSearch from "./components/searchComponent/SelectSearch";

const MainRouter = () => {
  return (
    <>
      <Switch>
        <Route exact path="/" component={() => <Redirect to="/page/0" />} />
        <Route exact path={"/page/:page"} component={Home} />
        <Route exact path="/sort" component={Home} />
        <Route path="/pokemon/:name" component={PokeDetails} />
        <Route path="/search/:searchby/:searchtext" component={SelectSearch} />
      </Switch>
    </>
  );
};

export default MainRouter;
