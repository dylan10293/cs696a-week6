import React from 'react'
import { Card } from 'react-bootstrap';
import "./StatCard.css";

const StatCard = ({ title, stat }) => {
	return (
		<Card className="stat-card">
			<Card.Body>
				<Card.Title>{title}</Card.Title>
				<Card.Text>
					{stat.toString()}
				</Card.Text>
			</Card.Body>
		</Card>
	)
}

export default StatCard