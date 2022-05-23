import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/Pages/About/About';
import Home from './components/Pages/Home/Home';
import Menubar from './components/Shared/Menubar/Menubar';
import Login from './components/Pages/Login/Login'
import Footer from './components/Shared/Footer/Footer';
import Tools from './components/Pages/Tools/Tools';
import Register from './components/Pages/Login/Register';
import Dashboard from './components/Pages/Dashboard/Dashboard';
import RequireAuth from './components/Pages/Login/RequireAuth';
import Purchase from './components/Pages/Purchase/Purchase';
import Blog from './components/Pages/Blog/Blog';
import MyOrder from './components/Pages/Dashboard/MyOrder';
import AddReview from './components/Pages/Dashboard/AddReview';
import MyProfile from './components/Pages/Dashboard/MyProfile';
import Payment from './components/Pages/Dashboard/Payment';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Reviews from './components/Pages/Reviews/Reviews';
import MakeAdmin from './components/Pages/Dashboard/MakeAdmin';
import ManageProducts from './components/Pages/Dashboard/ManageProducts';
import AddProduct from './components/Pages/Dashboard/AddProduct';
import ManageOrders from './components/Pages/Dashboard/ManageOrders';

function App() {
  return (
    <div className="App">
      <Menubar />
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/tools" element={<Tools />} />

        <Route path="tool/:id" element={<RequireAuth><Purchase /></RequireAuth>} />
        <Route path="/dashboard" element={<RequireAuth><Dashboard /></RequireAuth>}>
          <Route index element={<MyProfile />} />
          <Route path='my-profile' element={<MyProfile />} />

          {/* for user  */}
          <Route path="my-order" element={<MyOrder />} />
          <Route path='payment/:id' element={<Payment />} />
          <Route path="add-reviews" element={<AddReview />} />

          {/* for add admin  */}
          <Route path="make-admin" element={<MakeAdmin />} />
          <Route path="manage-products" element={<ManageProducts />} />
          <Route path="add-product" element={<AddProduct />} />
          <Route path="manage-orders" element={<ManageOrders />} />
        </Route>

        <Route path="/reviews" element={<Reviews />} />
        <Route path="/blogs" element={<Blog />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
