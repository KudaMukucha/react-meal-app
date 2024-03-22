import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Search() {
    const [input,setInput] = useState('')
    const navigate = useNavigate()
    const submitHandler =(e)=>{
        // console.log('hey')
        e.preventDefault()
        navigate('/results/'+input)
    }
  return (
    <form onSubmit={submitHandler}>
      <input type="text" placeholder="Search meals..." value={input} onChange={(e)=> setInput(e.target.value)}/>
    </form>
  );
}
