import React,{useEffect,useState} from 'react'

const News = (props) => {
    const[news,setnews]=useState([]);
    
    const getNews=async()=>{
      try{
        const res= await fetch('https://newsapi.org/v2/top-headlines?sources=google-news-in&apiKey=bec65e75ac884b728494ae0b285d862f');
        const data=await res.json()
        setnews(data.articles);

        console.log(news);
      }
      catch(err){
      console.log(err);
      
        
    }
  }    
    
    useEffect(()=>getNews(),[]);


  return (
      <>

    
      <div className="container-fluid bg">

      <div className="row bg" >
      <h2 className='yello pt-2 '>{props.compoName}</h2>
      {
        news.map(news=>
          <div className="col-md-4 col-xs-12">
    
          <div className="card mt-2 mb-2" style={{height:'600px'}} >
                  <img src={news.urlToImage} alt="" className='card-img-top' style={{width:'250px',height:'200px'}}/>
                  <div className="card-body">
                    <hr />
                      <h5 className="card-title">{news.title}</h5>
                      <hr />
                      <p className="card-text">{news.description}</p>
                  </div>
                </div>
          </div>
        )
      }
    
      

      
</div>
</div>

      </>
  )
}

News.defaultProps={
  compoName:"News"
}
export default News
