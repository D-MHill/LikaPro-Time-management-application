import logo from "../header/logo.png";
import "./Header.css";

function Header() {
	return (
		<header>
			<div className="header">
				<img src={logo} alt="logo" />
				<h4>
					Lik<span style={{ color: "blue" }}>a</span>Pro
				</h4>
			</div>
		</header>
	);
}

export default Header;
