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

const SideBar = ({ search }) => {
  const logout = (e) => {
    fire.auth().signOut();
    e.preventDefault();
  };

  const [searchInput, setSearchInput] = useState("");
  const [show, setShow] = useState(false);

  return (
    <main className={show ? "space-toggle" : null}>
      <header className={`header ${show ? "space-toggle" : null}`}>
        <div className="header-toggle"></div>
      </header>
      <aside className={`sidebar ${show ? "show" : null} `}>
        <nav className="nav">
          <ul className="nav-list">
            <li>
              <div className="nav-link">
                <i
                  className="bx bx-menu nav-link-icon"
                  id="btn"
                  onClick={() => setShow(!show)}></i>
                <div className="logo_name nav-link-name">Music</div>
              </div>
            </li>
            <li>
              <div className="nav-link search-field">
                <i
                  className="bx bx-search nav-link-icon"
                  onClick={() => search(searchInput)}></i>
                <input
                  type="text"
                  placeholder="Search..."
                  onChange={(event) =>
                    setSearchInput(event.currentTarget.value)
                  }
                />
                <span className="tooltip">Search</span>
              </div>
            </li>
            <li>
              <Link to="/" className="nav-link">
                <i className="bx bx-home-alt nav-link-icon"></i>
                <span className="nav-link-name">Home</span>
                <span className="tooltip">Home</span>
              </Link>
            </li>
            <li>
              <Link to="/favourites" className="nav-link">
                <i className="bx bx-heart nav-link-icon"></i>
                <span className="nav-link-name">Favourites</span>
                <span className="tooltip">Favourites</span>
              </Link>
            </li>
            <li>
              <Link to="/topsongs" className="nav-link">
                <i className="bx bx-chat nav-link-icon"></i>
                <span className="nav-link-name">Top Hits</span>
                <span className="tooltip">Top Hits</span>
              </Link>
            </li>
            <li>
              <Link to="/trending" className="nav-link">
                <i className="bx bxs-hot nav-link-icon"></i>
                <span className="nav-link-name">Trending</span>
                <span className="tooltip">Trending</span>
              </Link>
            </li>
            <div className="profile">
              <div className="profile-details">
                <span className="name">Ganesh Sai</span>
                <span className="job">Web Developer</span>
                <i
                  className="info bx bx-log-out"
                  id="log_out"
                  onClick={logout}></i>
              </div>
            </div>
          </ul>
        </nav>
      </aside>
    </main>
  );
};

export default SideBar;
