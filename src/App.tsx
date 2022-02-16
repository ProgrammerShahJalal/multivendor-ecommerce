import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Header from './components/Shared/Header';
import Footer from './components/Shared/Footer/Footer';
import Contact from './components/Contact/Contact';
import About from "./components/Pages/About/About";
import AuthProvider from "./context/AuthProvider";
import Register from "./components/Pages/RegisterPage/Register";
import Login from "./components/Pages/LoginPage/Login";
import NotFound from './components/NotFound/NotFound';
import Team from './components/Pages/Team/Team';





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
            <Route path='/team' element={<Team />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
          <Footer />
        </Router>
      </AuthProvider>

    </div>

  );
}

export default App;