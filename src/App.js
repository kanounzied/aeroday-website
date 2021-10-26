import "./App.css";
import "./styles/scss/App.scss"
import {lazy, Suspense} from 'react'
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Footer from "./components/Footer/";
import Navbar from "./components/Navbar/"
import Preloader from "./components/Preloader/Preloader"

const About = lazy(() => import("./pages/About"))

function App() {


    return (
        <Router>


            <Navbar/>
            <Switch>
                <Route exact path="/contact">
                    <Contact/>
                </Route>
                <Route exact path="/about">
                    <Suspense fallback={<Preloader/>}>
                        <About/>
                    </Suspense>
                </Route>
                <Route exact path="/:acId?" component={Home}/>
            </Switch>
            <Footer/>
        </Router>
    );
}

export default App;