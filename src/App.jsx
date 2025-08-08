import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
// import FindDoctors from "./pages/FindDoctors";
// import LabTest from "./pages/LabTest";
// import Shop from "./pages/Shop";
import Ingredient from "./pages/Ingredient";
import Shop from './pages/Shop'


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/find-doctors" element={<FindDoctors />} /> */}
        {/* <Route path="/lab-test" element={<LabTest />} /> */}
        {/* <Route path="/shop" element={<Shop />} /> */}
        <Route path="/shop" element={<Shop />} />
        <Route path="/ingredients" element={<Ingredient />} />
        {/* <Route path="/about-us" element={<AboutUs />} /> */}
      </Routes>
    </Router>
  );
}

export default App;