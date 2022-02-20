import React from 'react'
import { Link } from 'react-router-dom'
import Services from './Services'


const Home = () => {
  return (
    <div>
      <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">

        <div className="carousel-indicators">

          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>

        </div>

        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="./images/banner1.jpg" className="d-block w-100 car-img" alt="..."/>
            <div className="carousel-caption d-none d-md-block">
              <h3>Coffe House</h3>
              <p> Explore with us the world filled with the beautiful Aroma of Freshly Made Coffee, from Bean to Cup.</p>
            </div>
          </div>

          <div className="carousel-item">
            <img src="./images/banner2.jpg" className="d-block w-100 car-img" alt="..."/>
            <div className="carousel-caption d-none d-md-block">
            <h3 className="h3">Coffee Beans, the most important aspect of a flavour packed cup of coffee.</h3>
              <p>Explore and learn about the wide range of cofee beans...check out our cofee products in the Our Products tab.</p>
            </div>
          </div>

          <div className="carousel-item">
            <img src="./images/banner3.gif" className="d-block w-100 car-img" alt="..."/>
            <div className="carousel-caption d-none d-md-block">
              <h3>Latte Art</h3>
              <p>The best way to embellish a cup of coffee is through Latte Art.Check out the beautiful latte art by our professionals in Galleries tab.</p>
            </div>
          </div>

          <div className="carousel-item">
            <img src="./images/banner4.jpg" className="d-block w-100 car-img" alt="..."/>
            <div className="carousel-caption d-none d-md-block">
              <h3>Choose your Blend.</h3>
              <p>Explore the wide range of coffee products available and buy the best one for yourself from your cart.</p>
            </div>
          </div>

        </div>

        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>

      </div>
      <div className='container-fluid home-body'>
        <div className='row'>

        <div className="col-md-5 col-xs-12 home-img" ><img src='./images/homeGif.gif' className='' style={{height:"85vh"}}></img></div>
        <div className="col-md-7 col-xs-12 home-content" > 
            <h1>Welcome to my Coffe House</h1>
            <h3>We are here to serve you better</h3>
            <h5>India's best Coffe selling caffe</h5>
            <Link to="/menu"> <button className="home-btn"> Order Now</button></Link></div>
      </div>
        </div>
        
      <Services/>
    </div>
  )
}

export default Home