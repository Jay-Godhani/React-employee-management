import React from "react";
import { Link, NavLink } from "react-router-dom";

const activeStyle = {
	color: "red",
};

export default function Navbar() {
	return (
		<header>
			<nav>
				<ul>
					<li>
						<Link to="/">
							<img alt="Employee Management" src="/employee-icon1.png" />
						</Link>
					</li>
					<li>
						<NavLink activeStyle={activeStyle} to="/add">
							ADD Employee
						</NavLink>
					</li>
					<li>
						<NavLink activeStyle={activeStyle} to="/list">
							LIST Employee
						</NavLink>
					</li>
				</ul>
			</nav>
		</header>
	);
}
