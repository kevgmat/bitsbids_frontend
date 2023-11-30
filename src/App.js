import React from "react";
import NavigationBar from "./components/NavigationBar/NavigationBar";
import ProfilePopup from "./components/ProfilePopup/ProfilePopup";
import HomePage from "./pages/HomePage/HomePage";
import ProductPage from "./pages/ProductPage/ProductPage";
import ProductDetails from "./components/ProductDetails/ProductDetails";
import SellerChatButton from "./components/SellerChatButton/SellerChatButton";
import "bootstrap/dist/css/bootstrap.min.css";
import ImageCarousel from "./components/ImageCarousel/ImageCarousel";
import Login from "./pages/Login/Login";
import ck1 from "./assets/ck1.jpg";
import ck2 from "./assets/ck2.jpg";
import ck3 from "./assets/ck3.jpeg";
import ck4 from "./assets/ck4.jpg";
import ck5 from "./assets/ck5.jpg";
import Settings from "./pages/Settings/Settings";
import OrdersPage from "./pages/OrdersPane/OrdersPane";
import ProductDescription from "./components/ProductDescription/ProductDescription";
import AddProduct from "./pages/AddProduct/AddProduct";

function App() {
  const userEmail = "f20220063@hyderabad.bits-pilani.ac.in";
  const images = [
    { ck1 },
    { ck2 },
    { ck3 },
    { ck4 },
    { ck5 },
    // ... up to 8 images
  ];

  return (
    <div>
      <OrdersPage />
      {/* <NavigationBar userEmail={userEmail} /> */}
      {/* 
      <ProductPage />
       <Login />
      <ImageCarousel />
      <Settings />
      <HomePage />
      <AddProduct />
       */}
      {/* <ProfilePopup userEmail={userEmail} /> */}
      {/* Other components */}
      {/*   */}
      {/* 
      <NavigationBar userEmail={userEmail} />
      
      <ImageCarousel />
      <ProductDescription />
      <ProductDetails />
      <SellerChatButton /> */}
    </div>
  );
}

export default App;

/*import "./App.css";

import NavigationBar from "./components/NavigationBar/NavigationBar";

function App() {
  return (
    <div className="App">
      <NavigationBar />
    </div>
  );
}

export default App;*/
