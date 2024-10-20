import React from 'react';

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaHome, FaUser, FaCog, FaInfoCircle, FaEnvelope } from 'react-icons/fa';

import "./VerticalNavBar.css"

///// TODO: Use React Bootstrap’s Nav component to create a vertical navigation menu.
///// TODO: Include at least 5 menu items with icons(you can use React icons or Font Awesome).
// TODO: Ensure the sidebar is collapsible on smaller screens.

const VerticalNavBar = () => {
	return (
		<Navbar expand="lg" className="p-2">
			<div className="nav-container">
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Brand href="#home" className="ps-3">React-Bootstrap</Navbar.Brand>
				<Navbar.Collapse id="navbar-nav" className="w-100">
					<Nav className="flex-column w-100">
						<Nav.Link href="home">
							<FaHome /> <span>Home</span>
						</Nav.Link>
						<Nav.Link href="profile">
							<FaUser /> <span>Profile</span>
						</Nav.Link>
						<Nav.Link href="settings">
							<FaCog /> <span>Settings</span>
						</Nav.Link>
						<Nav.Link href="about">
							<FaInfoCircle /> <span>Info</span>
						</Nav.Link>
						<Nav.Link href="contact">
							<FaEnvelope /> <span>Contact</span>
						</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</div>
		</Navbar>
	)
}

export default VerticalNavBar