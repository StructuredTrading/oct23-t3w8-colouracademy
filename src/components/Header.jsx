import { NavLink } from "react-router-dom";


export default function Header(){

	return(
		<header>
			<div id="headerBranding">
				ColourAcademy 
			</div>
			<nav id="headerNavbar">
				<button><NavLink to={"/"} >Home</NavLink></button>
				<button><NavLink to={"/generator"} >Generator</NavLink></button>
				<button><NavLink to={"/generator/saved"} >Saved Themes</NavLink></button>
			</nav>
		</header>
	)
}