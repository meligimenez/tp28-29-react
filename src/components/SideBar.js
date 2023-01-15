import React from 'react'
import logoDH from '../assets/images/logo-DH.png'
import { BiTable } from "react-icons/bi";
import { AiOutlineAreaChart } from "react-icons/ai";
import { AiTwotoneFolder } from "react-icons/ai";
import { BiTachometer } from "react-icons/bi";


export const SideBar = () => {
  return (
    <ul className="navbar-nav bg-gradient-secondary sidebar sidebar-dark accordion" id="accordionSidebar">


      <a className="sidebar-brand d-flex align-items-center justify-content-center" href="/">
        <div className="sidebar-brand-icon">
          <img className="w-100" src={logoDH} alt="Digital House" />
        </div>
      </a>


      <hr className="sidebar-divider my-0" />


      <li className="nav-item active">
        <a className="nav-link" href="/">
          <BiTachometer />
          <span>Dashboard - DH movies</span></a>
      </li>


      <hr className="sidebar-divider" />


      <div className="sidebar-heading">Actions</div>


      <li className="nav-item">
        <a className="nav-link collapsed" href="/">
          <AiTwotoneFolder />
          <span>Pages</span>
        </a>
      </li>


      <li className="nav-item">
        <a className="nav-link" href="/">
          <AiOutlineAreaChart />
          <span>Charts</span></a>
      </li>


      <li className="nav-item">
        <a className="nav-link" href="/">
          <BiTable />
          <span>Tables</span></a>
      </li>


      <hr className="sidebar-divider d-none d-md-block" />
    </ul>

  )
}
