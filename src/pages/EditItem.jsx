import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import Form from "../components/Form/Form"


function EditItem() {
    const [data,setData]=useState({})
    const [items,setItems]=useState([])
    const params=useParams()
    const navigate=useNavigate()
    useEffect(()=>{
        axios.get(`https://vica.website/api/items/${params.id}`,{
            headers:{
                "Accept":"application/json",
                "Authorization":localStorage.getItem("token")
            }
        }).then(res=>setItems([
            {
              type:"text",
              name:"name",
              value:res.data.name

            },
               {
              type:"number",
              name:"price",
              value:res.data.price

            },
               {
              type:"file",
              name:"image",
              value:res.data.image_url

            }
        ]))
           
            
    
    },[])
    useEffect(()=>{
        axios.post(`https://vica.website/api/items/${params.id}`,{...data,"_method":"PUT"},{
            headers:{
                "Accept":"application/json",
                "Content-Type":"multipart/form-data",
                "Authorization":localStorage.getItem("token")

            }
        }).then(res=>navigate("/dashboard"))
        .catch(err=>console.log(err))
    },[data])
  return (
    <div>
      <Form inputs={items} submit="edit" changeData={setData}/>
    </div>
  )
}

export default EditItem
