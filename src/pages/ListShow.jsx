import axios from "axios"
import { useEffect, useState } from "react"
import ItemCard from "../components/ItemCard/ItemCard"
import "./ListShow.css"
import { Link } from "react-router-dom"


function ListShow() {
  const [items,setItems]=useState([])
  const [ reload,setReload]=useState(false)
  useEffect(()=>{
    axios.get("https://vica.website/api/items",{
      headers:{
        "Authorization":localStorage.getItem("token"),
        "Accept":"application/json",
      }
    }).then(res=>
    {
      setItems(res.data)
      console.log(res.data)
    }
    )
    .catch(err=>console.log(err))
  },[reload])
  return (
    <div className="wrapper">
    <Link to="/dashboard/additem" style={{textDecoration:"none", border:"2px solid black" ,color:"#333",borderRadius:"4px",height:"25px",padding:"2px 5px"}}>Add Item</Link>
      {
        items?.map((item)=>{
          return <ItemCard key={item.id} item={item} setReload={setReload} />
        })
      }
      
    </div>
  )
}

export default ListShow
