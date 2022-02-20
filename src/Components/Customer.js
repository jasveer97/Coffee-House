import axios from 'axios';
import React,{useState,useEffect} from 'react';


const Customer = (props) => {
    const [clients, setclients] = useState([]);
    const getCleints=()=>{
        const URL="https://jsonplaceholder.typicode.com/users";
        const store=[];
       axios.get(URL)
       .then(res=>setclients(res.data))
        
    }
    useEffect(()=>getCleints(),[]);
  return (
    <div className="container-fluid">
        <div className="row bg">
        <h2 className='yello pt-3 pb-3'>{props.compoName}</h2>
        {console.log(clients)}
        {
            clients.map(client=>
                <div className="col-md-3 col-xs-4 mb-4">
                    <div className="card w-100">
                        <div className="card-body">
                            <p><i class="fa-solid fa-user"></i> {client.name}</p>
                            <p><i class="fa-solid fa-envelope"></i> {client.email}</p>
                            <p><i class="fa-solid fa-phone"></i> {client.phone}</p>
                            


                        </div>
                    </div>
                 </div>
                )
        }
        </div>
    </div>
    
  )
}

export default Customer