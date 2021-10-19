import { Switch, Route, NavLink } from "react-router-dom";
import PokeDetails from "./components/P-cardDetails/PokeDetails";
import Home from "../src/components/home/Home";

const MainRouter = () => {
  return (
    <>
      <NavLink to="/">navLink check</NavLink>
      <Switch>
        <Route exact path={["/", "/page/:page"]}>
          {/*   <Route exact path="/page/:pageNo"> */}
          <Home />
        </Route>

        <Route path="/pokemon/:name" component={PokeDetails} />
      </Switch>
    </>
  );
};

export default MainRouter;
