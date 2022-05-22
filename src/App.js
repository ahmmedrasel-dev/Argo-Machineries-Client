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

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/signin" element={<Signin></Signin>}></Route>
        <Route path="/signup" element={<Signup></Signup>}></Route>
        <Route path="/blog" element={<Blog></Blog>}></Route>
        <Route path="*" element={<Notfound></Notfound>}></Route>
      </Routes>
      <Footer></Footer>
      <ToastContainer></ToastContainer>
    </>
  );
}

export default App;
