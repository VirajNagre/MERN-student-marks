import { useState,useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export default function Home(){

const nav = useNavigate();
const [info,setInfo]=useState([]);

useEffect(()=>{
let urladd="http://localhost:1111/read";
axios.get(urladd)
.then(res=>{setInfo(res.data); console.log(res.data);})
.catch(err=>console.log(err));
},[]);

const updateStudent = (rNo,name,marks)=>{
	nav("/update",{state:{r:rNo,n:name,m:marks}})
}


const delStud = (rNo) =>{
	let urladd="http://localhost:1111/remove";
	let data ={data:{rNo}};
	axios.delete(urladd,data)
	.then(res=>{
		alert("record deleted")
		window.location.reload();
		})
	.catch(err=>{console.log(err)});

}

return(<>
<center>
<div className="nav-btn">
<Link to="/create" className="nav-btn" > + </Link>
</div>
<table >
<thead>
	<tr>
	<th>Roll</th>
	<th>Name</th>
	<th>Subject</th>
	<th>Marks</th>
	<th>Delete</th>
	<th>Update</th>
	</tr>
</thead>
<tbody>
{
info.map((e)=>(
	<tr>
	<td>{e._id}</td>
	<td>{e.name}</td>
	<td>{e.marks}</td>
	<td>{e.subject}</td>
	<td><button onClick={()=>{delStud(e._id)}}>Delete</button></td>
	<td><button onClick={()=>{updateStudent(e._id,e.name,e.marks)}}>Update</button></td>
	</tr>
))
}
</tbody>
</table>
</center>
</>)
}
