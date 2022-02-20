import React from 'react'
import Customer from './Customer'


const Venue = (props) => {
  return (
    <div>
                         {/* contact form */}
      <div className="container-fluid venue" style={{background: "url('./images/Venue-bg.jpg') no-repeat center center/cover"}}>
              <div className="tm-main-section">
              <div className="container" id="main">
                <section className="tm-section">
                  <h2 className="col-lg-12 margin-bottom-50  "  ><b className='yello'>{props.compoName}</b></h2>
                  <form action="#" method="get" className="tm-contact-form">
                    <div className="col-lg-12 col-md-12">
                      <div className="form-group">
                      <input type="text" id="contact_name" className="form-control1" placeholder="Name" />
                      </div>
                      <div className="form-group">
                        <input type="email" id="contact_email" className="form-control1" placeholder="E-mail" />
                      </div>
                      <div className="form-group">
                        <input type="tel" id="contact_subject" className="form-control1" placeholder="Mobile Number" />
                      </div>
                      

                      <div className="form-group" >
                        <button className="tm-more-button" type="submit" name="submit">Book Venue</button> 
                      </div>  

                    </div>
                    
                    

                    

                  </form>
                </section>
              </div>
            </div> 
              
        </div>

        
    </div>
  )
}

Venue.defaultProps={
  compoName:"Book Venue"
}

export default Venue