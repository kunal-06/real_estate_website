import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

export default function UserAddEdit() {

	const { id } = useParams();
	var nav = useNavigate()
	const [UserList, setUserList] = useState({})
	const [errors, setErrors] = useState({});
	function OnFillData(id) {
		fetch('https://localhost:7273/api/User/' + id).then((res) => res.json()).then((data) => {
			setUserList(data[0])
		})
	}

	const onChangeFunction = (event) => {
		setUserList({
			...UserList,
			[event.target.name]: event.target.value,
		});
		console.log(UserList)
	};

	useEffect(() => {
		if (id != null) {
			OnFillData(id)
		}
	}, [])

	const editUser = () => {
		if (id != null) {
			fetch("https://localhost:7273/api/User/" + id, {
				method: "PUT",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(UserList)
			}).then((res) => {
				nav(-1)
				console.log(res.json())
			})
		}
		else {
			fetch("https://localhost:7273/api/User", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(UserList)
			}).then((res) => res.json()).then((response) => {
				setUserList({})
				if (response.status === 400) {
					const errorData = response.errors;
					setErrors(errorData);
					console.log(errors);
				} else { console.error("Server Error:", response.status); }
			})
		}
	}

	return <>
		<div class="row">
			<div class="col-12">

				<div class="my-5">
					<h3>AddEdit User</h3>
					<hr />
				</div>
				<form id="stepByStepForm" class="file-upload">

					<div class="step step1">

						<div class="row gx-5 align-items-center justify-content-center">

							<div class="col-xxl-10 mb-5 mb-xxl-0">
								<div class="row g-3 bg-secondary-soft rounded p-3 p-md-5">

									<div class="col-md-12">
										<label class="form-label">User Name</label>
										<input type="text" name="userName" value={UserList.userName || ""} onChange={onChangeFunction} placeholder="Enter User Name" class="form-control" aria-label="Title" />
										{
											errors.UserName?.map((err, index) => (
												<div key={index} style={{ color: "red" }}>
													{err}
												</div>))
										}
									</div>

									<div class="col-md-6">
										<label class="form-label">Email</label>
										<input type="email" name="email" value={UserList.email || ""} onChange={onChangeFunction} placeholder="Enter Email" class="form-control" aria-label="Email" />
										{
											errors.Email?.map((err, index) => (
												<div key={index} style={{ color: "red" }}>
													{err}
												</div>))
										}
									</div>

									<div class="col-md-6">
										<label class="form-label">Phone</label>
										<input type="text" name="phone" value={UserList.phone || ""} onChange={onChangeFunction} placeholder="Enter Phone Number" class="form-control" aria-label="Phone" />
										{
											errors.Phone?.map((err, index) => (
												<div key={index} style={{ color: "red" }}>
													{err}
												</div>))
										}
									</div>

									<div class="col-md-12">
										<label class="form-label">Password</label>
										<input type="text" name="password" value={UserList.password || ""} onChange={onChangeFunction} placeholder="Enter Password" class="form-control" aria-label="Password" />
										{
											errors.Password?.map((err, index) => (
												<div key={index} style={{ color: "red" }}>
													{err}
												</div>))
										}
									</div>

									<div class="col-md-6">
										<label class="form-label">Role</label>
										<select class="form-select js-choice" name="role" onChange={onChangeFunction} aria-label="Default select example">
											<option defaultChecked>Select Role</option>
											{["Buyer", "Seller"].map(element => {
												if (UserList.role == element.toLowerCase()) {
													return <option selected name="Role">{element}</option>
												}
												else {
													return <option name="Role">{element}</option>
												}
											})}
										</select>
										{
											errors.Role?.map((err, index) => (
												<div key={index} style={{ color: "red" }}>
													{err}
												</div>))
										}
									</div>
									<div className="col-md-12">
										<Link to={-1} className="btn btn-success m-1">back</Link>

										<a type="submit" onClick={editUser} className="btn btn-primary m-1" >Update</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</form>
			</div>
		</div>
	</>
}