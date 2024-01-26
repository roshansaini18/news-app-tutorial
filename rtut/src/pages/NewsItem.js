import React from 'react'
import image from '../assests/true.jpeg'
const NewsItem = ({title,description,src,url}) => {
  return (
    <div className="card" style={{width:"360px",display:"inline-block",paddingTop:"5px",paddingLeft:"5px",paddingRight:"5px",borderRadius:"10px",marginLeft:"17px",marginTop:"20px"}}>
  <img src={src?src:image} className="card-img-top" alt="News pics" style={{width:"350px",height:"200px"}}></img>
  <div className="card-body" >
    <h5 className="card-title" style={{height:"50px"}}>{title.slice(0,50)}</h5>
    <p className="card-text" style={{height:"80px"}}>{description?description.slice(0,100):"click on go somewhere to know more"}</p>
    <a href={url} className="btn btn-primary">Go somewhere</a>
  </div>
</div>
  )
}

export default NewsItem
