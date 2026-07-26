import { Link, useLocation } from "react-router-dom";
import "./Navigation.css";

export function Navigation() {
  const location = useLocation();

  const links = [
    { id: "main", label: "Головна", path: "/" },
    { id: "services", label: "Послуги", path: "/services" },

    { id: "reviews", label: "Відгуки", path: "/reviews" },
  ];

  return (
    <nav className="navigation-nav">
      <ul className="navigation-list">
        {links.map((link) => {
          const isActive = location.pathname === link.path;

          return (
            <li key={link.id}>
              <Link
                to={link.path}
                className={`navigation-item ${
                  isActive
                    ? "navigation-item-active"
                    : "navigation-item-inactive"
                }`}
              >
                {link.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
