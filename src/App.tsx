import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Header from './components/Shared/Header';
import Footer from './components/Shared/Footer/Footer';
import Contact from './components/Contact/Contact.js';
import About from "./components/Pages/About/About";
import AuthProvider from "./context/AuthProvider";
import Register from "./components/Pages/RegisterPage/Register";
import Login from "./components/Pages/LoginPage/Login";
import NotFound from './components/NotFound/NotFound';
import Team from './components/Pages/Team/Team';
import Shop from "./components/Shop/Shop";
import PrivateRoute from "./components/Route/PrivateRoute/PrivateRoute";
import UserProfile from './components/UserProfile/UserProfile';
import OrderTracking from './components/OrderTracking/OrderTracking';
import Checkout from './components/Checkout/Checkout';
import Success from "./components/Success";
import VendorShopPage from "./components/VenderShopPage/VenderShopPage";
import VendorSidebar from "./components/VendorSidebar/VendorSidebar";
import SpecialDeal from "./components/SpecialDeal/SpecialDeal";
import Dashboard from "./components/Dashboard/Dashboard/Dashboard";
import Media from "./components/Dashboard/Media/Media";
import AddProduct from "./components/Dashboard/AddProduct/AddProduct";
import DetailedOrder from "./components/Dashboard/DetailedOrder/DetailedOrder";
import Categories from "./components/Dashboard/AddProduct/Sub/Categories/Categories";
import Attributes from "./components/Dashboard/AddProduct/Sub/Attributes/Attributes";
import DealDetails from "./components/SpecialDeal/DealDetails";
import DetailBlogPage from "./components/Blogs/DetailBlogPage";




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
            <Route path='/vendorShop' element={<VendorShopPage />} />
            <Route path='/vendorSidebar' element={<VendorSidebar />} />
            <Route path='/profile' element={<PrivateRoute><UserProfile /></PrivateRoute>} />
            <Route path='/success/:id' element={<PrivateRoute><Success /></PrivateRoute>} />
            <Route path='/blogs/details/:id' element={<PrivateRoute><DetailBlogPage /></PrivateRoute>} />
            <Route path='/specials/details/:id' element={<PrivateRoute><DealDetails /></PrivateRoute>} />
            <Route path='*' element={<NotFound />} />

            {/* DASHBOARD ROUTES */}
            <Route path="/dashboard" element={<Dashboard />} >
              <Route path="media" element={<Media />}></Route>
              <Route path="addProduct" element={<AddProduct />}></Route>
              <Route path="order-details" element={<DetailedOrder />}></Route>
              <Route path="categories" element={<Categories />}></Route>
              <Route path="attributes" element={<Attributes />}></Route>
            </Route>
          </Routes>
          <Footer />
        </Router>
      </AuthProvider>

    </div>

  );
}

export default App;