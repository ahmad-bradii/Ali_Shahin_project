import { useState, useEffect } from "react";
import { Link, useLocation } from "@tanstack/react-router";

export default function Header() {
  // State to store navigation history
  const [navHistory, setNavHistory] = useState([]);
  const location = useLocation();

  // Update history when location changes
  useEffect(() => {
    setNavHistory(() => {
      const newHistory = location.pathname
        .split("/")
        .filter((path) => path !== "");
      return newHistory;
    });
    console.log("location", location.pathname);
  }, [location.pathname]);

  const root = [""];

  return (
    <div>
      <nav className="nav-header">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          {navHistory.map((path, index) => {
            root.push(path);
            return (
              <li key={index}>
                <Link to={root.join("/")}>{path}</Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
}
