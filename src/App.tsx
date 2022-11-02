import "../node_modules/bootstrap/dist/css/bootstrap.css";
import NavBar from "./components/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import PageNotFound from "./pages/PageNotFound";
import ContactPage from "./pages/ContactPage";
import AboutPage from "./pages/AboutPage";
import AddUser from "./pages/user/AddUser";
import EditUser from "./pages/user/EditUser";
import ViewUser from "./pages/user/ViewUser";

function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/users/add" element={<AddUser />} />
          <Route path="/users/edit/:userId" element={<EditUser />} />
          <Route path="/users/view/:userId" element={<ViewUser />} />
          <Route path="*" element={<PageNotFound />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
