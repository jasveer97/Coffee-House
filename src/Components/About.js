import React from 'react'
import Customer from './Customer'

const About = (props) => {
  return (
    <div>
      <div className="container-fluid">
        <div className="row bg">
          <h1 className='yello'>{props.compoName}</h1>

          <div className="col-md-6 col-xs-12 pb-2"><img src="./images/t2.jpg" class="card-img-top" alt="..."/></div>
          <div className="col-md-6 col-xs-12 about-content">
            <h3 className='yello'>Coffe House: From Bean to Cup</h3>
          <hr />
           <h5> As our motto suggests, we make every cup of coffe from scratch,everything from choosing the best coffee beans ,creating and grinding our own blends to a beautiful Aromatic cup of Coffee that is served to you with all our Love. 
                                Our Beautiful Ambience adds perfectly to the experience of our customers, whom we treat like Family.
                                We also offer a range of coffee products: Coffee Beans, blends, Creamers etc., customers can buy products from our cart system.
                                We also offer the option of venue booking for your special occasions.</h5></div>
         
        </div>
      </div>
      <Customer compoName="Our Happy Customer"/>
    </div>
  )
}

About.defaultProps={
  compoName:"About Us"
}


export default About