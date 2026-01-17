import { useEffect, useState } from "react"
import Form from "../components/Form/Form"
import axios from "axios"
import { Link, useNavigate } from "react-router-dom"



function SignUp() {
    const [data,setData]=useState({})
    const navigate=useNavigate()
    
 const inputs=[
        {
            type:"text",
            placeholder:"your first name",
            name:"first_name"

        },
        {
            type:"text",
            placeholder:"your last name",
            name:"last_name"
        },
        {
            type:"text",
            placeholder:"your user name",
            name:"user_name"
        },
        {
            type:"email",
            placeholder:"example@gmail.com",
            name:"email"
        },
        {
            type:"password",
            placeholder:"********",
            name:"password"
        },
        {
            type:"password",
            placeholder:"*********",
            name:"password_confirmation"
        },
        {
            type:"file",
            name:"profile_image",
          
        }
    ]
    useEffect(()=>{
        if (data.first_name) {
               axios.post("https://vica.website/api/register",data,{
            headers:{
                "Accept":"application/json",
                "Content-Type":"multipart/form-data"
            }
        }).then(res=>{
             localStorage.setItem("token",`Bearer ${res.data.data.token}`)
           
          navigate("/")
        }
            )
        .catch(err=>console.log(err))
            
        }
     
    },[data])

  return (
    <div>
        
      <Form inputs={inputs} submit="Sign Up" changeData={setData}/>
      <p style={{position:"absolute", top:"100%", left:"50%", transform:"translate(-50%,-50%)"}}>  Have an account? <Link to="/">Log In </Link></p>
    </div>
  )
}

export default SignUp
