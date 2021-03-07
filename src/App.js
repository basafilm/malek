import Header from "./Components/Header/Header";
import Home from "./Components/Home";
import About from "./Components/About";
import Web from "./Components/Web";
import Movie from "./Components/Movie";
import { Contact } from "./Components/Contact";
import { Skills } from "./Components/Skills";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <div class="container bg-dark text-white">
      <Header className="header" />
      <div className="nav">
        <a
          class="btn btn-primary"
          data-toggle="collapse"
          href="#about"
          role="button"
          aria-expanded="false"
          aria-controls="collapseExample"
        >
          About
        </a>
        <a
          class="btn btn-primary"
          href="#web"
          role="button"
          aria-expanded="false"
          aria-controls="collapseExample"
        >
          Web
        </a>
        <a
          class="btn btn-primary"
          href="#movie"
          role="button"
          aria-expanded="false"
          aria-controls="collapseExample"
        >
          Movie
        </a>
      </div>

      <Home className="home" />
      <Skills />
      <div id="about">
        <About className="about" />
      </div>

      <div id="web">
        <Web className="web" />
      </div>

      <div id="movie">
        {" "}
        <Movie className="movie" />
      </div>

      <div>
        <Contact />
      </div>
    </div>
  );
}

export default App;
