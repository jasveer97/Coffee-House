import React,{useState} from 'react'
import data from './ServicesApi';

const Services = (props) => {
  // const [venue, setVenue] = useState([
  //   {img:"./images/t2.jpg",title:"Parties and Occasions",disc:"Book yourself a Beutiful Evening with your Loved ones for celebrating any event at our cafe."},
  //   {img:"./images/card2.webp",title:"Our Menu",disc:"Our thoughtfully planned menu is sure to make your every occasion a memorable one for you and your guests."},
  //   {img:"./images/card3.jpg",title:"Our Service",disc:" Our customers are like our family. Our job is to serve you up with the best customer experience"},
  //   {img:"./images/t3.jpg",title:"Ambience",disc:"Allow us to make every occation of yours even more delightful with the beautiful ambiance and service."}
  // ])
  // const [products, setproducts] = useState([
  //   {img:"./images/card4.jpg",title:"Davidoff Café Instant Coffee, 100 Gram",disc:"Its pleasantly robust body is punctuated by a mildly acidic aftertaste Bean,type: 100 percent arabica  Rich aroma"},
  //   {img:"./images/card5.webp",title:"Continental Strong Coffee Powder 1Kg Bag ",disc:"Strong Coffee : 53% Coffee - 47% Chicory,Fresh aroma for a rich coffee experience"},
  //   {img:"./images/card6.jpg",title:"Nestle 400g Coffee Mate Richer & Creamer ",disc:"Capcity: 400g Coffee Mate Richer,It gives coffee a milky and creamy taste"},
  //   {img:"./images/card7.jpg",title:"NESCAFÉ Latté Instant Coffee Premix",disc:"5 sachets x 25g   Latte, with a perfect blend of coffee, milk and sugar put together for you in every sachet"}
  // ])
  return (
    <div className='bg'>
      <div className="container-fluid bg">
        <div className="row bg pb-3">
            <h2 className="yello pt-3 pb-2">{props.compName}</h2>
            <hr />
            <h4>Venue Booking</h4>
            {
              data[0].map(ele=>
                
          <div className="col-md-3 col-xs-12">
          <div className="card mt-3" >
             <img src={ele.img} className="card-img-top" alt="img"/>
                <div className="card-body">
                   <h5 className="card-title">{ele.title}</h5>
                   <p className="card-body">{ele.disc}</p>
                   
                </div>
              </div>
          </div>
                )
            }
      </div>
      <div className="row bg ">
      <hr />
      <h4>Our Products</h4>
      {
              data[1].map(ele=>
                
          <div className="col-md-3 col-xs-12">
          <div className="card mt-3 mb-3" >
             <img src={ele.img} className="card-img-top" alt="img"/>
                <div className="card-body">
                   <h5 className="card-title">{ele.title}</h5>
                   <p className="card-body">{ele.disc}</p>
                   
                </div>
              </div>
          </div>
                )
            }
      </div>
      </div>
    </div>
  )
}


export default Services