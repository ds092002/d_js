import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Students', path: '/students' },
    { name: 'Add Student', path: '/add' },
  ];

  return (
    <nav className="bg-white shadow-md px-6 py-4">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        <div className="text-xl font-semibold text-blue-600">StudentApp</div>
        <ul className="flex space-x-6">
          {navItems.map((item) => (
            <li key={item.name}>
              <Link
                to={item.path}
                className={`text-gray-700 hover:text-blue-600 transition-all ${
                  location.pathname === item.path ? 'font-bold text-blue-600' : ''
                }`}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
