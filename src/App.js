import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "pages/Home";
import Test from "pages/Test";
import Create from "pages/Create";
import NotFound from "pages/NotFound";
import ProductDetails from "pages/ProductDetails";
import Navbar from "components/Layout/Navbar";
import Sidebar from "components/Layout/Sidebar";
import Burger from "components/Burger";
import Menu from "components/Menu";

//  npx json-server --watch src/data/db.json --port 8000

function App() {
  return (
    <Router>
      <div className="App">
        <Burger />
        <Menu />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>

            <Route exact path="/test">
              <Test />
            </Route>
            <Route path="/create">
              <Create />
            </Route>
            <Route path="/products/:id">
              <ProductDetails />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
