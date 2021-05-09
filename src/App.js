import "./App.css";
import "./styles/scss/App.scss"

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar/Navbar"


function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/contact">
          <Contact />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
