import React from "react";

//create your first component
const Navbar = () => {
	return (
		<nav className="navbar navbar-expand-lg bg-secondary">
			<div className="container-fluid">
				<a className="navbar-brand text-light" href="#">Start Bootstrap</a>
				<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="navbar-collapse collapse" id="navbarNavAltMarkup">
					<div className="navbar-nav ms-auto text-end">
						<a className="nav-link text-light" aria-current="page" href="#">Home</a>
						<a className="nav-link text-light" aria-current="page" href="#">About</a>
						<a className="nav-link text-light" aria-current="page" href="#">Services</a>
						<a className="nav-link text-light" aria-current="page" href="#">Contact</a>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;