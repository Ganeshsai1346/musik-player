/**
 * /* eslint-disable jsx-a11y/anchor-is-valid
 *
 * @format
 */

/** @format */

import { useState } from "react";
import { Link } from "react-router-dom";
import "../css/SideBar.css";
import fire from "../firebase-config";

const SideBar = () => {
  const logout = (e) => {
    fire.auth().signOut();
    e.preventDefault();
  };

  const [show, setShow] = useState(false);

  return (
    <main className={show ? "space-toggle" : null}>
      <header className={`header ${show ? "space-toggle" : null}`}>
        <div className="header-toggle"></div>
      </header>
      <aside className={`sidebar ${show ? "show" : null} `}>
        <nav className="nav">
          <div className="nav-list">
            <div className="nav-logo">
              <i
                className="bx bx-menu nav-link-icon"
                id="btn"
                onClick={() => setShow(!show)}></i>
              <div className="logo_name nav-link-name">Music</div>
            </div>
            <div className="nav-logo search-field">
              <i className="bx bx-search nav-link-icon"></i>
              <input type="text" placeholder="Search..." />
              <span class="tooltip">Search</span>
            </div>
            <Link to="/" className="nav-link">
              <i className="bx bx-grid-alt nav-link-icon"></i>
              <span className="nav-link-name">Home</span>
            </Link>
            <Link to="/favourites" className="nav-link">
              <i className="bx bx-user nav-link-icon"></i>
              <span className="nav-link-name">Favourites</span>
            </Link>
            <Link to="/topsongs" className="nav-link">
              <i className="bx bx-chat nav-link-icon"></i>
              <span className="nav-link-name">Top Hits</span>
            </Link>
            <Link to="/trending" className="nav-link">
              <i className="bx bx-cart-alt nav-link-icon"></i>
              <span className="nav-link-name">Trending</span>
            </Link>
            <div className="profile-details">
              <span className="info name">Ganesh Sai</span>
              <span className="info job">Web Developer</span>
              <i
                className="info bx bx-log-out"
                id="log_out"
                onClick={logout}></i>
            </div>
          </div>
        </nav>
      </aside>
    </main>
  );
};

export default SideBar;
