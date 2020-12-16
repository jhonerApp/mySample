import React, { useState } from "react";
import * as FaIcons from "react-icons/fa";
import * as AiCons from "react-icons/ai";
import { Link } from "react-router-dom";
import { LibraryItem } from "../NavbarItem/Library";
import { StudentItem } from "../NavbarItem/Students";
import { SettingItem } from "../NavbarItem/Setting";


import "./Navbar.css";
import { IconContext } from "react-icons";

function Navbar() {
  const [sidebar, setSidebar] = useState({
    onValueClick: false,
    onValueText: "",
  });

  const showSidebar = (itemText) => {
    setSidebar({ onValueClick: !sidebar.onValueClick, onValueText: itemText });
    console.log(sidebar.onValueText);
  };

  return (
    <>
      {/* <IconContext.Provider value={{color: '#fff'}}>
            <div classNameName="navbar">
                <Link to="#" classNameName='menu-bars' >
                    <FaIcons.FaBars onClick={showSidebar} />
                </Link>
            </div>
            <nav classNameName={sidebar ? 'nav-menu active' : 'nav-menu'} >
                <ul classNameName='nav-menu-items'  onClick={showSidebar} >
                   <li classNameName="navbar-toggle">
                       <Link to="#" classNameName='menu-bars'>
                           <AiCons.AiOutlineClose />
                       </Link>
                   </li>
                   {SidebarData.map((item, index) =>{
                        return(
                            <li key={index} classNameName={item.cName} > 
                              <Link to={item.path} >
                                  {item.icon}
                                  <span>{item.title}</span>
                              </Link>
                            </li>
                        )
                   })}
                </ul>
            </nav>
            </IconContext.Provider> */}

      <aside className="left-sidebar bg-sidebar">
        <div id="sidebar" className="sidebar sidebar-with-footer">
          <div className="app-brand">
            <a href="/" title="Sleek Dashboard">
              <img
                alt=""
                src="./assets/img/ssblue.jpg"
                style={{ width: 30, height: 30 }}
              />
              {/* <svg className="brand-icon" xmlns="" preserveAspectRatio="xMidYMid" width="30" height="33" viewBox="0 0 30 33"><g fill="none" fill-rule="evenodd"><path className="logo-fill-blue" fill="#7DBCFF" d="M0 4v25l8 4V0zM22 4v25l8 4V0z"/><path className="logo-fill-white" fill="#FFF" d="M11 4v25l8 4V0z"/></g></svg> */}
              <span className="brand-name text-truncate">SHULEPRO V1</span>
            </a>
          </div>
          <div className="sidebar-scrollbar">
            <ul className="nav sidebar-inner" id="sidebar-menu">
              <li
                className={
                  sidebar.onValueText === "STUDENT INFORMATION"
                    ? "has-sub active expand"
                    : "has-sub"
                }
              >
                <a
                  className="sidenav-item-link"
                  href="/"
                  data-toggle="collapse"
                  data-target="#student_information"
                  aria-expanded="false"
                  aria-controls="student_information"
                >
                  <i className="mdi  mdi-account-multiple"></i>
                  <span className="nav-text">STUDENT</span>{" "}
                  <b className="caret"></b>
                </a>

                <ul
                  className={
                    sidebar.onValueText === "STUDENT INFORMATION"
                      ? "collapse show"
                      : "collapse"
                  }
                  id="student_information"
                  data-parent="#sidebar-menu"
                  onClick={() => showSidebar("STUDENT INFORMATION")}
                >
                  <div className="sub-menu">
                    {StudentItem.map((item, index) => {
                      return (
                        <li key={index} className="sidenav-item-link">
                          <Link to={item.path}>
                            <span>{item.title}</span>
                          </Link>
                        </li>
                      );
                    })}
                  </div>
                </ul>
              </li>
              <li
                className={
                  sidebar.onValueText === "LIBRARY"
                    ? "has-sub active expand"
                    : "has-sub"
                }
              >
                <a
                  className="sidenav-item-link"
                  href="/"
                  data-toggle="collapse"
                  data-target="#library"
                  aria-expanded="false"
                  aria-controls="library"
                >
                  <i className="mdi  mdi-book-multiple-variant"></i>
                  <span className="nav-text">LIBRARY</span>{" "}
                  <b className="caret"></b>
                </a>
                <ul
                  className={
                    sidebar.onValueText === "LIBRARY"
                      ? "collapse show"
                      : "collapse"
                  }
                  id="library"
                  data-parent="#sidebar-menu"
                  onClick={() => showSidebar("LIBRARY")}
                >
                  <div className="sub-menu">
                    {LibraryItem.map((item, index) => {
                      return (
                        <li key={index} className="sidenav-item-link">
                          <Link
                            to={item.path}
                            onClick={() => showSidebar(item.title)}
                          >
                            <span>{item.title}</span>
                          </Link>
                        </li>
                      );
                    })}
                  </div>
                </ul>
              </li>

              <li
                className={
                  sidebar.onValueText === "SETTING"
                    ? "has-sub active expand"
                    : "has-sub"
                }
              >
                <a
                  className="sidenav-item-link"
                  href="/"
                  data-toggle="collapse"
                  data-target="#setting"
                  aria-expanded="false"
                  aria-controls="setting"
                >
                  <i className="mdi  mdi-settings"></i>
                  <span className="nav-text">SETTING</span>{" "}
                  <b className="caret"></b>
                </a>
                <ul
                  className={
                    sidebar.onValueText === "SETTING"
                      ? "collapse show"
                      : "collapse"
                  }
                  id="setting"
                  data-parent="#sidebar-menu"
                  onClick={() => showSidebar("SETTING")}
                >
                  <div className="sub-menu">
                    {SettingItem.map((item, index) => {
                      return (
                        <li key={index} className="sidenav-item-link">
                          <Link
                            to={item.path}
                            onClick={() => showSidebar(item.title)}
                          >
                            <span>{item.title}</span>
                          </Link>
                        </li>
                      );
                    })}
                  </div>
                </ul>
              </li>
            </ul>
          </div>

          <hr className="separator" />
          <div className="sidebar-footer">
            <div className="sidebar-footer-content">
              <h6 className="text-uppercase">
                Cpu Uses <span className="float-right">40%</span>
              </h6>
              <div className="progress progress-xs">
                <div
                  className="progress-bar active"
                  style={{ width: 40 }}
                  role="progressbar"
                ></div>
              </div>
              <h6 className="text-uppercase">
                Memory Uses <span className="float-right">65%</span>
              </h6>
              <div className="progress progress-xs">
                <div
                  className="progress-bar progress-bar-warning"
                  style={{ width: 60 }}
                  role="progressbar"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}

export default Navbar;
