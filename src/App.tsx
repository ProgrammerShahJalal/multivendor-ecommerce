import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Header from './components/Shared/Header';
import Footer from './components/Shared/Footer/Footer';
import Contact from './components/Contact/Contact';
import About from "./components/Pages/About/About";
import AuthProvider from "./context/AuthProvider";






function App() {

  return (
    <div>
      <AuthProvider>
        <Router>
          <Header />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/home' element={<Home />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/about' element={<About />} />


          </Routes>
          <Footer />
        </Router>
      </AuthProvider>

    </div>

  );
}

export default App;