import { BrowserRouter, Route, Routes } from "react-router"
import Home from "./"
import Books from "./Books"
import Team from "../component/shared/Team"
import Contact from "../component/shared/Contact"
import Header from "../component/shared/Header"

function App() {
  return (
    <>
      <div className="container">
        <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="Books" element={<Books/>}></Route>
          <Route path="team" element={<Team/>} />
          <Route path="contact" element={<Contact/>} />
        </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}
export default App
