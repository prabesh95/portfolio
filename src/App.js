import { About, Editor, Home } from "./pages";
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
        <Route path="/" element={<Home />}></Route>
        <Route path="/Home" element={<Home />}></Route>
        <Route path="/About" element={<About />}></Route>
        <Route path="/Editor" element={<Editor />}></Route>
      </Routes>
    </div>
  );
}

export default App;
