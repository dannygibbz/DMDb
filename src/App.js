import React from "react"
import NavTab from "./NavTab"
import Welcome from "./Welcome"
import MovieSearch from "./MovieSearch"
import PageThree from "./PageThree"
import TelevisionSearch from "./TelevisionSearch"
import { BrowserRouter as Router, Route } from "react-router-dom"
import "./App.css"

function App() {
  return (
    <Router>
      <div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <NavTab />
        </div>
        <div style={{ justifyContent: "center" }}>
          <Route path="/" exact render={() => <Welcome />} />
          <Route path="/movie" render={() => <MovieSearch />} />
          <Route path="/tv" render={() => <TelevisionSearch />} />
          <Route path="/three" render={() => <PageThree />} />
        </div>
      </div>
    </Router>
  )
}

export default App
