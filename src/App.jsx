import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import Navbar from "./components/Navbar.jsx"; // Import the Navbar component
import Footer from "./components/Footer.jsx"; // Import the Footer component

function App() {
  return (
    <Router>
      <Navbar /> {/* Add the Navbar component */}
      <Routes>
        <Route exact path="/" element={<Index />} />
      </Routes>
      <Footer /> {/* Add the Footer component */}
    </Router>
  );
}

export default App;