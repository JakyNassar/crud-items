import { useEffect, useState } from "react"
import Form from "../components/Form/Form"
import axios from "axios"
import {Link, useNavigate} from "react-router-dom"


function LogIn() {
  const [data,setData]=useState({})
  const navigate=useNavigate()
    const inputs=[
        {
            type:"email",
            placeholder:"example@gmail.com",
            name:"email"
        },
        {
            type:"password",
            placeholder:"*******",
            name:"password"
        }
    ]
    useEffect(()=>{
     if (data.email) {
      fetch("https://vica.website/api/task-login",{
          method:"POST",
          headers:{
            "Accept":"application/json",
            "Content-Type":"application/json"
          },
          body:JSON.stringify(data)
      }).then(res=>res.json())
      .then(res=>
       {
         localStorage.setItem("token",`Bearer ${res.token}`)
          navigate("/dashboard")
       }
      )
       .catch(err=>console.log(err))
    }
    }
    ,[data])
  return (
    <div>
     <Form inputs={inputs} submit="Log In" changeData={setData}/>
     <p style={{position:"absolute", top:"60%", left:"50%", transform:"translate(-50%,-50%)"}}>Dont have an account? <Link to="/signup">Sign Up</Link></p>
    </div>
  )
}

export default LogIn
