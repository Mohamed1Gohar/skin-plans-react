import Home from "./pages/Home";
import GetUserPage from "./pages/GetUserPage";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { AppProvider } from "./context/GlobalContext";

function App() {
  return (
    <AppProvider>
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/assessment" exact component={GetUserPage} />

          {/* <Route path="/about">
          <About />
          </Route>
          <Route path="/users">
          <Users />
        </Route> */}
        </Switch>
      </Router>
    </AppProvider>
  );
}

export default App;
