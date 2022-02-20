import React,{useState,createContext, useReducer, useEffect} from 'react'
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
import ContextCart from "./Components/ContextCart";
import { reducer } from "./Components/reducer";


export const CartContext = createContext();

const App = () => {


  const [menu,setmenu]=useState(MenuData);
  const filterMenu=(cat)=>{
      if(cat==='full')
        return setmenu(MenuData);
      const updateItem=MenuData.filter(ele=>ele.category===cat);
      setmenu(updateItem);
  }

 
// {Cart Function}

const initialState = {
  item: [{
    id: 'init',
    image: "",
    name: "",
    category: "",
    price: "",
    description:
      "",
      quantity:1,
  }],
  totalAmount: 0,
  totalItem: 0,
};

const [state, dispatch] = useReducer(reducer, initialState);

const printT=(ele)=>{
  return dispatch({
    type: "ADD_CART",
    payload: ele,
  });
};

const removeItem = (id) => {
  return dispatch({
    type: "REMOVE_ITEM",
    payload: id,
  });
};

const clearCart = () => {
  return dispatch({ type: "CLEAR_CART" });
};

const increment = (id) => {
  return dispatch({
    type: "INCREMENT",
    payload: id,
  });
};

const decrement = (id) => {
  return dispatch({
    type: "DECREMENT",
    payload: id,
  });
};

useEffect(() => {
  dispatch({ type: "GET_TOTAL" });
}, [state.item]);


useEffect(() => {
  dispatch({type: "DECREMENT",payload: "init"})
}, []);




  
  return (
    <div>
      <CartContext.Provider value={{ ...state, removeItem, clearCart, increment, decrement }}>

      <Router>
        <Header filterMenu={filterMenu}/>
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
          <Route exact path='/cart' element={<ContextCart />}></Route>
        </Routes>
        <Footer/>
      </Router>
      </CartContext.Provider>
      
    </div>
  )
}

export default App
