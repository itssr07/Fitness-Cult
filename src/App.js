import Navbar from "./layout/Navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import { HomePage, PricingPage, ContactPage, AboutPage, AuthenticationPage, ForgetPage, CartPage, ProductsPage, SignUpPage} from "./pages";
import Footer from "./layout/Footer/Footer";



function App() {
  return (
    <>
   <Navbar/>
   <Routes>
    <Route path="/" element={<HomePage/>}/>
    <Route path="/pricing" element={<PricingPage/>}/>
    <Route path="/contact" element={<ContactPage/>}/>
    <Route path="/about" element={<AboutPage/>}/>
    <Route path="/authentication" element={<AuthenticationPage/>}/>
    <Route path="/forgot-password" element={<ForgetPage/>}/>
    <Route path="/cart" element={<CartPage/>}/>
    <Route path="/products" element={<ProductsPage/>}/>
    <Route path="/signup" element={<SignUpPage/>}/>
   </Routes>
   <Footer />
   </>
  );
}

export default App;
