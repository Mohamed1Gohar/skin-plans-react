import Home from "./pages/Home";
import GetUserPage from "./pages/GetUserPage";
import FinalResultPage from "./pages/FinalResultPage";

import { HashRouter as Router, Switch, Route } from "react-router-dom";

import { AppProvider } from "./context/GlobalContext";

function App() {
  return (
    <AppProvider>
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/assessment" exact component={GetUserPage} />
          <Route path="/results" exact component={FinalResultPage} />
        </Switch>
      </Router>
    </AppProvider>
  );
}

export default App;
