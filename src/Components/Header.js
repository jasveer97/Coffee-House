import React from 'react'
import { Link } from 'react-router-dom'

const Header = ({filterMenu}) => {
  return (
    <div>
          
         
          
          
          
          
         

          <nav className="navbar navbar-expand-lg navbar-dark " >
            <div className="container-fluid nav ">
                <a className="navbar-brand ms-5" href="#" style={{fontSize:"2rem"}}><img src='./favicon.ico'></img>&nbsp;Coffee House</a>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse " id="navbarSupportedContent">

                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0 ">

                        <li className="nav-item">
                        <Link to="/" className="nav-link active">Home</Link > 
                        </li>


                        <li className="nav-item dropdown">
                            <a className="nav-link text-white dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                              Menu
                            </a>
                            <ul className="dropdown-menu drop-font-size" aria-labelledby="navbarDropdown">
                              <li> <Link to="/menu" className="nav-link active" onClick={()=>filterMenu('ICED COFFEE')}>Cold Coffe</Link></li>
                              <li> <Link to="/menu" className="nav-link active" onClick={()=>filterMenu('COFFEE')}>Hot Coffee</Link></li>
                              <li> <Link to="/menu" className="nav-link active" onClick={()=>filterMenu('FOOD')}>Food</Link></li>
                              <li><hr className="dropdown-divider"/></li>
                              <li><Link to="/menu " className="nav-link active" onClick={()=>filterMenu('full')}>Full Menu</Link></li>
                            </ul>
                          </li>





                        <li className="nav-item">
                        <Link to="/gallery" className="nav-link active">Gallery</Link> 
                        </li>
                        
                        <li className="nav-item">
                        <Link to="/about" className="nav-link active">About Us</Link> 
                        </li>
                          <li className="nav-item dropdown">
                            <a className="nav-link text-white dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                              Services
                            </a>
                            <ul className="dropdown-menu drop-font-size" aria-labelledby="navbarDropdown">
                              <li> <Link to="/services" className="nav-link active">Services</Link></li>
                              <li> <Link to="/venue" className="nav-link active">Venue Book</Link></li>
                              <li><hr className="dropdown-divider"/></li>
                              <li><Link to="/news " className="nav-link active">Latest News</Link></li>
                              <li> <Link to="/customer" className="nav-link active">Our Customers</Link></li>
                            </ul>
                          </li>
                        <li className="nav-item">
                        <Link to="/contact" className="nav-link active">Contact Us</Link> 
                        </li>
                        <li className="nav-item">
                        <Link to="/cart" className="nav-link active"><i className="fa-solid fa-cart-shopping" ></i></Link> 
                        </li>
                       
                        
                        
                    
                    </ul>
                
                </div>
            </div>
        </nav>

        
    </div>
  )
}

export default Header