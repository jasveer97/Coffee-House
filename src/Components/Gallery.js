import React from 'react'
import './style.css'

const Gallery = (props) => {
  return (
    
      <div className="container-fluid gallery">
        <h1 >{props.compoName}</h1>
        <h2>Latte` Art</h2>
        <div className="row latte">
          <div className="col-md-3 col-xs-6 gallery-img"><img src="./images/g2.jpg" class="img-thumbnail" alt="..."/></div>
          <div className="col-md-3 col-xs-6 gallery-img"><img src="./images/g4.jpg" class="img-thumbnail" alt="..."/></div>
          <div className="col-md-3 col-xs-6 gallery-img"><img src="./images/g3.jpg" class="img-thumbnail" alt="..." /></div>
          <div className="col-md-3 col-xs-6 gallery-img"><img src="./images/g1.jpg" class="img-thumbnail" alt="..." /></div>
        </div>
        <h2>Our Other Drinks</h2>
        <div className="row drinks">
          <div className="col-md-3 col-xs-6 gallery-img"><img src="./images/l2.jpeg" class="img-thumbnail" alt="..."/></div>
          <div className="col-md-3 col-xs-6 gallery-img"><img src="./images/l1.jpg" class="img-thumbnail" alt="..."/></div>
          <div className="col-md-3 col-xs-6 gallery-img"><img src="./images/l4.jpg" class="img-thumbnail" alt="..." /></div>
          <div className="col-md-3 col-xs-6 gallery-img"><img src="./images/l3.jpg" class="img-thumbnail" alt="..." /></div>
        </div>
        <h2>Our pastries and cakes</h2>
        <div className="row drinks">
          <div className="col-md-3 col-xs-6 gallery-img"><img src="./images/g5.jpg" class="img-thumbnail" alt="..."/></div>
          <div className="col-md-3 col-xs-6 gallery-img"><img src="./images/g8.webp" class="img-thumbnail" alt="..."/></div>
          <div className="col-md-3 col-xs-6 gallery-img"><img src="./images/g6.jpg" class="img-thumbnail" alt="..." /></div>
          <div className="col-md-3 col-xs-6 gallery-img"><img src="./images/g7.jpg" class="img-thumbnail" alt="..." /></div>
        </div>
        <h2>Our Ambience</h2>
        <div className="row drinks">
          <div className="col-md-3 col-xs-6 gallery-img"><img src="./images/t4.jpg" class="img-thumbnail" alt="..."/></div>
          <div className="col-md-3 col-xs-6 gallery-img"><img src="./images/t1.jpg" class="img-thumbnail" alt="..."/></div>
          <div className="col-md-3 col-xs-6 gallery-img"><img src="./images/t3.jpg" class="img-thumbnail" alt="..." /></div>
          <div className="col-md-3 col-xs-6 gallery-img"><img src="./images/t2.jpg" class="img-thumbnail" alt="..." /></div>
        </div>
        <h2>Organised party events</h2>
        <div className="row drinks">
          <div className="col-md-3 col-xs-6 gallery-img"><img src="./images/b4.webp" class="img-thumbnail" alt="..."/></div>
          <div className="col-md-3 col-xs-6 gallery-img"><img src="./images/b1.jpg" class="img-thumbnail" alt="..."/></div>
          <div className="col-md-3 col-xs-6 gallery-img"><img src="./images/b2.jpg" class="img-thumbnail" alt="..." /></div>
          <div className="col-md-3 col-xs-6 gallery-img"><img src="./images/b3.jpg" class="img-thumbnail" alt="..." /></div>
        </div>
      </div>
    
  )
}

Gallery.defaultProps={
  compoName:"Our Gallery"
}

export default Gallery