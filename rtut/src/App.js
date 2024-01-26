import './App.css';
import React, { useState } from 'react'
import News from './pages/News'
import './App.css'
function App(){
  const [category,setCategory]=useState("general");
  return(
    <div>
      <div style={{height:"60px", backgroundColor:"black", display:"flex", justifyContent:"space-evenly", padding:"9px"}}>
      <button className="sd" style={{marginLeft:"7%"}} onClick={()=>setCategory("general")}>General</button>
    <button className="sd" style={{marginLeft:"7%"}} onClick={()=>setCategory("business")}>Business</button>
    <button className="sd" style={{marginLeft:"7%"}} onClick={()=>setCategory("entertainment")}>Entertainment</button>
    <button className="sd" style={{marginLeft:"7%"}} onClick={()=>setCategory("heakth")}>Health</button>
    <button className="sd" style={{marginLeft:"7%"}} onClick={()=>setCategory("science")}>Sciences</button>
    <button className="sd" style={{marginLeft:"7%"}} onClick={()=>setCategory("sports")}>Sports</button>
    <button className="sd" style={{marginLeft:"7%"}} onClick={()=>setCategory("technology")}>Technology</button>
  </div>
  <div style={{fontSize:"x-large"}}>{category} news</div>
   <div><News category={category}/></div>
  </div>
  )
}
 export default App;