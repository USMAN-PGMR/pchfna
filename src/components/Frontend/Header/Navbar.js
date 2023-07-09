import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (

    <nav className="navbar navbar-expand-lg bg-white shadow  ">
      <div className="container-fluid px-4  py-lg-3">
        <a className="navbar-brand" ><img src="https://pchfna.org/wp-content/uploads/2021/06/sticky-logo-PCHFNA-red.png" alt="" className='w-75' /></a>
        <div className="d-flex d-sm-block d-lg-none  ">
          <div className="btn searchBtn ms-2 me-0"><i className="fa fa-search ps-2"></i></div>
        </div>
        <button className="navbar-toggler border-0 btn" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className='me-2 fw-ligt menu' style={{fontSize:'16px'}}>Menu</span>
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse border-0 outline-0" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 fw-semibold " style={{ fontSize: '17px' }}>
            <li className="nav-item ">
              <Link to='/' className="nav-link px-0 mt-4 navText  " aria-current="page" >Home</Link>
            </li>
            <li className="nav-item dropdown      ">
              <a className="nav-link px-0  btnWidth float-center ms-lg-5  m-0" href="#" role="hover" data-bs-toggle="dropdown" >
                About PCHFNA
              </a>
              <ul className="dropdown-menu mt-4 rounded-0 p-2" >
                <li><Link className="dropdown-item" >PCHFNA Bord</Link></li>
                <li><Link className="dropdown-item" >Financial</Link></li>
                {/* <li><hr className="dropdown-divider"/></li> */}
                <li><Link className="dropdown-item" >Endorsments</Link></li>
                <li><Link className="dropdown-item" >Privacy Policy</Link></li>
                <li><Link className="dropdown-item" >FAQ's</Link></li>
              </ul>
            </li>
            <li className="nav-item  ">
              <Link to='#' className="nav-link btnWidth px-0 " >US Chapters</Link>
            </li>
            <li className="nav-item dropdown      ">
              <Link className="nav-link ms-3 pe-0  btnWidth1    " role="hover" data-bs-toggle="dropdown" >
                News & Stories
              </Link>
              <ul className="dropdown-menu mt-4 rounded-0 p-2" >
                <li><Link className="dropdown-item" >Events</Link></li>
                <li><Link className="dropdown-item" >Blogs</Link></li>
                {/* <li><hr className="dropdown-divider"/></li> */}
                <li><Link className="dropdown-item" >CHD Warroirs</Link></li>
                <li><Link className="dropdown-item" >CHD Videos</Link></li>
                <li><Link className="dropdown-item" >Contruction Videos</Link></li>
                <li><Link className="dropdown-item" >Annual Reports</Link></li>
              </ul>
            </li>
            <li className="nav-item">
              <Link to='#' className="nav-link btnWidth  " >Contact Us</Link>
            </li>
            <li className="nav-item dropdown      ">
              <Link className="nav-link ms-2 pe-0  btnWidth1    " role="hover" data-bs-toggle="dropdown" >
                Ways to Donate
              </Link>
              <ul className="dropdown-menu mt-4 rounded-0 p-2" >
                <li><Link className="dropdown-item" >Donate-Zakat</Link></li>
                <li><Link className="dropdown-item" >Donate-Sadaqa</Link></li>
                {/* <li><hr className="dropdown-divider"/></li> */}
                <li><Link className="dropdown-item" >Double Your Impact</Link></li>
                <li><Link className="dropdown-item" >Gifts of Stocks</Link></li>
               
              </ul>
            </li>
            <li className="nav-item ms-2 mb-2 mb-lg-0 ">
              <button className=" btn mt-1 mt-lg-3 dangerBtn  mx-2 rounded-0  " >Donate</button>
              {/* <button className=" btn mt-1 mt-lg-3 btn-dark mx-2 rounded-0 d-inline-block" >Volunteer</button> */}
            
            </li>
            <li className="nav-item ms-2 mb-2 mb-lg-0 ">
              {/* <button className=" btn mt-1 mt-lg-3 btn-danger mx-2 rounded-0 d-inline-block " >Donate</button> */}
              <button className=" btn mt-lg-1 mt-lg-3 darkBtn mx-2 rounded-0 " >Volunteer</button>
            
            </li>
           

            <div className="button-group   ms-lg-5">
              <button className="btn btnSocial btn-twitter"><i className="fa fa-twitter"></i></button>
              <button className="btn btnSocial btn-facebook"><i className="fa fa-facebook-f"></i></button>
              <button className="btn btnSocial btn-linkedin"><i className="fa fa-linkedin-square"></i></button>
              <button className="btn btnSocial btn-youtube"><i className="fa fa-youtube-play"></i></button>
              <button className="btn btnSocial btn-instagram"><i className="fa fa-instagram"></i></button>
            </div>

        {/* </li> */}



          </ul>
          {/* <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form> */}
        </div>
        {/* <div className="vl min-h-100 d-flex d-sm-none d-lg-block">
        </div> */}
        <div className="vl  d-none d-lg-block h-100 my-0 py-0">
          <div className="btn py-4"><i className="fa fa-search ps-2"></i></div>
        </div>
      </div>
    </nav>
  )
}
