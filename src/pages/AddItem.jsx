import { useEffect, useState } from "react"
import Form from "../components/Form/Form"
import axios from "axios"
import { useNavigate } from "react-router-dom"


function AddItem() {
    const [data,setData]=useState({})
    const navigate=useNavigate()
    const items=[
        {
            type:"text",
            placeholder:"item name",
            name:"name"
        },
         {
            type:"number",
            placeholder:"price",
            name:"price"
        },
         {
            type:"file",
            name:"image"
        },
    ]
    useEffect(()=>{
        if (data.price) {
            axios.post("https://vica.website/api/items",data,{
                headers:{
                    "Accept":"application/json",
                    "Content-Type":"multipart/form-data",
                    "Authorization":localStorage.getItem("token")
                }
            }).then(res=>{
               navigate("/dashboard")
                console.log(res.data)
            })
            .catch(err=>console.log(err))
            
        }
    },[data])
   
  return (
    <div>
        
   <Form inputs={items} submit="Add Item" changeData={setData}/>
    </div>
  )
}

export default AddItem
