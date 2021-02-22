import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import "./App.css";
import MainPage from "./Components/MainPage/MainPage";
import AboutMe from "./Components/AboutMe/AboutMe";
import Projects from "./Components/Projects/Projects";
import Header from "./Components/MainPage/Header";
import Contact from "./Components/Contact/Contact";
import { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Header />
          <Switch>
            <div className="outside-header">
              <Route path="/" component={MainPage} exact={true} />
              <Route path="/projects" component={Projects} exact={true} />
              <Route path="/aboutme" component={AboutMe} exact={true} />
              <Route path="/contact" component={Contact} exact={true} />
            </div>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
