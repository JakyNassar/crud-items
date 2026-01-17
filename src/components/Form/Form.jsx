
import './Form.css'
function Form({inputs,submit,changeData}) {
    let data=inputs[0]?.value?{
      name:inputs[0].value,
      price:inputs[1].value,
    }:{}
  const changeHandle=(e)=>{
          e.preventDefault()
          changeData(data)
  }
   
  return (
    <div className='form-wrapper'>
        <h1>{submit}</h1>
      <form onSubmit={changeHandle} className='form'>
        {inputs?.map((input,index)=>{
            return( 
            <div key={index}>
                {input.type=="file"?<img src={input.value} width={"120px"}/>:""}
             <input  type={input.type} placeholder={input.placeholder} defaultValue={input.type!="file"?input.value:null}  onChange={(event)=>data={...data,[input.name]:[input.type]=="file"?event.target.files[0]:event.target.value}} />

            </div>
         )
        })}
        <input className='formBtn' type="submit" value={submit} />
        
      </form>
    </div>
  )
}

export default Form
