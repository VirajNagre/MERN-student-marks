import { useState,useRefm,useEffect } from "react";
import axios from "axios";
import { useLocation,useNavigate } from "react-router-dom"; 

export default function Update()
{

const loc=useLocation();
const nav = useNavigate();

useEffect(()=>{
setRNo(loc.state.r);
setName(loc.state.n);
setMarks(loc.state.m);
},[]);

const [name,setName] = useState("");
const [rNo,setRNo] = useState("");
const [marks,setMarks] = useState("");

const hName = (event) => { setName(event.target.value);}
const hRNo = (event) => { setRNo(event.target.value);}
const hMarks = (event) => { setMarks (event.target.value);}

const save =(event)=>{
event.preventDefault();

let serverUrl = "http://localhost:1111/change";
let data = { rNo,name,marks };
console.log(data)
axios.put(serverUrl,data)
.then(res=>{
		alert("record updated")
		nav("/")
	}

).catch(err=>{
	if(err.code == "ERR_NETWORK"){
		alert("try again in some time");
		setName("");
		setMarks("");
		setRNo("");		
	}
}
);

}

return(<>
<h1> Update Page </h1>
<form onSubmit={save}>
	<input type="text" placeholder="Name" onChange={hName } value={ name }/>
	<br/>
	<input type="number" placeholder="Roll Number" onChange={hRNo } value={ rNo } disabled={true}/>
	<br/>
	<input type="number" placeholder="Marks"  onChange={ hMarks } value={ marks } />
	<br/>
	<input type="submit" value="Save" />
	<br/>
</form>
</>)
}
