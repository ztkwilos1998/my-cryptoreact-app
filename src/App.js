import "./App.css";
import Sidebar from "./components/Sidebar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Overview from "./pages/Overview";
import Team from "./pages/Team";
import Browse from "./pages/Browse";
import PriceTracker from "./pages/PriceTracker";

function App() {
  return (
    <Router>
      <Sidebar />
      <Switch>
        <Route path="/overview" exact component={Overview} />
        <Route path="/browse" exact component={Browse} />
        <Route path="/overview/prices" exact component={PriceTracker} />
      </Switch>
    </Router>
  );
}

export default App;
