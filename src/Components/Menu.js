import { logDOM } from '@testing-library/react'
import React from 'react'

import './style.css'

const Menu = ({menu,printT}) => {

  return (
    <div className="container-fluid menu">
      <div className="row">
      <h2 className='yello'>Menu</h2>
          {
            menu.map(ele=>
              <div className="col-md-3 col-xs-12">

                  <div className="card mt-3" >
                    <img src={ele.image} className="card-img-top" alt="img"/>
                    <div className="card-body">
                      <h5 className="card-title">{ele.price} ₹</h5>
                      <h6 className="card-title">{ele.name}</h6>
                      <p className="card-body">{ele.description}</p>
                      {/* <a  className="btn ">Order</a> */}
                      <a  className="btn  mt-2" onClick={()=>printT(ele)}>Add to cart</a>
                    </div>
                  </div>
              </div>
            )
          }

      </div>
    </div>
    
  )
}

export default Menu