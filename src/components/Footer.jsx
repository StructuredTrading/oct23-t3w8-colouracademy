import { DarkModeToggleButton } from "./DarkModeToggleButton";
import "../styles/Footer.css";


export default function Footer(){

	return (
		<footer>
			<h6>Copyright 2024 ColourAcademy / Sam</h6>
			<button><a href="mailto:test@email.com">Email us!</a></button>

			<DarkModeToggleButton />
		</footer>
	)
}