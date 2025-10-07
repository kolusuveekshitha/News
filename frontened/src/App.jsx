import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Header from "./components/Header";
import AllNews from "./components/AllNews";
import TopHeadlines from "./components/TopHeadlines";
import CountryNews from "./components/CountryNews";
import Login from "./components/Login";
import Register from "./components/Register";
import ProtectedRoute from "./components/ProtectedRoute";
import "./index.css";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        {/* Default Route → Go to Login if not logged in */}
        <Route path="/" element={<Navigate to="/login" replace />} />

        {/* Auth Pages */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Protected News Pages */}
        <Route
          path="/news"
          element={
            <ProtectedRoute>
              <Header />
              <AllNews />
            </ProtectedRoute>
          }
        />
        <Route
          path="/news/top-headlines/:category"
          element={
            <ProtectedRoute>
              <Header />
              <TopHeadlines />
            </ProtectedRoute>
          }
        />
        <Route
          path="/news/country/:iso"
          element={
            <ProtectedRoute>
              <Header />
              <CountryNews />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
