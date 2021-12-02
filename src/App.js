import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import "react-circular-progressbar/dist/styles.css";
import Footer from "./components/FooterComponent/Footer";
import Header from "./components/HeaderComponent/Header/Header";
import About from "./Pages/AboutPage/About/About";
import Blogs from "./Pages/BlogPage/Blogs/Blogs";
import Contact from "./Pages/ContactPage/Contact/Contact";
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
               <Route path="/contact" element={<Contact />} />
               <Route path="/about" element={<About />} />
               <Route path="/blogs" element={<Blogs />} />
            </Routes>
            <Footer />
         </Router>
      </>
   );
}

export default App;
