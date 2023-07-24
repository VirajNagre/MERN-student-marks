import { Link } from "react-router-dom";

export default function Navbar(){
	{/* <Link to="/"></Link> */}

return(<>
<div className="nav">
	<div className="nav-btn">
		<Link to="/create" className="nav-btn lFont" > + </Link>
	</div>
</div>
</>)
}
