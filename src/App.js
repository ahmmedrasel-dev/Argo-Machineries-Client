import { Route, Routes } from "react-router-dom";
import "./App.css";
import Blog from "./Pages/Blog/Blog";
import Home from "./Pages/Home/Home";
import Notfound from "./Pages/Notfound/Notfound";
import Footer from "./Pages/Shered/Footer/Footer";
import Navbar from "./Pages/Shered/Header/Navbar";
import Signin from "./Pages/Signin/Signin";
import Signup from "./Pages/Signup/Signup";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import 'animate.css';
import AddProduct from "./Pages/Dashboard/AddProduct/AddProduct";
import Machinaries from "./Pages/Machinaries/Machinaries";
import Dashboard from "./Pages/Dashboard/Dashboard";
import RequireAuth from "./Pages/Signin/RequireAuth";
import Users from "./Pages/Dashboard/Users/Users";
import AllProducts from "./Pages/Product/AllProducts";
import AllMachinaries from "./Pages/AllMachinaries/AllMachinaries";
import Purchase from "./Pages/Purchase/Purchase";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/signin" element={<Signin></Signin>}></Route>
        <Route path="/dashboard" element={
          <RequireAuth>
            <Dashboard></Dashboard>
          </RequireAuth>
        }>
          <Route path="users" element={<Users></Users>}></Route>
          <Route path="add-product" element={<AddProduct></AddProduct>}></Route>
          <Route path="all-products" element={<AllProducts></AllProducts>}></Route>
        </Route>
        <Route path="/signup" element={<Signup></Signup>}></Route>
        <Route path="/all-machinaries" element={<AllMachinaries></AllMachinaries>}></Route>
        <Route path='/purchase/:id' element={
          <RequireAuth>
            <Purchase></Purchase>
          </RequireAuth>
        }></Route>
        <Route path="/blog" element={<Blog></Blog>}></Route>
        <Route path="/machinaries" element={<Machinaries></Machinaries>}></Route>
        <Route path="*" element={<Notfound></Notfound>}></Route>
      </Routes>
      <Footer></Footer>
      <ToastContainer></ToastContainer>
    </>
  );
}

export default App;
