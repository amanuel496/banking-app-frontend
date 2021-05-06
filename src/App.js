import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Provider} from 'react-redux';
 import { Route, BrowserRouter, Switch } from "react-router-dom";
import Login from './components/login'
import Signup from "./components/signup";
import Menu from "./components/menu";
import store from "./stores/store";
import ProtectedRoute from "./ProtectedRoute";
import CreateAccount from "./components/createAccount";
import ViewAccounts from "./components/view-all-accounts"


function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <BrowserRouter>
          <Switch>
            <Route path="/login" component={Login} />
            <Route exact path="/signup" render={() => <Signup />} />
            <ProtectedRoute exact="true" path="/menu" component={Menu} />
            <ProtectedRoute
              // exact="true"
              path="/creatAccount"
              component={CreateAccount}
            />

            <ProtectedRoute
              // exact="true"
              path="/viewaccounts"
              component={ViewAccounts}
            />
            <ProtectedRoute component={CreateAccount} />
            {/* <ProtectedRoute component={ViewAccounts} /> */}
          </Switch>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
