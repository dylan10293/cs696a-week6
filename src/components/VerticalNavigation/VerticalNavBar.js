import React from 'react';

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaHome, FaUsers, FaChartBar, FaCartPlus, FaCog } from 'react-icons/fa';

import "./VerticalNavBar.css"

///// TODO: Use React Bootstrap’s Nav component to create a vertical navigation menu.
///// TODO: Include at least 5 menu items with icons(you can use React icons or Font Awesome).
// TODO: Ensure the sidebar is collapsible on smaller screens.

const VerticalNavBar = () => {

	const options = [{
		text: "Dashboard",
		href: "/dashboard",
		icon: <FaHome />
	}, {
		text: "Users",
		href: "/users",
		icon: <FaUsers />
	}, {
		text: "Analytics",
		href: "/Analytics",
		icon: <FaChartBar />
	}, {
		text: "Orders",
		href: "/Orders",
		icon: <FaCartPlus />
	}, {
		text: "Settings",
		href: "/Settings",
		icon: <FaCog />
	}]

	return (
		<Navbar expand="lg" className="p-2">
			<div className="nav-container">
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Brand href="#home" className="ps-3">React-Bootstrap</Navbar.Brand>
				<Navbar.Collapse id="navbar-nav" className="w-100">
					<Nav className="flex-column w-100">
						{options.map(({ text, href, icon }) => (
							<Nav.Link href={href}>
								{icon}<span>{text}</span>
							</Nav.Link>
						))}
					</Nav>
				</Navbar.Collapse>
			</div>
		</Navbar>
	)
}

export default VerticalNavBar