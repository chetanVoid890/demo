import { Switch, Route, Redirect } from "react-router-dom";
import Home from "./pages/Home";
import ExpenseList from './pages/Expense/ExpenseList';
import ExpenseReport from './pages/ExpenseReport';
import Income from './pages/Income';
import IncomeReport from './pages/IncomeReport';
import Client from "./pages/ClientForm";
import Profile from "./pages/Profile";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import Main from "./components/layout/Main";
import "antd/dist/antd.css";
import "./assets/styles/main.css";
import "./assets/styles/responsive.css";
import "./assets/styles/custom.css";
function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/sign-up" exact component={SignUp} />
        <Route path="/sign-in" exact component={SignIn} />
        <Main>
          <Route exact path="/dashboard" component={Home} />
          <Route exact path="/expenselist" component={ExpenseList} />
          <Route exact path="/expensereport" component={ExpenseReport} />
          <Route exact path="/income" component={Income} />
          <Route exact path="/incomereport" component={IncomeReport} />
          <Route exact path="/client" component={Client} />
          <Route exact path="/profile" component={Profile} />
          <Redirect from="*" to="/dashboard" />
        </Main>
      </Switch>
    </div>
  );
}

export default App;
