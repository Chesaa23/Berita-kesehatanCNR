import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/logodokter.jpg';
import { MdLanguage } from "react-icons/md";
import { FaBars, FaX } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";

const Navbar = ({ search, setSearch }) => {
  const [IsMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [language, setLanguage] = useState("id"); // default bahasa Indonesia
  const dropdownRef = useRef(null);

  // Tutup dropdown kalau klik di luar
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);
  const toggleMenu = () => {
    setIsMenuOpen(!IsMenuOpen);
  };

  const navItems = [
    { link: "home", path: "/" },
    { link: "about", path: "/about" },
    { link: "health service", path: "/health" },
    { link: "pricing", path: "/pricing" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-purple-400 w-full text-primary shadow-md">
      <div className="max-w-screen-2xl md:px-14 px-4 mx-auto text-lg flex justify-between items-center font-medium h-24">
        {/* Logo and Desktop Nav */}
        <div className='flex space-x-14 items-center'>
          <Link to="/" className="text-2xl font-semibold flex items-center space-x-3 text-primary">
            <img src={Logo} alt="Dokter Gadungan Logo" className="w-20 h-auto" />
            <span>DOKTER BAHAGIA</span>
          </Link>
          <ul className='md:flex space-x-10 hidden'>
            {navItems.map(({ link, path }) => (
              <li key={link}>
                <Link to={path} className='block hover:text-pink-100 capitalize'>
                  {link}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Desktop Right Side */}
        <div className='space-x-6 hidden md:flex items-center'>
          <button onClick={() => setIsSearchOpen(!isSearchOpen)} className="hover:text-white transition">
            <FaSearch className="w-5 h-5" />
          </button>
     <div className="relative inline-block" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="px-4 py-2 bg-purple-600 text-white rounded"
      >
        Language
      </button>

      {isOpen && (
        <ul className="absolute mt-1 bg-white border rounded shadow-md w-32">
          <li
            onClick={() => {
              setLanguage("id");
              setIsOpen(false);
            }}
            className={`cursor-pointer px-4 py-2 hover:bg-purple-100 ${
              language === "id" ? "font-bold text-purple-600" : ""
            }`}
          >
            Indonesia
          </li>
          <li
            onClick={() => {
              setLanguage("en");
              setIsOpen(false);
            }}
            className={`cursor-pointer px-4 py-2 hover:bg-purple-100 ${
              language === "en" ? "font-bold text-purple-600" : ""
            }`}
          >
            English
          </li>
        </ul>
      )}  </div>
          <button className='bg-secondary py-2 px-4 transition-all duration-300 rounded hover:text-white hover:bg-indigo-600'>
            Sign Up
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className='md:hidden flex items-center gap-3'>
          <button onClick={() => setIsSearchOpen(!isSearchOpen)} className='text-white'>
            <FaSearch className='w-5 h-5 text-primary' />
          </button>
          <button onClick={toggleMenu} className='text-white focus:outline-none'>
            {IsMenuOpen ? (
              <FaX className='w-6 h-6 text-primary' />
            ) : (
              <FaBars className='w-6 h-6 text-primary' />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {IsMenuOpen && (
        <div className="md:hidden absolute right-4 top-24 w-64 bg-white text-gray-800 rounded-xl shadow-xl ring-1 ring-black/5 z-50 transform transition-all duration-300 origin-top-right scale-100 opacity-100">
          <ul className="flex flex-col space-y-3 p-4">
            {navItems.map(({ link, path }) => (
              <li key={link}>
                <Link
                  to={path}
                  onClick={() => setIsMenuOpen(false)}
                  className="block text-base font-medium hover:text-purple-600 capitalize transition-colors"
                >
                  {link}
                </Link>
              </li>
            ))}
            <li>
              <a href="#" className="flex items-center gap-2 hover:text-purple-600">
                <MdLanguage /> Language
              </a>
            </li>
            <li>
              <button className="w-full text-left bg-purple-500 text-white py-2 px-4 rounded-md hover:bg-purple-600 transition">
                Sign Up
              </button>
            </li>
          </ul>
        </div>
      )}

      {/* Search Bar */}
      {isSearchOpen && (
        <div className="absolute top-full left-1/2 -translate-x-1/2 w-full md:w-[500px] px-4 py-4 bg-white shadow-lg z-40 rounded-b-xl transition-all duration-300">
          <input
            type="text"
            placeholder="Cari sesuatu..."
            className="w-full py-3 px-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
        </div>
      )}
    </nav>
  );
};

export default Navbar;
