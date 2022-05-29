import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "react-toastify/dist/ReactToastify.css";

import Header from './components/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Blogs from './components/Blogs/Blogs';
import Login from './components/Login/Login';
import Footer from './components/Footer/Footer';
import RequireAuth from "./components/RequireAuth/RequireAuth"
import NotFound from "./components/NotFound/NotFound"
import Register from './components/Register/Register';

import InventoryDetails from './components/Inventory/InventoryDetails';
import ManagePage from './components/ManagePage/ManagePage';
import AddInventory from './components/Inventory/AddInventory';
import NewsSection from './components/NewsSection/NewsSection';
import MyItems from './components/MyItems/MyItems';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/blogs" element={<Blogs></Blogs>}></Route>
        <Route path="/inventory/:id" element={<RequireAuth>
          <InventoryDetails></InventoryDetails>
        </RequireAuth>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route path="/managePage" element={<RequireAuth><ManagePage></ManagePage></RequireAuth>}></Route>
        <Route path="/addInventory" element={<RequireAuth><AddInventory></AddInventory></RequireAuth>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
        <Route path="newsection" element={<NewsSection></NewsSection>}></Route>
        <Route path="myItems" element={<MyItems></MyItems>}></Route>


      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
