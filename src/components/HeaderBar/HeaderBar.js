import React from 'react'
import "./HeaderBar.css";
import { Form, FormControl, Button, Dropdown } from 'react-bootstrap';
import { FaSearch, FaBell, FaUser } from "react-icons/fa";

// Create a header that spans the top of the page(excluding the sidebar).
// Include a search bar, a notifications icon, and a user profile dropdown.

const HeaderBar = () => {
	return (
		<div className="top-bar">
			<div className="sidebar-controls">
				Sidebar controls
			</div>
			<div className="title">
				<span>Header Bar</span>
			</div>
			<div className="profile-section">
				<Form className="search">
					<FormControl
						type="search"
						placeHolder="Search"
						aria-label="Search"
					/>
					<Button variant="outline-primary">
						<FaSearch />
					</Button>
				</Form>
				<Button className="ms-2" variant="outline-light">
					<FaBell />
				</Button>

				<Dropdown className="ms-2">
					<Dropdown.Toggle variant="outline-primary" id="dropdown-basic">
						User Profile
					</Dropdown.Toggle>

					<Dropdown.Menu>
						<Dropdown.Header>Oh, hello there!</Dropdown.Header>
						<Dropdown.Item href="/profile">Profile</Dropdown.Item>
						<Dropdown.Item href="/logout">Logout</Dropdown.Item>
					</Dropdown.Menu>
				</Dropdown>
			</div>
		</div >
	)
}

export default HeaderBar