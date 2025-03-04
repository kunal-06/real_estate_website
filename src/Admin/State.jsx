import { useEffect, useState } from "react"
import { Link } from 'react-router-dom';
export default function State() {

	const [StateList, setStateList] = useState([])
	const token = localStorage.getItem('token');
	function onCityfetch() {
		fetch('https://localhost:7273/api/State',{ method: 'GET', headers: { 'Authorization': `Bearer ${token}` } }).then((res) => res.json()).then((data) => {
			setStateList([...data])
		})
	}
	useEffect(() => {
		onCityfetch()
	}, [])

	function OnDelete(id) {
	
		fetch('https://localhost:7273/api/State/' + id, { method: 'DELETE', headers: { 'Authorization': `Bearer ${token}` } }).then((res) => {
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

				<div class="my-5">
					<h3>State</h3>
					<hr />
				</div>

				<div class="row">
					<div class="col-md-12">
						<div class="bg-secondary-soft p-3 p-md-5 rounded ">

							<div class="row d-xxl-block ">
								<div class="col-12 align-middle py-3">
									<div class="row border-bottom ">
										<div class="col-3">
											<h5>State Name</h5>
										</div>
										<div class="col-9">
											<div class="row">
												<div class="col-4 align-middle text-body py-2">
													<h5>Country Name</h5>
												</div>
												<div class="col-4 align-middle py-2">
													<h5>Created Date</h5>
												</div>

											</div>
										</div>
									</div>
								</div>
							</div>

							{StateList.map((state) => {
								return <>
									<div class="row">
										<div class="col-12 align-middle py-4">
											<div class="row ">
												<div class="col-3">
													<div class="card bg-transparent">
														<div class="row">
															<p class="mb-1 text-body">{state.stateName}</p>
														</div>
													</div>
												</div>

												<div class="col-9 pt-2 pt-xxl-0">
													<div class="row">

														<div class="col-md-4 align-middle text-body">
															{state.countryName}
														</div>

														<div class="col-md-4 align-middle pt-2 pt-md-0">
															{state.created.substring(0, 10)}
														</div>

														<div class="col-md-4 align-middle d-flex justify-content-center  pt-2 pt-md-0">
															<Link to={"StateAddEdit/" + state.stateID} class="btn btn-sm btn-success-soft me-1 mb-1"><i class="far fa-fw fa-edit"></i></Link>
															<button class="btn btn-sm btn-danger-soft mb-1" onClick={() => {
																if (window.confirm('Are you sure to delete this record?')) { OnDelete(state.stateID) }
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