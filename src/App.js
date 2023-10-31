import { About, Editor, Home, Work, Login, Skills, Contacts } from "./pages";
import { Route, Routes } from "react-router-dom";
import { Navbar } from "./components";

// firebase
//uuid
//react-router-dom
function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path="portfolio/" element={<Home />}></Route>
        <Route path="/Home" element={<Home />}></Route>
        <Route path="/About" element={<About />}></Route>
        <Route path="/Work" element={<Work />}></Route>
        <Route path="/Skills" element={<Skills />}></Route>
        <Route path="/Contacts" element={<Contacts />}></Route>
        <Route path="/Editor" element={<Editor />}></Route>
        <Route path="/Login" element={<Login />}></Route>
      </Routes>
    </div>
  );
}

export default App;
