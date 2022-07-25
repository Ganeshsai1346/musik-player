/**
 * /* eslint-disable jsx-a11y/anchor-is-valid
 *
 * @format
 */

/** @format */

import "../css/SideBar.css";
import fire from "../firebase-config";

const SideBar = () => {
  const logout = (e) => {
    fire.auth().signOut();
    e.preventDefault();
  };

  let sidebar = document.querySelector(".sidebar");
  let closeBtn = document.querySelector("#btn");

  /* closeBtn.addEventListener("click", (e) => {
    sidebar.classList.toggle("open");
    menuBtnChange(); //calling the function(optional)
  });
 */
  // following are the code to change sidebar button(optional)
  const menuBtnChange = (e) => {
    if (sidebar.classList.contains("open")) {
      closeBtn.classList.replace("bx-menu", "bx-menu-alt-right"); //replacing the iocns class
    } else {
      closeBtn.classList.replace("bx-menu-alt-right", "bx-menu"); //replacing the iocns class
    }
  };

  return (
    <>
      <div className="sidebar">
        <div className="logo-details">
          <i className="bx bxs-music icon"></i>
          <div className="logo_name">Music</div>
          <i className="bx bx-menu" id="btn"></i>
        </div>
        <ul className="nav-list">
          <li>
            <i className="bx bx-search"></i>
            <input
              type="text"
              placeholder="Search..."
              style={{ color: "white" }}
            />
            <span className="tooltip">Search</span>
          </li>
          <li>
            <a href="#">
              <i className="bx bx-grid-alt"></i>
              <span className="links_name">Home</span>
            </a>
            <span className="tooltip">Home</span>
          </li>
          <li>
            <a href="#">
              <i className="bx bx-user"></i>
              <span className="links_name">Favourites</span>
            </a>
            <span className="tooltip">Favourites</span>
          </li>
          <li>
            <a href="#">
              <i className="bx bx-chat"></i>
              <span className="links_name">Top Hits</span>
            </a>
            <span className="tooltip">Top Hits</span>
          </li>
          {/* <li>
            <a href="#">
              <i className="bx bx-pie-chart-alt-2"></i>
              <span className="links_name">Analytics</span>
            </a>
            <span className="tooltip">Analytics</span>
          </li> */}
          {/* <li>
            <a href="#">
              <i className="bx bx-folder"></i>
              <span className="links_name">File Manager</span>
            </a>
            <span className="tooltip">Files</span>
          </li> */}
          <li>
            <a href="#">
              <i className="bx bx-cart-alt"></i>
              <span className="links_name">Trending</span>
            </a>
            <span className="tooltip">Trending</span>
          </li>
          {/* <li>
            <a href="#">
              <i className="bx bx-heart"></i>
              <span className="links_name">Saved</span>
            </a>
            <span className="tooltip">Saved</span>
          </li> */}
          {/*  <li>
            <a href="#">
              <i className="bx bx-cog"></i>
              <span className="links_name">Setting</span>
            </a>
            <span className="tooltip">Setting</span>
          </li> */}
          <li className="profile">
            <div className="profile-details">
              {/*  <img src="profile.jpg" alt="profileImg" /> */}
              <div className="name_job">
                <div className="name">Ganesh Sai</div>
                <div className="job">Web Developer</div>
              </div>
            </div>
            <i className="bx bx-log-out" id="log_out" onClick={logout}></i>
          </li>
        </ul>
      </div>
      <section className="home-section">
        <div className="text">Dashboard</div>
      </section>
    </>
  );
};

export default SideBar;
