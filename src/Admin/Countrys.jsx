import { useEffect, useState } from "react"
import { Link } from 'react-router-dom';
import { Bounce, ToastContainer, toast } from 'react-toastify'
export default function Countrys() {
	const [CountryList, setCountryList] = useState([])
	function OnFillData(id) {
		fetch('https://localhost:7273/api/Country').then((res) => res.json()).then((data) => {
			setCountryList([...data])
		})
	}

	useEffect(() => {
		OnFillData()
	}, [])

	function OnDelete(id) {
		const token = localStorage.getItem('token');
		fetch('https://localhost:7273/api/Country/' + id, { method: 'DELETE', headers: { 'Authorization': `Bearer ${token}` } }).then((res) => {
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
				OnFillData()
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
					<h3>Country</h3>
					<hr />
				</div>

				<div class="row">
					<div class="col-md-12">
						<div class="bg-secondary-soft p-3 p-md-5 rounded ">

							<div class="row d-xxl-block ">
								<div class="col-12 align-middle py-3">
									<div class="row border-bottom ">
										<div class="col-4">
											<h5>Countrys Name</h5>
										</div>
										<div class="col-8">
											<div class="row">
												<div class="col-4 align-middle py-2">
													<h5>Created Date</h5>
												</div>

											</div>
										</div>
									</div>
								</div>
							</div>

							{CountryList.map((country) => {
								return <>
									<div class="row">
										<div class="col-12 align-middle py-4">
											<div class="row">
												<div class="col-4">
													<div class="card bg-transparent">
														<div class="row">
															<p class="mb-1 text-body">{country.countryName}</p>
														</div>
													</div>
												</div>

												<div class="col-8 pt-2 pt-xxl-0">
													<div class="row">
														<div class="col-md-6 align-middle pt-2 pt-md-0">
															<p>{country.created.substring(0, 10)}</p>
														</div>

														<div class="col-md-6 align-middle d-flex justify-content-center  pt-2 pt-md-0">
															<Link to={"CountryAddEdit/" + country.countryID} class="btn btn-sm btn-success-soft me-1 mb-1"><i class="far fa-fw fa-edit"></i></Link>
															<button class="btn btn-sm btn-danger-soft mb-1" onClick={() => {
																if (window.confirm('Are you sure to delete this record?')) { OnDelete(country.countryID) }
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