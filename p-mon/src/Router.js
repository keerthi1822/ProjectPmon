import { Switch, Route } from "react-router-dom";
import PokeDetails from "./components/P-cardDetails/PokeDetails";
import Home from "../src/components/home/Home";
import SelectSearch from "./components/searchComponent/SelectSearch";

const MainRouter = () => {
  return (
    <>
      <Switch>
        <Route exact path={["/", "/page/:page"]}>
          {/*   <Route exact path="/page/:pageNo"> */}
          <Home />
        </Route>

        <Route path="/pokemon/:name" component={PokeDetails} />
        <Route path="/search/:searchby/:searchtext" component={SelectSearch} />
      </Switch>
    </>
  );
};

export default MainRouter;
