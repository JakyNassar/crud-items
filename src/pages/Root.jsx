import axios from "axios"
import { Outlet, useNavigate } from "react-router-dom"


function Root() {
    const navigate=useNavigate()
    const logOut=()=>{
        axios.post("https://vica.website/api/logout",null,{
            headers:{
                "Accept":"application/json",
                "authorization":localStorage.getItem("token")
            }
        }).then(res=>
        {
            localStorage.removeItem("token")
            navigate("/")
            console.log(res)
        }
        ).catch(err=>console.log(err))
    }
  return (
    <div>
      <button style={{textDecoration:"none", border:"2px solid black" ,color:"#333",borderRadius:"4px",height:"25px",padding:"2px 5px"}} onClick={logOut}>Log Out  </button>
      <Outlet/>
    </div>
  )
}

export default Root
