import React, { useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import "./index.css";
import Navbar from "./components/Navbar";
import Add from "./components/Add";
import List from "./components/List";
import Edit from "./components/Edit";
import NotFound from "./components/Notfound";

function App() {
	const navigate = useNavigate();
	const [employee, setEmployee] = useState([]);

	const addEmployee = (emp) => {
		emp.id = Math.floor(Math.random() * 1000) + 1;
		setEmployee([...employee, emp]);
		alert("Employee Added Sucessfully.");
	};

	const findEmployee = (id) => {
		const searchedEmployee = employee.find((emp) => {
			return emp.id === id;
		});
		return searchedEmployee;
	};

	const editEmployee = (emp) => {
		const employeeIndex = employee.findIndex((index) => index.id === emp.id);
		let newEmployeeArr = [...employee];
		newEmployeeArr[employeeIndex] = {
			id: emp.id,
			fullname: emp.fullname,
			DOB: emp.DOB,
			department: emp.department,
			experience: emp.experience,
		};
		setEmployee(newEmployeeArr);
		alert("Edited sucessfully.");
		navigate("/list");
	};

	const deleteEmployee = (id) => {
		setEmployee(employee.filter((emp) => emp.id !== id));
	};

	return (
		<div className="container">
			<Navbar />
			<main>
				<Routes>
					<Route
						path="/"
						element={<h1>Welcome to Employee Management System.</h1>}
					/>
					<Route path="/add" element={<Add onAdd={addEmployee} />} />
					<Route
						path="/list"
						element={
							<List employees={employee} onDelete={deleteEmployee} />
						}
					/>
					<Route
						path="/edit/:id"
						element={
							<Edit findEmployee={findEmployee} onEdit={editEmployee} />
						}
					/>
					<Route path="*" element={<NotFound />} />
				</Routes>
			</main>
		</div>
	);
}

export default App;
