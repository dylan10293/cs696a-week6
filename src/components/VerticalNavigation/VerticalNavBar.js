import React from 'react';

import { FaHome, FaUsers, FaChartBar, FaCartPlus, FaCog, FaBars, FaTimes } from 'react-icons/fa';
import { Button, Navbar, Nav } from 'react-bootstrap';

import "./VerticalNavBar.css"

///// TODO: Use React Bootstrap’s Nav component to create a vertical navigation menu.
///// TODO: Include at least 5 menu items with icons(you can use React icons or Font Awesome).
// TODO: Ensure the sidebar is collapsible on smaller screens.

const VerticalNavBar = ({ toggleSidebar }) => {

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
				<Button className="close-sidebar" variant="outline-none" onClick={toggleSidebar}>
					<FaTimes />
				</Button>
				<Navbar.Brand href="#home" className="ps-3">React-Bootstrap</Navbar.Brand>

				<Nav className="flex-column w-100 mt-3">
					{options.map(({ text, href, icon }) => (
						<Nav.Link href={href}>
							{icon}<span>{text}</span>
						</Nav.Link>
					))}
				</Nav>
			</div>
		</Navbar>
	)
}

export default VerticalNavBar