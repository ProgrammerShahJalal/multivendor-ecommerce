import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import HeaderLanguage from './components/Shared/HeaderLanguage';
import Footer from './components/Shared/Footer/Footer';
import Contact from './components/Contact/Contact.js';
import AuthProvider from "./context/AuthProvider";
import Register from "./components/Pages/RegisterPage/Register";
import Login from "./components/Pages/LoginPage/Login";
import NotFound from './components/NotFound/NotFound';
import Team from './components/Pages/Team/Team';
import Shop from "./components/Shop/Shop";
import PrivateRoute from "./components/Route/PrivateRoute/PrivateRoute";
import UserProfile from './components/UserProfile/UserProfile';
import OrderTracking from './components/OrderTracking/OrderTracking';
import Success from "./components/Success";
import VendorShopPage from "./components/VenderShopPage/VenderShopPage";
import VendorSidebar from "./components/VendorSidebar/VendorSidebar";
import SpecialDeal from "./components/SpecialDeal/SpecialDeal";

import Media from "./components/Dashboard/Media/Media";
import AddProduct from "./components/Dashboard/AddProduct/AddProduct";
import Categories from "./components/Dashboard/AddProduct/Sub/Categories/Categories";
import Attributes from "./components/Dashboard/AddProduct/Sub/Attributes/Attributes";
import DealDetails from "./components/SpecialDeal/DealDetails";
import DetailBlogPage from "./components/Blogs/DetailBlogPage";
import Affiliate from "./components/Dashboard/AffiliateDashboard/AffiliateDashboard/Affliate";
import AffiliateLinks from "./components/Dashboard/AffiliateDashboard/AffiliateLinks/AffiliateLinks";
import Dashboard from "./components/Dashboard/Dashboard/Dashboard";
import { useLayoutEffect } from "react";
import AllOrders from "./components/Dashboard/Order/allOrder";
import Vendors from "./components/Dashboard/Vendors/Vendors";
import VendorProfileDetails from "./components/Dashboard/Vendors/VendorsProfileDetails";
// import { SummaryBoxSpecial } from "./components/Dashboard/DashboardHome/DashboardHome";
import Products from "./components/Dashboard/AddProduct/Sub/Products/Products";
import Users from "./components/Dashboard/Users/Users";
import MenProductsDetail from './components/MenProductDetail';
import WomenProductDetail from './components/WomenProductDetail';
import KidsProductDetails from './components/KidsProductDetails';
import Promo from './components/Promo/Promo';
// import SingleProduct from "./components/SingleProduct/SingleProduct";
import UnitTesting from "./components/Pages/UnitTesting/UnitTesting";
import WishList from "./components/Pages/WishList/WishList";
import VendorHomePage from "./components/Pages/VendorPages/VendorHomePage";
import About from "./components/Pages/About/About";
import Invoice from "./components/Invoice/Invoice";
// import { useContext } from "react";
// import { LangContext } from "./components/Pages/MultiLanguage/languagecontext/lang";
import Cart from "./components/Pages/CartPage/Cart";
import Checkout from "./components/Checkout/Checkout";
import AffiliateShop from "./components/Shop/AffiliateShop";
import SiteUser from "./components/Pages/AddReview/SiteUser";
import DetailedOrder from "./components/Dashboard/Order/DetailedOrder";
import SingleProduct from "./components/AllProducts/SingleProduct";
import TermsCondition from "./components/TermsCondition/TermsCondition";
import PrivacyPolicy from "./components/PrivacyPolicy/PrivacyPolicy";
import CustomersService from "./components/CustomersService/CustomersService";




function App() {
  const affiliateLink = window.location.search.split('=')[1]
  useLayoutEffect(() => {
    if (affiliateLink) {
      fetch(`https://guarded-ocean-73313.herokuapp.com/findUrl/${affiliateLink}`)
        .then(res => res.json())
        .then(data => {
          if (data.isUrlTrue) {
            localStorage.setItem('affiliate_Link', JSON.stringify(affiliateLink));
          }
        })
    }
  })

  // const { dispatch: { translate } } = useContext(LangContext);

  // translate={translate}
  return (
    <div className="dark:bg-slate-800" >
      <AuthProvider>
        <Router>
          <HeaderLanguage />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/home' element={<Home />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/about' element={<About />} />
            <Route path='/offer' element={<Promo />} />
            <Route path='/unitTesting' element={<UnitTesting />} />
            <Route path='/specialDeal' element={<SpecialDeal />} />
            <Route path='/productDetails/men/:id' element={<MenProductsDetail />} />
            <Route path='/productDetails/women/:id' element={<WomenProductDetail />} />
            <Route path='/productDetails/kid/:id' element={<KidsProductDetails />} />
            <Route path='/team' element={<Team />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/orderTrack' element={<OrderTracking />} />
            <Route path='/wishlist' element={<WishList />} />
            <Route path='/invoice' element={<Invoice />} />
            <Route path='/addReview' element={<SiteUser />} />
            <Route path='/checkout' element={<PrivateRoute><Checkout /></PrivateRoute>} />
            <Route path='/shop' element={<Shop />} />
            <Route path='/affiliateShop' element={<AffiliateShop />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/vendorShop' element={<VendorShopPage />} />
            <Route path='/vendorSidebar' element={<VendorSidebar />} />
            <Route path='/vendorLogin' element={<VendorHomePage />} />
            <Route path='/terms&condition' element={<TermsCondition />} />
            <Route path='/privacy-policy' element={<PrivacyPolicy />} />
            <Route path='/customer-service' element={<CustomersService />} />
            <Route path='/profile' element={<PrivateRoute><UserProfile /></PrivateRoute>} />
            <Route path='/success/:id' element={<PrivateRoute><Success /></PrivateRoute>} />
            <Route path='/blogs/details/:id' element={<PrivateRoute><DetailBlogPage /></PrivateRoute>} />
            <Route path='/specials/details/:id' element={<PrivateRoute><DealDetails /></PrivateRoute>} />
            <Route path='/product/:id' element={<SingleProduct />} />

            {/* DASHBOARD ROUTES */}
            <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>} >
              <Route path="media" element={<Media />}></Route>


              <Route path="affiliate-dashboard" element={<Affiliate />}></Route>
              <Route path="affiliate-links" element={<AffiliateLinks />}></Route>
              <Route path="addProduct" element={<AddProduct />}></Route>
              <Route path="orders" element={<AllOrders />}></Route>
              <Route path='detailed-order/:id' element={<DetailedOrder />} />
              <Route path="categories" element={<Categories />}></Route>
              <Route path="attributes" element={<Attributes />}></Route>
              <Route path="products" element={<Products />}></Route>
              <Route path="users" element={<Users />}></Route>

              <Route path="vendors" element={<Vendors />}></Route>
              <Route path="vendor-profile" element={<VendorProfileDetails />}></Route>
            </Route>
            <Route path='*' element={<NotFound />} />
          </Routes>
          <Footer />
        </Router>
      </AuthProvider>
    </div>

  );
}
export default App;