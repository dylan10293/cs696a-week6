import React from 'react'
import StatCard from "../Card/StatCard"

const Dashboard = () => {
	const stats = [{
		title: "Total Users",
		stat: 10000
	}, {
		title: "Revenue",
		stat: 10000
	}, {
		title: "Orders",
		stat: 10000
	}, {
		title: "Conversion Rate",
		stat: 10000
	},]

	return (
		<div class="">
			<div class="row gx-2">
				{stats.map(({ title, stat }) => (
					<div class="col-6 col-md-3">
						<StatCard title={title} stat={stat} />
					</div>
				))}
			</div>

		</div>
	)
}

export default Dashboard