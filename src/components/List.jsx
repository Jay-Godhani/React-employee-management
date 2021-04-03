import React from "react";
import { Link } from "react-router-dom";
import { FaTimesCircle, FaUserEdit } from "react-icons/fa";

export default function List({ employees, onDelete }) {
	function renderEmployee(e) {
		return (
			<tr>
				<td>{e.fullname}</td>
				<td>{e.DOB}</td>
				<td>{e.department}</td>
				<td>{e.experience} Year</td>
				<td>
					<Link to={`/edit/${e.id}`}>
						<FaUserEdit style={{ color: "blue", cursor: "pointer" }} />
					</Link>
					{"  "}
					<FaTimesCircle
						onClick={() => onDelete(e.id)}
						style={{ color: "red", cursor: "pointer" }}
					/>
				</td>
			</tr>
		);
	}
	return (
		<section className="view-table">
			{employees.length > 0 ? (
				<table className="table-control">
					<thead>
						<tr>
							<th>Name</th>
							<th>DOB</th>
							<th>Department</th>
							<th>Experience</th>
							<th>Edit & Delete</th>
						</tr>
					</thead>
					<tbody>{employees.map(renderEmployee)}</tbody>
				</table>
			) : (
				<h2>Their is no employee record to show.</h2>
			)}
		</section>
	);
}
