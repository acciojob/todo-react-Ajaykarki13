import {useState} from "react";


const Todo = () =>
{
const [task,setTask] = useState({})
const [list,setList] = useState([])

function handleChange({target})
{
   const taskname  = target.value
setTask((prev)=>({...prev,task:taskname,id:Date.now()}))
}

const handleSubmit = (e) =>
{
    e.preventDefault();
    setList((prev)=> [task,...prev])
    setTask({})
}

const handleDelete = (targetindex)=>
{
    setList((prev)=> prev.filter((t,index)=> {return index!=targetindex }))
    }


    <div>
<input value={task} type="text" onChange={handleChange}/>
<button type='submit'onClick={handleSubmit}>Add Todo</button>

<div>
<ol>
{
list.map((t,index)=>{
    <>
    <li>{t}</li>
    <button onClick={()=>handleDelete(index)}>Delete</button>
    </> 
})}
</ol>
</div>

</div>
}

export default Todo ;