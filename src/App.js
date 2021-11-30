import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/FooterComponent/Footer";
import Header from "./components/HeaderComponent/Header/Header";
import Home from "./Pages/HomePage/Home/Home";

function App() {
   return (
      <>
         <Router>
            <Header />
            <Routes>
               <Route path="/" element={<Home />} />
               <Route path="/home" element={<Home />} />
            </Routes>
            <Footer />
         </Router>
      </>
   );
}

export default App;
