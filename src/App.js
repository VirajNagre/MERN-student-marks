import logo from './logo.svg';
import './App.css';
import Create from "./create.js";
import Home from "./home.js";
import Navbar from "./navbar.js";
import Update from "./update.js";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import { Link } from "react-router-dom";
{/* <Navbar/> */}

function App() {
  return (
    <div className="App">

	<BrowserRouter>
	
		<Routes>
			<Route path="/" element={ <Home/> } />
			<Route path="/create" element={ <Create/> } />
			<Route path="/update" element={ <Update/> } />
			<Route path="*" element={ <Home/> } />
		</Routes>
	</BrowserRouter>
    </div>
  );
}

export default App;
