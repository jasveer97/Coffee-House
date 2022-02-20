import React,{useState,} from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import './style.css'
import Header from './Components/Header'
import Footer from './Components/Footer'
import About from './Components/About'
import Home from './Components/Home'
import Contact from './Components/Contact'
import Gallery from './Components/Gallery'
import MenuData from './Components/menuApi'
import Menu from './Components/Menu'
import News from './Components/News'
import Services from './Components/Services'
import Venue from './Components/Venue'
import Customer from './Components/Customer'
import Cart from './Components/Cart'




const App = () => {
  const [menu,setmenu]=useState(MenuData);
  const[Products,setProducts]=useState([]);
  

  const filterMenu=(cat)=>{
      if(cat==='full')
        return setmenu(MenuData);
      const updateItem=MenuData.filter(ele=>ele.category===cat);
      setmenu(updateItem);
  }

  const getItem=[];

  const printT=(ele)=>{
   getItem.push(ele);
  //  setProducts(...getItem);
    // console.log(Products);
    console.log(getItem);
    // console.log();
  }

  const clickCart=()=>{
    setProducts(getItem);
    console.log('called');
  }
  
  return (
    <div>
      
      <Router>
        <Header filterMenu={filterMenu} clickCart={clickCart}/>
        <Routes>
          <Route exact path='/' element={<Home/>}></Route>
          <Route exact path='/about' element={<About/>}></Route>
          <Route exact path='/services' element={<Services  compName="Our Services"/>}></Route>
        
          <Route exact path='/menu' element={<Menu menu={menu} printT={printT}/>}></Route>
          <Route exact path='/contact' element={<Contact/>}></Route>
          <Route exact path='/gallery' element={<Gallery/>}></Route>
          <Route exact path='/news' element={<News/>}></Route>
          <Route exact path='/venue' element={<Venue/>}></Route>
          <Route exact path='/customer' element={<Customer compoName="Our Happy Customer"/>}></Route>
          <Route exact path='/cart' element={<Cart Products={Products} />}></Route>
        </Routes>
        <Footer/>
      </Router>
      
    </div>
  )
}

export default App
