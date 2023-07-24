import { useState,useRef } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Create(){


const [name,setName] = useState("");
const [rNo,setRNo] = useState("");
const [marks,setMarks] = useState("");
const [subject,setSubject] = useState("");

const hName = (event) => { setName(event.target.value);}
const hRNo = (event) => { setRNo(event.target.value);}
const hMarks = (event) => { setMarks (event.target.value);}
const hSubject = (event) => { setSubject (event.target.value);}


const save =(event)=>{
event.preventDefault();

let serverUrl = "http://localhost:1111/create";
let data = { rNo,name,marks,subject };
console.log(data)
axios.post(serverUrl,data)
.then(res=>{
		if(res.data.insertedId){
			alert("record created");
			setName("");
			setMarks("");
			setRNo("");
			setSubject('')
		}			
		else{
			alert("record already exists");
			setName("");
			setMarks("");
			setRNo("");
			setSubject('')
		}	
	}

).catch(err=>{
	if(err.code == "ERR_NETWORK"){
		alert("try again in some time");
		setName("");
		setMarks("");
		setRNo("");		
		setSubject('')
	}
}
);
}

return(<>
<div className="nav-btn">
	<Link to="/" className="nav-btn" >Home</Link>
</div>

<h1> Add new </h1>
<form onSubmit={save}>
	<input type="text" placeholder="Name" onChange={hName } value={ name }/>
	<br/>
	<input type="number" placeholder="Roll Number" onChange={hRNo } value={ rNo } />
	<br/>
	<input type="text" placeholder="Subject"  onChange={ hMarks } value={ marks } />
	<br/>
	<input type="number" placeholder="Marks"  onChange={ hSubject } value={ subject } />
	<br/>
	<input type="submit" value="Save" />
	<br/>
</form>

</>)
}
