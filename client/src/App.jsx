import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/Home";
import LaptopPage from "./pages/LaptopPage";
import MobilePage from "./pages/MobilePage";
import MensPage from "./pages/Mens-Page";
import WomensPage from "./pages/Womens-Page";
import Groceries from "./pages/Groceries";
import Watches from "./pages/Watches";
import WishList from "./pages/WishList";
import Details from "./pages/Details";
import CartPage from "./pages/CartPage";
import Footer from "./components/footer/Footer";
import SearchingRoute from "./pages/SearchingRoute";
import PaymentSuccess from "./pages/PaymentSuccess";
import Orders from "./pages/Orders";
import ScrollToTop from "./scroll/ScrolltoTop";
import { Toaster } from "react-hot-toast";
import axios from "axios";
import SignIn from "./pages/SignIn";

function App() {
  const [user, setUser] = useState(true);
  const location = useLocation();

  useEffect(() => {
    axios.defaults.baseURL = "http://localhost:8000";
    axios.defaults.withCredentials = true;
  }, []);

  // Check if the current path is not "/sign-in"
  const isNotSignInPath = location.pathname !== "/sign-in";

  return (
    <main>
      <ScrollToTop />
      {isNotSignInPath && user && <Navbar />}
      <Routes>
        <Route path="/" element={user && <Home />} />
        <Route path="/sign-in" element={user && <SignIn />} />
        <Route path="/laptops" element={user && <LaptopPage />} />
        <Route path="/mobiles" element={user && <MobilePage />} />
        <Route path="/mens" element={user && <MensPage />} />
        <Route path="/womens" element={user && <WomensPage />} />
        <Route path="/groceries" element={user && <Groceries />} />
        <Route path="/watches" element={user && <Watches />} />
        <Route path="/wishlist" element={user && <WishList />} />
        <Route path="/:id" element={user && <Details />} />
        <Route path="/cart" element={user && <CartPage />} />
        <Route path="/search" element={user && <SearchingRoute />} />
        <Route path="/paymentsuccess" element={user && <PaymentSuccess />} />
        <Route path="/orders" element={user && <Orders />} />
      </Routes>
      <Footer />
      <Toaster />
    </main>
  );
}

export default App;
