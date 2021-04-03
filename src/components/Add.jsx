import { useState } from "react";

const empDetails = {
	id: "",
	fullname: "",
	DOB: "",
	department: "",
	experience: "",
};

export default function Add({ onAdd }) {
	const [employee, setEmployee] = useState(empDetails);
	const [touched, setTouched] = useState({});

	const errors = getErrors(employee);
	const isValid = Object.keys(errors).length === 0;

	function handleChange(e) {
		e.persist();
		setEmployee((curEmployee) => {
			return {
				...curEmployee,
				[e.target.id]: e.target.value,
			};
		});
	}

	function handleSubmit(e) {
		e.preventDefault();
		if (isValid) {
			onAdd(employee);
			setEmployee(empDetails);
			setTouched({});
		} else {
			alert(
				"A field is empty or Their are errors in some fields.\nResovle errors to submit."
			);
		}
	}

	function handleBlur(e) {
		setTouched((cur) => {
			return { ...cur, [e.target.id]: true };
		});
	}

	function getErrors(employee) {
		const result = {};
		if (!employee.fullname.match(/^[A-Z]+$/))
			result.fullname = "Only Uppercase letters(A-Z) are allowed in name.";
		if (!employee.DOB) result.DOB = "Please enter DOB";
		if (employee.DOB > "2010-12-31" || employee.DOB < "1975-01-01")
			result.DOB = "DOB must be between 01-01-1975 and 31-12-2010.";
		if (!employee.department)
			result.department = "Please select your department";
		if (!employee.experience)
			result.experience = "Please Enter your exprience";
		return result;
	}

	return (
		<section>
			<form className="add-form" onSubmit={handleSubmit}>
				<div className="form-control">
					<label htmlFor="fullname">Enter Full Name :</label>
					<input
						type="text"
						id="fullname"
						placeholder="Enter Your Name"
						value={employee.fullname}
						onChange={handleChange}
						onBlur={handleBlur}
					/>
					<p style={{ color: "red" }}>
						{(touched.fullname || isValid) && errors.fullname}
					</p>
				</div>
				<div className="form-control">
					<label htmlFor="DOB">Enter DOB :</label>
					<input
						type="date"
						id="DOB"
						max="2010-12-31"
						min="1975-01-01"
						value={employee.DOB}
						onChange={handleChange}
						onBlur={handleBlur}
					/>
					<p style={{ color: "red" }}>
						{(touched.DOB || isValid) && errors.DOB}
					</p>
				</div>
				<div className="form-control">
					<label htmlFor="department">Select Department:</label>{" "}
					<select
						id="department"
						value={employee.department}
						onChange={handleChange}
						onBlur={handleBlur}
					>
						<option value="" style={{ display: "none" }}>
							Select Department
						</option>
						<option value="IT">IT services</option>
						<option value="ADMIN">Admin department</option>
						<option value="Human Resource">HR Department</option>
						<option value="Sales & Marketing">Sales and marketing</option>
					</select>
					<p style={{ color: "red" }}>
						{(touched.department || isValid) && errors.department}
					</p>
				</div>
				<div className="form-control">
					<label htmlFor="experience">Add your Experience:</label>
					<input
						type="number"
						id="experience"
						min={0}
						step={0.1}
						value={employee.experience}
						onChange={handleChange}
						onBlur={handleBlur}
					/>
					<p style={{ color: "red" }}>
						{(touched.experience || isValid) && errors.experience}
					</p>
				</div>
				<div>
					<input
						type="submit"
						className="btn btn-block"
						value="Add Employee"
					/>
				</div>
			</form>
		</section>
	);
}