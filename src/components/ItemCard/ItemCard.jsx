import axios from 'axios'
import './ItemCard.css'
import { Link } from 'react-router-dom'

function ItemCard({item , setReload}) {
  
  const deleteItem=()=>{
    axios.delete(`https://vica.website/api/items/${item.id}`,{
      headers:{
        "Accept":"application/json",
        "Authorization":localStorage.getItem("token")
      }
    }).then(res=>setReload(prev=>!prev))
    .catch(err=>console.log(err))
    
  }

  return (
    <div className='cardContainer'>
      <h1> {item.name}</h1>
      <img src={item.image_url} alt=""/>
      <p>{item.price}</p>
     <div>
          <Link to={`/dashboard/edit/${item.id}`}> update</Link>
         <button onClick={deleteItem}>delete</button>
    </div>
     
 
    </div>
  )
}

export default ItemCard
