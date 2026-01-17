import { Outlet } from "react-router-dom"

function Auth() {
  return (
    <div style={{backgroundColor:"rgb(87, 87, 237) ", height:"40px"}}>
        {/* hello from auth */}
      <Outlet/>
    </div>
  )
}

export default Auth
