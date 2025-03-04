import { useEffect, useState } from "react"
import { Link } from 'react-router-dom';
export default function PropertyList() {
	const [PropertyList, setPropertyList] = useState([])
	const [FilteredProperty, setFilteredPropertyList] = useState([])
	const [filters, setFilters] = useState({
		propertyType: "",
		minPrice: "",
		maxPrice: "",
		propertyName: "",
	})
	const user = JSON.parse(localStorage.getItem('user'))

	function onGetPropertys() {
		const token = localStorage.getItem('token')
		if (user.role == 'Seller') {
			fetch('https://localhost:7273/api/Property/User/' + user.userID,{
				method:'GET',
				headers : {'Authorization': `Bearer ${token}` }
			}).then((res) => res.json()).then((data) => {
				setPropertyList([...data])
				setFilteredPropertyList([...data])
			})
		}
		else if (user.role == "Admin") {
			fetch('https://localhost:7273/api/Property').then((res) => res.json()).then((data) => {
				setPropertyList([...data])
				setFilteredPropertyList([...data])
			})
		}
	}
	useEffect(() => onGetPropertys(), [])

	function OnDelete(id) {
		const token = localStorage.getItem('token')
		fetch('https://localhost:7273/api/Property/' + id, { method: 'DELETE', headers : {'Authorization': `Bearer ${token}` }}).then((res) => {
			if (res.status === 400) {
				console.log(res.json())
			}
			else if (res.status === 200) { onGetPropertys() }
			else { console.log(res.json()) }

		})
	}


	const handleChange = (e) => {
		const { name, value } = e.target;
		console.log(name, value)
		setFilters((prev) => ({ ...prev, [name]: value }));
	};

	async function onFilterset() {
		setFilteredPropertyList(FilteredProperty.filter((property) => {
			return (
				(filters.title === "" || String(property.title).includes(String(filters.propertyName))) &&
				(filters.minPrice === "" || parseInt(property.price) >= parseInt(filters.minPrice)) &&
				(filters.maxPrice === "" || parseInt(property.price) <= parseInt(filters.maxPrice)) &&
				(filters.propertyType === "" || property.propertyType === filters.propertyType)
			);
		}))
	}
	function onFilterRemove() {
		setFilters({ propertyType: "", minPrice: "", maxPrice: "", propertyName: "" })
		setFilteredPropertyList([...PropertyList])
	}

	return <>
		<div class="row">
			<div class="col-12">
				<div class="mt-5 d-flex justify-content-between mb-4">
					<h3>My Properties</h3>
					<div className="d-flex justify-content-end m-3">
						{
							user.role != 'Admin' ? <Link to={"PropertyAddEdit"} class="btn btn-sm btn-success-soft me-1 mb-4"><i class="fa fa-plus" aria-hidden="true"></i> Add Property</Link> :""
						}
					</div>
				</div>

				<div className="form row p-0 m-0 d-flex align-items-center">
					<div class="col-2">
						<label for="exampleInputEmail1" class="form-label">Name</label>
						<input type="text" onChange={handleChange} value={filters.propertyName} name="propertyName" class="form-control" id="exampleInputEmail1" />
					</div>
					<div class="col-6">
						<label for="exampleInputEmail1" class="form-label">Price</label>
						<div className="row">
							<label for="exampleInputEmail1" class="form-label col-2">From :</label>
							<input type="text" class="form-control col" onChange={handleChange} value={filters.minPrice} name="minPrice" id="exampleInputEmail2" />

							<label for="exampleInputEmail1" class="form-label col-2">To :</label>
							<input type="text" class="form-control col" onChange={handleChange} value={filters.maxPrice} name="maxPrice" id="exampleInputEmail3" />

						</div>

					</div>
					<div class="col-2">
						<label for="exampleInputEmail1" class="form-label">Status</label>
						<select class="form-select js-choice" name="propertyType" onChange={handleChange} aria-label="Default select example">
							<option selected={filters.propertyType ? false : true}>Select item</option>
							{["For Rent", "For Sell"].map(element => {
								return <option>{element}</option>
							})}
						</select>
					</div>	
					<div class="col-2 pt-2 mt-2 d-flex justify-content-evenly">
						<button onClick={onFilterset} className="btn btn-success"><i class="fa fa-filter" aria-hidden="true"></i></button>
						<button onClick={onFilterRemove} className="btn btn-danger"><i class="fa fa-eraser" aria-hidden="true"></i></button>
					</div>
				</div>

				<div class="row">
					<div class="col-md-12">
						<div class="bg-secondary-soft p-3 p-md-5 rounded">

							<div class="row d-xxl-block">
								<div class="col-12 align-middle py-3">
									<div class="row border-bottom">
										<div class="col-6">
											<h5>Listing</h5>
										</div>
										<div class="col-6">
											<div class="row">
												<div class="col-3 align-middle text-body py-2">
													<h5>Publish date</h5>
												</div>
												<div class="col-3 align-middle py-2">
													<h5>Status</h5>
												</div>
												<div class="col-6 align-middle py-2">
													<h5>Action</h5>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>


							{FilteredProperty.map((p) => {
								return <>
									<div class="row">
										<div class="col-12 align-middle py-4">
											<div class="row">
												<div class="col-6">
													<div class="card bg-transparent">
														<div class="row">

															<div class="col-xl-3">
																{p.imagePath ?
																	<img class="rounded" src={"https://localhost:7273/" + p.imagePath} alt="Not available" />
																	:
																	<p className="d-flex align-items-center text-dark w-100 h-100">Not Available</p>

																}
															</div>

															<div class="col-xl-9 pt-2 pt-xl-0">
																<h6 class="mb-1">{p.title}</h6>
																<p class="mb-1 text-body">{p.address}</p>
																<span class="text-success">{p.price}</span>
															</div>
														</div>
													</div>
												</div>

												<div class="col-6 pt-2 pt-xxl-0">
													<div class="row">

														<div class="col-md-3 align-middle text-body">
															{p.listing_Date.substring(0, 10)}
														</div>

														<div class="col-md-3 align-middle pt-2 pt-md-0">
															<div class="badge bg-danger-soft text-danger"><i class="fas fa-rupee-sign pe-1"></i>{p.propertyType}</div>
														</div>

														<div class="col-md-6 align-middle pt-2 pt-md-0">
															<Link to={"/Admin/PropertyDetails/" + p.propertyID} class="btn btn-sm btn-info-soft me-1 mb-1"><i class="fas fa-fw fa-eye"></i></Link>
															{
																user.role != "Admin" ? <Link to={"PropertyAddEdit/" + p.propertyID} class="btn btn-sm btn-success-soft me-1 mb-1"><i class="far fa-fw fa-edit"></i></Link> : ""
															}
															<button class="btn btn-sm btn-danger-soft mb-1" onClick={() => {
																if (window.confirm('Are you sure to delete this record?')) { OnDelete(p.propertyID) }
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