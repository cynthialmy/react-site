import logo from "../src/assets/react-icon-small.png";

export default function Navbar() {
	return (
		<nav className="navbar">
			<img className="react-logo" src={logo} alt="React Logo" />
			<h1 className="navbar-title">ReactFacts</h1>
			<h1 className="navbar-content">React Course - Project 1</h1>
		</nav>
	);
}
