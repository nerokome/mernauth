import { Link } from "react-router-dom";
import { FaSignInAlt, FaUser } from "react-icons/fa";

const Header = () => {
  return (
    <header className="bg-white shadow-md px-6 py-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo / Brand */}
        <Link to="/" className="text-2xl font-bold text-blue-600">
          Goalsetter
        </Link>

        {/* Navigation */}
        <nav>
          <ul className="flex items-center space-x-6">
            <li>
              <Link
                to="/login"
                className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 transition"
              >
                <FaSignInAlt />
                <span>Login</span>
              </Link>
            </li>
            <li>
              <Link
                to="/register"
                className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 transition"
              >
                <FaUser />
                <span>Register</span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
