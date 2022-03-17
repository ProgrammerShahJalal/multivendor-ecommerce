import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import BlogDetails from "./components/Blogs/BlogDetails/BlogDetails";
import Checkout from './components/Checkout/Checkout';
import Contact from './components/Contact/Contact';
import Home from "./components/Home/Home";
import NotFound from './components/NotFound/NotFound';
import OrderTracking from './components/OrderTracking/OrderTracking';
import About from "./components/Pages/About/About";
import Login from "./components/Pages/LoginPage/Login";
import Register from "./components/Pages/RegisterPage/Register";
import Team from './components/Pages/Team/Team';
import PrivateRoute from "./components/Route/PrivateRoute/PrivateRoute";
import Footer from './components/Shared/Footer/Footer';
import Header from './components/Shared/Header';
import Shop from "./components/Shop/Shop";
import SpecialDeal from "./components/SpecialDeal/SpecialDeal";
import Success from "./components/Success";
import UserProfile from './components/UserProfile/UserProfile';
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
            <Route path='/specialDeal' element={<SpecialDeal />} />
            <Route path='/team' element={<Team />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/orderTrack' element={<OrderTracking />} />
            <Route path='/checkout' element={<Checkout />} />
            <Route path='/shop' element={<Shop />} />
            <Route path='/profile' element={<PrivateRoute><UserProfile /></PrivateRoute>} />
            <Route path='/success' element={<PrivateRoute><Success /></PrivateRoute>} />
            <Route path='/blogs/details/:id' element={<PrivateRoute><BlogDetails /></PrivateRoute>} />
            <Route path='*' element={<NotFound />} />
          </Routes>
          <Footer />
        </Router>
      </AuthProvider>

      

    </div>

  );
}

export default App;