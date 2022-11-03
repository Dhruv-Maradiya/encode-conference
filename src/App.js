import Contact from "./Components/Contact"
import FirstPage from "./Pages/FirstPage"
import React from "react"
import {Routes, Route, HashRouter, Switch} from "react-router-dom"
import CommingSoon from "./Components/CommingSoon"
import Committee from "./Components/Committee"
import Theme from "./Components/Theme"
function App() {
  return (
    <HashRouter>
      <Routes>
        <Route exact path="/" element={<FirstPage />} />
        <Route exact path="/committee" element={<Committee />} />
        <Route exact path="/themes" element={<Theme />} />
        <Route exact path="/commingsoon" element={<CommingSoon />} />
        <Route exact path="/contact" element={<Contact />} />
      </Routes>
    </HashRouter>
  )
}

export default App
