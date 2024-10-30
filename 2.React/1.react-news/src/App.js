import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./routes/Home";
/* import Detail from "./routes/Detail"; */

function App() {
  return (
    <Router>
      <Switch>
        {/* <Route path="/detail/:id">
          <Detail />
        </Route> */}
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
/* 이 앱에선 디테일이 사용되지 않았다. */
