import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Pages/HomePage/Home/Home";

function App() {
   return (
      <>
         <Router>
            <Routes>
               <Route path="/" element={<Home />} />
               <Route path="/home" element={<Home />} />
            </Routes>
         </Router>
      </>
   );
}

export default App;
