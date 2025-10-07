import React from "react";
import { useNavigate } from "react-router-dom";
import countries from "./countries";

function Header() {
  const navigate = useNavigate();

  // Theme state
  const [theme, setTheme] = React.useState("light-theme");
  const [showCategory, setShowCategory] = React.useState(false);
  const [showCountry, setShowCountry] = React.useState(false);

  const categories = [
    "business",
    "entertainment",
    "general",
    "health",
    "science",
    "sports",
    "technology",
    "politics",
  ];

  // Toggle dark/light theme
  React.useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  // Logout function
  const handleLogout = () => {
    localStorage.removeItem("userInfo"); // clear login info
    navigate("/login"); // redirect to login page
  };

  return (
    <header className="fixed w-full top-0 z-50 bg-white dark:bg-gray-800 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center py-4 px-4">
        <h1 className="logo-newspaper">News Aggregator</h1>

        <ul className="flex items-center gap-6 font-medium">
          {/* All News */}
          <li>
            <button
              onClick={() => navigate("/")}
              className="hover:text-red-600"
            >
              All News
            </button>
          </li>

          {/* Top Headlines Dropdown */}
          <li className="relative">
            <button
              onClick={() => {
                setShowCategory(!showCategory);
                setShowCountry(false);
              }}
              className="hover:text-red-600"
            >
              Top Headlines ▼
            </button>
            {showCategory && (
              <ul className="absolute bg-white dark:bg-gray-800 shadow-lg rounded mt-2 overflow-auto max-h-64 z-50">
                {categories.map((c) => (
                  <li
                    key={c}
                    className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    <button
                      onClick={() => {
                        navigate(`/top-headlines/${c}`);
                        setShowCategory(false);
                      }}
                    >
                      {c}
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </li>

          {/* Country Dropdown */}
          <li className="relative">
            <button
              onClick={() => {
                setShowCountry(!showCountry);
                setShowCategory(false);
              }}
              className="hover:text-red-600"
            >
              Country ▼
            </button>
            {showCountry && (
              <ul className="absolute bg-white dark:bg-gray-800 shadow-lg rounded mt-2 overflow-auto max-h-64 z-50">
                {countries.map((c) => (
                  <li
                    key={c.iso_2_alpha}
                    className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 flex items-center gap-2"
                  >
                    <button
                      onClick={() => {
                        navigate(`/country/${c.iso_2_alpha}`);
                        setShowCountry(false);
                      }}
                      className="flex items-center gap-2"
                    >
                      <img
                        src={c.png}
                        alt={c.countryName}
                        className="w-5 h-4"
                      />
                      {c.countryName}
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </li>

          {/* Theme Toggle */}
          <li>
            <button
              onClick={() =>
                setTheme(theme === "light-theme" ? "dark-theme" : "light-theme")
              }
            >
              {theme === "light-theme" ? "🌙" : "☀️"}
            </button>
          </li>

          {/* Logout Button */}
          <li>
            <button
              onClick={handleLogout}
              className="bg-red-600 text-white py-1 px-3 rounded hover:bg-red-700"
            >
              Logout
            </button>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
