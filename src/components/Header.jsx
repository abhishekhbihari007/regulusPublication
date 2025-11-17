import React, { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { FaBars, FaTimes, FaSearch, FaUser, FaGlobe } from 'react-icons/fa'
import './Header.css'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const headerRef = useRef(null)

  const toggleMenu = (e) => {
    if (e) {
      e.preventDefault()
      e.stopPropagation()
    }
    setIsMenuOpen(prev => !prev)
  }

  // Update menu position when header height changes
  useEffect(() => {
    if (isMenuOpen && headerRef.current) {
      const headerHeight = headerRef.current.offsetHeight
      const menu = document.querySelector('.main-navbar.mobile-open')
      if (menu) {
        menu.style.top = `${headerHeight}px`
      }
    }
  }, [isMenuOpen])

  // Close menu when clicking outside
  useEffect(() => {
    if (!isMenuOpen) {
      document.body.style.overflow = ''
      return
    }

    document.body.style.overflow = 'hidden'
    
    const handleClickOutside = (event) => {
      const target = event.target
      const menuButton = target.closest('.menu-toggle')
      const menuNav = target.closest('.main-navbar')
      
      // Don't close if clicking on menu button or inside menu
      if (menuButton || menuNav) {
        return
      }
      
      setIsMenuOpen(false)
    }

    // Add listener after a short delay to avoid immediate closure
    const timeoutId = setTimeout(() => {
      document.addEventListener('click', handleClickOutside, true)
    }, 200)

    return () => {
      clearTimeout(timeoutId)
      document.removeEventListener('click', handleClickOutside, true)
      document.body.style.overflow = ''
    }
  }, [isMenuOpen])

  return (
    <>
      {/* Top Header Bar - Logo, Login and Search */}
      <div className="top-header-bar" ref={headerRef}>
        <div className="container">
          <div className="top-header-content">
            {/* Left Side: Logo */}
            <div className="top-header-left">
              <Link to="/" className="logo-container">
                <img 
                  src="/ChatGPT_Image_Nov_16__2025__05_33_30_PM-removebg-preview.png" 
                  alt="Regulus International Publishing House" 
                  className="logo-image"
                  loading="eager"
                  fetchPriority="high"
                />
              </Link>
            </div>

            {/* Right Side: Login and Search Bar */}
            <div className="top-header-right-section">
              <Link to="/login" className="login-button">
                <span>Login/Create Portal Account</span>
                <svg className="login-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="3"/>
                  <path d="M12 1v6m0 6v6M5.64 5.64l4.24 4.24m4.24 4.24l4.24 4.24M1 12h6m6 0h6M5.64 18.36l4.24-4.24m4.24-4.24l4.24-4.24"/>
                </svg>
              </Link>
              
              {/* Search Bar - Just below login */}
              <div className="header-search-section">
                <div className="search-wrapper">
                  <input
                    type="text"
                    placeholder="Search title, author, ISBN..."
                    className="header-search-input"
                  />
                  <select className="search-category">
                    <option>All Products</option>
                    <option>Books</option>
                    <option>Journals</option>
                    <option>E-Collections</option>
                    <option>Authors</option>
                  </select>
                  <button className="search-submit-button" aria-label="Search">
                    <FaSearch />
                  </button>
                </div>
              </div>
            </div>

            {/* Mobile Utility Icons */}
            <div className="mobile-utility-icons">
              <Link to="/login" className="icon-button" aria-label="User Account">
                <FaUser />
              </Link>
              <button 
                className="icon-button" 
                aria-label="Search"
                onClick={(e) => {
                  e.preventDefault()
                  // Focus on search input if visible, or show mobile search
                  const searchInput = document.querySelector('.header-search-input')
                  if (searchInput) {
                    searchInput.focus()
                  } else {
                    // Could open a mobile search modal here
                    alert('Search functionality - Click the search bar in the header')
                  }
                }}
                type="button"
              >
                <FaSearch />
              </button>
              <button 
                className="icon-button menu-toggle" 
                onClick={(e) => {
                  e.preventDefault()
                  e.stopPropagation()
                  toggleMenu()
                }}
                aria-label="Menu"
                aria-expanded={isMenuOpen}
                type="button"
              >
                {isMenuOpen ? <FaTimes /> : <FaBars />}
              </button>
            </div>
          </div>
        </div>
        
        {/* Main Navigation Bar - Inside header for proper positioning */}
        <nav 
          className={`main-navbar ${isMenuOpen ? 'mobile-open' : ''}`} 
          style={{ 
            display: isMenuOpen ? 'block' : 'none'
          }}
        >
          <div className="container">
            <ul className="nav-menu">
              <li><Link to="/" onClick={() => setIsMenuOpen(false)}>Home</Link></li>
              <li className="dropdown">
                <Link to="/catalog" onClick={() => setIsMenuOpen(false)}>
                  Catalog
                </Link>
                <ul className="dropdown-menu">
                  <li><Link to="/catalog?genre=fiction" onClick={() => setIsMenuOpen(false)}>Fiction</Link></li>
                  <li><Link to="/catalog?genre=non-fiction" onClick={() => setIsMenuOpen(false)}>Non-Fiction</Link></li>
                  <li><Link to="/catalog?genre=children" onClick={() => setIsMenuOpen(false)}>Children's Books</Link></li>
                  <li><Link to="/catalog?genre=academic" onClick={() => setIsMenuOpen(false)}>Academic</Link></li>
                  <li><Link to="/catalog?genre=biography" onClick={() => setIsMenuOpen(false)}>Biography</Link></li>
                  <li><Link to="/catalog?genre=poetry" onClick={() => setIsMenuOpen(false)}>Poetry</Link></li>
                </ul>
              </li>
              <li><Link to="/services" onClick={() => setIsMenuOpen(false)}>Services</Link></li>
              <li><Link to="/authors" onClick={() => setIsMenuOpen(false)}>Authors</Link></li>
              <li><Link to="/about" onClick={() => setIsMenuOpen(false)}>About Us</Link></li>
              <li><Link to="/contact" onClick={() => setIsMenuOpen(false)}>Contact</Link></li>
            </ul>
          </div>
        </nav>
      </div>
    </>
  )
}

export default Header

