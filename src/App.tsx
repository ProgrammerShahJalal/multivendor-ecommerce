import { useContext, useLayoutEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import DetailBlogPage from "./components/Blogs/DetailBlogPage";
import AuthProvider from "./context/AuthProvider";
import Register from "./components/Pages/RegisterPage/Register";
import Login from "./components/Pages/LoginPage/Login";
import NotFound from './components/NotFound/NotFound';
import Team from './components/Pages/Team/Team';
import Shop from "./components/Shop/Shop";
import PrivateRoute from "./components/Route/PrivateRoute/PrivateRoute";
import UserProfile from './components/UserDashboard/UserDashboard/UserDashboard';
import OrderTracking from './components/OrderTracking/OrderTracking';
import Success from "./components/Success";
import VendorShopPage from "./components/VenderShopPage/VenderShopPage";
import VendorSidebar from "./components/VendorSidebar/VendorSidebar";
import SpecialDeal from "./components/SpecialDeal/SpecialDeal";

import Media from "./components/Dashboard/Media/Media";
import AddProduct from "./components/Dashboard/AddProduct/AddProduct";
import Attributes from "./components/Dashboard/AddProduct/Sub/Attributes/Attributes";
import Categories from "./components/Dashboard/AddProduct/Sub/Categories/Categories";
import Products from "./components/Dashboard/AddProduct/Sub/Products/Products";
import Affiliate from "./components/Dashboard/AffiliateDashboard/AffiliateDashboard/Affliate";
import AffiliateLinks from "./components/Dashboard/AffiliateDashboard/AffiliateLinks/AffiliateLinks";
import Dashboard from "./components/Dashboard/Dashboard/Dashboard";
import AllOrders from "./components/Dashboard/Order/allOrder";
import Users from "./components/Dashboard/Users/Users";
import Vendors from "./components/Dashboard/Vendors/Vendors";
import VendorProfileDetails from "./components/Dashboard/Vendors/VendorsProfileDetails";
import Home from "./components/Home/Home";
import KidsProductDetails from './components/KidsProductDetails';
import MenProductsDetail from './components/MenProductDetail';
import About from "./components/Pages/About/About";
import Cart from "./components/Pages/CartPage/Cart";
import Checkout from "./components/Checkout/Checkout";
import DetailedOrder from "./components/Dashboard/Order/DetailedOrder";
import SingleProduct from "./components/AllProducts/SingleProduct";
import SearchField from "./components/Pages/SearchField/SearchField";
import UnitTesting from "./components/Pages/UnitTesting/UnitTesting";
import VendorInformations from "./components/Pages/VendorPages/VendorInformations";
import VendorRegister from "./components/Pages/VendorPages/VendorRegister";
import WishList from "./components/Pages/WishList/WishList";
import PrivacyPolicy from "./components/PrivacyPolicy/PrivacyPolicy";
import Promo from './components/Promo/Promo';
import Footer from './components/Shared/Footer/Footer';
import HeaderLanguage from './components/Shared/HeaderLanguage';
import DealDetails from "./components/SpecialDeal/DealDetails";
import StoreListCards from "./components/StoreListCard/StoreListCard";
import EditProduct from "./components/Dashboard/AddProduct/Sub/EditProduct/EditProduct";
import UserDashboardHome from "./components/UserDashboard/UserDashboardHome/UserDashboardHome";
import TermsCondition from "./components/TermsCondition/TermsCondition";
import CustomersService from "./components/CustomersService/CustomersService";
import AdminRoute from "./components/Route/AdminRoute/AdminRoute";
import WomenProductDetail from "./components/WomenProductDetail";
import { LangContext } from "./components/Pages/MultiLanguage/languagecontext/lang";
import Contact from "./components/Contact/Contact";






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

  const { dispatch: { translate } } = useContext(LangContext);

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
            <Route path='/searchField' element={<SearchField />} />
            <Route path='/unitTesting' element={<UnitTesting />} />
            <Route path='/specialDeal' element={<SpecialDeal translate={translate} />} />
            <Route path='/productDetails/men/:id' element={<MenProductsDetail />} />
            <Route path='/productDetails/women/:id' element={<WomenProductDetail />} />
            <Route path='/productDetails/kid/:id' element={<KidsProductDetails />} />
            <Route path='/team' element={<Team />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/vendors' element={<StoreListCards />} />
            <Route path='/vendor-register' element={<PrivateRoute><VendorRegister /></PrivateRoute>} />
            <Route path='/orderTrack' element={<OrderTracking />} />
            <Route path='/wishlist' element={<WishList />} />
            <Route path='/checkout' element={<PrivateRoute><Checkout /></PrivateRoute>} />
            <Route path='/shop' element={<Shop />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/vendorShop' element={<VendorShopPage />} />
            <Route path='/vendorSidebar' element={<VendorSidebar />} />
            <Route path='/vendorLogin' element={<PrivateRoute><VendorInformations /></PrivateRoute>} />
            <Route path='/profile' element={<PrivateRoute><UserProfile /></PrivateRoute>} />
            <Route path='/success/:id' element={<PrivateRoute><Success /></PrivateRoute>} />
            <Route path='/blogs/details/:id' element={<PrivateRoute><DetailBlogPage /></PrivateRoute>} />
            <Route path='/specials/details/:id' element={<PrivateRoute><DealDetails /></PrivateRoute>} />
            <Route path='/product/:id' element={<SingleProduct />} />

            {/* DASHBOARD ROUTES */}
            <Route path="/dashboard" element={<Dashboard />} >
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
              <Route path='edit-product/:id' element={<AdminRoute ><EditProduct /></AdminRoute>} />
              <Route path="vendors" element={<Vendors />}></Route>
              <Route path="user/vendor/:slug" element={<VendorProfileDetails />}></Route>
            </Route>

            {/* footer route */}
            <Route path="/terms&condition" element={<TermsCondition />}></Route>
            <Route path="/customer-service" element={<CustomersService />}></Route>
            <Route path="/privacy-policy" element={<PrivacyPolicy />}></Route>

            <Route path='*' element={<NotFound />} />
          </Routes>
          <Footer />
        </Router>
      </AuthProvider>
    </div>

  );
}
export default App;