import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from "react-redux";

import store from "./store";
/* import NavBar from "./components/NavBar";
import UsersList from "./components/UsersList";
import UsersDetail from "./components/usersDetail";
 */
import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          {/* <Route path="/" component={NavBar} />
          <Route exact path="/" component={UsersList} />
          <Route exact path="/users/:userLogin" component={UsersDetail} /> */}
        </div>
      </Router>
    </Provider>
  );
}

export default App;
