import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Navigation from "./components/Shared/Navigation/Navigation";

function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />

      </Routes>
    </Router>
  );
}

export default App;