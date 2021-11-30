import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/FooterComponent/Footer";
import Header from "./components/HeaderComponent/Header/Header";
import Home from "./Pages/HomePage/Home/Home";
import Projects from "./Pages/ProjectPage/Projects/Projects";

function App() {
   return (
      <>
         <Router>
            <Header />
            <Routes>
               <Route path="/" element={<Home />} />
               <Route path="/home" element={<Home />} />
               <Route path="/projects" element={<Projects />} />
            </Routes>
            <Footer />
         </Router>
      </>
   );
}

export default App;
