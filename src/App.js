import './scss/app.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Nav from "./nav"
import Home from "./home"
import About from "./about"
import Login from "./login"
import Contact from "./contact"

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/login" component={Login} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
