import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaUserAlt } from 'react-icons/fa';

const Navbar = () => {
  const links = [
    {
      id: 1,
      path: '/',
      text: 'Books',
    },
    {
      id: 2,
      path: '/categories',
      text: 'Categories',
    },
  ];
  return (
    <ul className="navBar">
      <li className="logo">
        <NavLink to="/">Bookstore CMS</NavLink>
      </li>
      {links.map((link) => (
        <li key={link.id} className="navItems">
          <NavLink to={link.path}>{link.text}</NavLink>
        </li>
      ))}
      <li className="userIcon">
        <FaUserAlt className="icon" />
      </li>
    </ul>
  );
};

export default Navbar;
