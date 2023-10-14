import { About, Editor } from "./pages";
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
        <Route path="/About" element={<About />}></Route>
        <Route path="/Editor" element={<Editor />}></Route>
      </Routes>
    </div>
  );
}

export default App;
