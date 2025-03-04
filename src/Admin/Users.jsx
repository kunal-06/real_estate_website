import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

export default function Users() {

	const [UserList, setUserList] = useState([])

	function onCityfetch() {
		fetch('https://localhost:7273/api/User').then((res) => res.json()).then((data) => {
			setUserList([...data])
		})
	}
	useEffect(() => {
		onCityfetch()
	}, [])

	function OnDelete(id) {
		fetch('https://localhost:7273/api/User/' + id, { method: 'DELETE', }).then((res) => {
			if (res.status === 200) {
				toast.success('Deleted Successfully', {
					position: "top-right",
					autoClose: 5000,
					hideProgressBar: false,
					closeOnClick: false,
					pauseOnHover: true,
					draggable: true,
					progress: undefined,
					theme: "light",
					transition: Bounce,
				});
				onCityfetch()
			}
			else {
				toast.error('Faild to Delete !!!', {
					position: "top-right",
					autoClose: 5000,
					hideProgressBar: false,
					closeOnClick: false,
					pauseOnHover: true,
					draggable: true,
					progress: undefined,
					theme: "light",
					transition: Bounce,
				});
			}
		})
	}

	return <>
		<div class="row">
			<div class="col">
				<div class="my-5 ">
					<h3>Users</h3>
					<hr />
				</div>

				<div class="row">
					<div class="col-md-12">
						<div class="bg-secondary-soft p-3 p-md-5 rounded ">

							<div class="row d-xxl-block ">
								<div class="col-12 align-middle py-3">
									<div class="row border-bottom ">
										<div class="col-2">
											<h5>User Name</h5>
										</div>
										<div class="col-10">
											<div class="row">
												<div class="col-2 align-middle text-body py-2">
													<h5>Email</h5>
												</div>
												<div class="col-2 align-middle py-2">
													<h5>Phone</h5>
												</div>
												<div class="col-2 align-middle py-2">
													<h5>Password</h5>
												</div>
												<div class="col-2 align-middle py-2">
													<h5>Role</h5>
												</div>
												<div class="col-2 align-middle py-2">
													<h5>Created</h5>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>

							{UserList.map((user) => {
								return <>
									<div class="row">
										<div class="col-12 align-middle py-4">
											<div class="row ">
												<div class="col-2">
													<div class="card bg-transparent">
														<div class="row">
															<p class="mb-1 text-body">{user.userName}</p>
														</div>
													</div>
												</div>

												<div class="col-10 pt-2 pt-xxl-0">
													<div class="row">
														<div class="col-md-2 align-middle pt-2 pt-md-0">
															<p>{user.email}</p>
														</div>
														<div class="col-md-2 align-middle pt-2 pt-md-0">
															<p>{user.phone}</p>
														</div>
														<div class="col-md-2 align-middle pt-2 pt-md-0">
															<p>{user.password}</p>
														</div>
														<div class="col-md-2 align-middle pt-2 pt-md-0">
															<p>{user.role}</p>
														</div>
														<div class="col-md-2 align-middle pt-2 pt-md-0">
															<p>{user.created.substring(0, 10)}</p>
														</div>


														<div class="col-md-2 align-middle d-flex justify-content-evenly  pt-2 pt-md-0">
															<Link to={"UserAddEdit/" + user.userID} class="btn btn-sm btn-success-soft me-1 mb-1"><i class="far fa-fw fa-edit"></i></Link>
															<button class="btn btn-sm btn-danger-soft mb-1" onClick={() => {
																if (window.confirm('Are you sure to delete this record?')) { OnDelete(user.userID) }
															}}><i class="far fa-fw fa-trash-alt"></i></button>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
									<hr />
								</>
							})}

						</div>
					</div>
				</div>

			</div>
		</div>
	</>
}