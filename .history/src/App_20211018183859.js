import { BrowserRouter } from "react-router-dom";
import "./App.css";
import { Home } from "./components/Home/Home";
import { MovieDetails } from "./components/MovieDetails/MovieDetails";
import { Page } from "./components/PageNotFound/Page";
import {BrowserRouter, Swi}

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/" exact components={Home} />
          <Route path="/moviedetails" exact components={MovieDetails} />
          <Route path="/page" components={Page} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
