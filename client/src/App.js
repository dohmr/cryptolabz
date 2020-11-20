import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./components/HomePage";
import LoginPage from "./components/LoginPage";
import SignupPage from "./components/SignupPage";
import Navbar from "./components/NavBar/Navbar";
import Footer from "./components/Footer";
import ProtectedPortfolioPage from "./components/ProtectedPortfolioPage";
import { ProvideAuth } from "./util/authContext";
import ProtectedRoute from "./components/ProtectedRoute";
import CoinsPage from "./components/CoinsPage";

function App() {
  return (
    <ProvideAuth>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="/coins">
            <CoinsPage />
          </Route>
          <Route path="/login">
            <LoginPage />
          </Route>
          <Route path="/signup">
            <SignupPage />
          </Route>
          <ProtectedRoute path="/protected/portfolio">
            <ProtectedPortfolioPage />
          </ProtectedRoute>
        </Switch>
        <Footer />
      </Router>
    </ProvideAuth>
  );
}

export default App;
