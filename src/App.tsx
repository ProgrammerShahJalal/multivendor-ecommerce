import { useContext, useLayoutEffect, lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Contact from './components/Contact/Contact.js';
import AuthProvider from "./context/AuthProvider";
import Register from "./components/Pages/RegisterPage/Register";

import NotFound from './components/NotFound/NotFound';
import Team from './components/Pages/Team/Team';
import Shop from "./components/Shop/Shop";
import PrivateRoute from "./components/Route/PrivateRoute/PrivateRoute";
import UserProfile from './components/UserDashboard/UserDashboard/UserDashboard';
import OrderTracking from './components/OrderTracking/OrderTracking';
import Success from "./components/Success";
import VendorShopPage from "./components/VenderShopPage/VenderShopPage";
import SpecialDeal from "./components/SpecialDeal/SpecialDeal";
import Home from "./components/Home/Home";
import DetailBlogPage from "./components/Blogs/DetailBlogPage";
// import { SummaryBoxSpecial } from "./components/Dashboard/DashboardHome/DashboardHome";
import MenProductsDetail from './components/MenProductDetail';
import KidsProductDetails from './components/KidsProductDetails';
// import SingleProduct from "./components/SingleProduct/SingleProduct";
import About from "./components/Pages/About/About";
import Cart from "./components/Pages/CartPage/Cart";
import { LangContext } from "./components/Pages/MultiLanguage/languagecontext/lang";
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
import Checkout from "./components/Checkout/Checkout";
import SingleProduct from "./components/AllProducts/SingleProduct";
import AdminRoute from "./components/Route/AdminRoute/AdminRoute";

import UserDashboardHome from "./components/UserDashboard/UserDashboardHome/UserDashboardHome";
import TermsCondition from "./components/TermsCondition/TermsCondition";
import CustomersService from "./components/CustomersService/CustomersService";
import AddReview from "./components/Pages/AddReview/AddReview";
import WomenProductDetail from "./components/WomenProductDetail";
import UserOrders from "./components/UserDashboard/UserOrders/UserOrders";
import UserDetailedOrder from "./components/UserDashboard/UserOrders/UserDetailedOrder";
import AddBlogForm from "./components/Blogs/AddBlogForm";
import DashboardBlogs from "./components/Blogs/DashboardBlogs";
import BlogsFirstLook from "./components/Blogs/BlogsFirstLook";
import AffiliateFirstLook from "./components/Blogs/AffiliateFirstLook";
import LoginForm from "./components/Pages/LoginPage/Login";
import DashboardUI from "./components/Dashboard/Dashboard/DashboardUI.js";
import UserMainProfile from "./components/Pages/UserMainProfile/UserMainProfile";


const Dashboard = lazy(() => import("./components/Dashboard/Dashboard/Dashboard"));
const AllOrders = lazy(() => import("./components/Dashboard/Order/allOrder"));
const Media = lazy(() => import("./components/Dashboard/Media/Media"));
const AddProduct = lazy(() => import("./components/Dashboard/AddProduct/AddProduct"));
const Categories = lazy(() => import("./components/Dashboard/AddProduct/Sub/Categories/Categories"));
const Attributes = lazy(() => import("./components/Dashboard/AddProduct/Sub/Attributes/Attributes"));
const Affiliate = lazy(() => import("./components/Dashboard/AffiliateDashboard/AffiliateDashboard/Affliate"));
const AffiliateLinks = lazy(() => import("./components/Dashboard/AffiliateDashboard/AffiliateLinks/AffiliateLinks"));
const Vendors = lazy(() => import("./components/Dashboard/Vendors/Vendors"));
const VendorProfileDetails = lazy(() => import("./components/Dashboard/Vendors/VendorsProfileDetails"));
const Products = lazy(() => import("./components/Dashboard/AddProduct/Sub/Products/Products"));
const Users = lazy(() => import("./components/Dashboard/Users/Users"));
const DetailedOrder = lazy(() => import("./components/Dashboard/Order/DetailedOrder"));
const EditProduct = lazy(() => import("./components/Dashboard/AddProduct/Sub/EditProduct/EditProduct"));


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
            <Route path='/login' element={<LoginForm />} />
            <Route path='/register' element={<Register />} />
            <Route path='/vendors' element={<StoreListCards />} />
            <Route path='/vendor-register' element={<PrivateRoute><VendorRegister /></PrivateRoute>} />
            <Route path='/orderTrack' element={<OrderTracking />} />
            <Route path='/wishlist' element={<WishList />} />
            <Route path='/checkout' element={<PrivateRoute><Checkout /></PrivateRoute>} />
            <Route path='/addReview' element={<PrivateRoute><AddReview /></PrivateRoute>} />
            <Route path='/shop' element={<Shop />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/vendorShop/:storeSlug' element={<VendorShopPage />} />
            <Route path='/vendorLogin' element={<PrivateRoute><VendorInformations /></PrivateRoute>} />
            <Route path='/success/:id' element={<PrivateRoute><Success /></PrivateRoute>} />
            <Route path='/blogs/details/:id' element={<PrivateRoute><DetailBlogPage /></PrivateRoute>} />
            <Route path='/specials/details/:id' element={<PrivateRoute><DealDetails /></PrivateRoute>} />
            <Route path='/product/:id' element={<SingleProduct />} />
            {/* USER DASHBOARD */}
            <Route path="/profile" element={<PrivateRoute><UserProfile /></PrivateRoute>} >
              <Route path="dashboard" element={<UserDashboardHome />}></Route>
              <Route path="profile" element={<UserMainProfile />}></Route>
              <Route path="orders" element={<UserOrders />}></Route>
              <Route path="order/:id" element={<UserDetailedOrder />}></Route>
            </Route>
            {/* DASHBOARD ROUTES */}
            <Route path="/dashboard" element={<Suspense fallback={<div>Loading...</div>}><AdminRoute ><Dashboard /></AdminRoute></Suspense>} >
              <Route path="media" element={<Suspense fallback={<div>Loading...</div>}><Media /></Suspense>}></Route>
              <Route path="dashboardGlance" element={<Suspense fallback={<div>Loading...</div>}><DashboardUI /></Suspense>}></Route>
              <Route path="affiliate" element={<Suspense fallback={<div>Loading...</div>}><AffiliateFirstLook /></Suspense>}></Route>
              <Route path="affiliate-dashboard" element={<Suspense fallback={<div>Loading...</div>}><Affiliate /></Suspense>}></Route>
              <Route path="affiliate-links" element={<Suspense fallback={<div>Loading...</div>}><AffiliateLinks /></Suspense>}></Route>
              <Route path="addProduct" element={<Suspense fallback={<div>Loading...</div>}><AddProduct /></Suspense>}></Route>
              <Route path="orders" element={<Suspense fallback={<div>Loading...</div>}><AllOrders /></Suspense>}></Route>
              <Route path="blogs-dashboard" element={<Suspense fallback={<div>Loading...</div>}><BlogsFirstLook /></Suspense>}></Route>
              <Route path="blogs" element={<Suspense fallback={<div>Loading...</div>}><DashboardBlogs /></Suspense>}></Route>
              <Route path="add-blog" element={<Suspense fallback={<div>Loading...</div>}><AddBlogForm /></Suspense>}></Route>
              <Route path='detailed-order/:id' element={<Suspense fallback={<div>Loading...</div>}><DetailedOrder /></Suspense>} />
              <Route path="categories" element={<Suspense fallback={<div>Loading...</div>}><Categories /></Suspense>}></Route>
              <Route path="attributes" element={<Suspense fallback={<div>Loading...</div>}><Attributes /></Suspense>}></Route>
              <Route path="products" element={<Suspense fallback={<div>Loading...</div>}><Products /></Suspense>}></Route>
              <Route path="users" element={<Suspense fallback={<div>Loading...</div>}><Users /></Suspense>}></Route>
              <Route path='edit-product/:id' element={<Suspense fallback={<div>Loading...</div>}><AdminRoute ><EditProduct /></AdminRoute></Suspense>} />
              <Route path="vendors" element={<Suspense fallback={<div>Loading...</div>}><Vendors /></Suspense>}></Route>
              <Route path="user/vendor/:slug" element={<Suspense fallback={<div>Loading...</div>}><VendorProfileDetails /></Suspense>}></Route>
            </Route>

            {/* footer route */}
            <Route path="/terms&condition" element={<TermsCondition />}></Route>
            <Route path="/customer-service" element={<CustomersService />}></Route>
            <Route path="/privacy-policy" element={<PrivacyPolicy />}></Route>


            <Route path="/dashboard" element={<Suspense fallback={<div>Loading...</div>}><AdminRoute ><Dashboard /></AdminRoute></Suspense>} >
              <Route path="media" element={<Suspense fallback={<div>Loading...</div>}><Media /></Suspense>}></Route>
              <Route path="affiliate-dashboard" element={<Suspense fallback={<div>Loading...</div>}><Affiliate /></Suspense>}></Route>
              <Route path="affiliate-links" element={<Suspense fallback={<div>Loading...</div>}><AffiliateLinks /></Suspense>}></Route>
              <Route path="addProduct" element={<Suspense fallback={<div>Loading...</div>}><AddProduct /></Suspense>}></Route>
              <Route path="orders" element={<Suspense fallback={<div>Loading...</div>}><AllOrders /></Suspense>}></Route>
              <Route path='detailed-order/:id' element={<Suspense fallback={<div>Loading...</div>}><DetailedOrder /></Suspense>} />
              <Route path="categories" element={<Suspense fallback={<div>Loading...</div>}><Categories /></Suspense>}></Route>
              <Route path="attributes" element={<Suspense fallback={<div>Loading...</div>}><Attributes /></Suspense>}></Route>
              <Route path="products" element={<Suspense fallback={<div>Loading...</div>}><Products /></Suspense>}></Route>
              <Route path="users" element={<Suspense fallback={<div>Loading...</div>}><Users /></Suspense>}></Route>
              <Route path='edit-product/:id' element={<Suspense fallback={<div>Loading...</div>}><AdminRoute ><EditProduct /></AdminRoute></Suspense>} />
              <Route path="vendors" element={<Suspense fallback={<div>Loading...</div>}><Vendors /></Suspense>}></Route>
              <Route path="vendor-profile/:id" element={<Suspense fallback={<div>Loading...</div>}><VendorProfileDetails /></Suspense>}></Route>
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