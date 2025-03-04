import { useEffect, useState } from "react"
import { Link } from 'react-router-dom'

export default function SiteVisit() {

	const [SiteVisitList, setSiteVisitList] = useState([])
	const [FilteredSiteVisitList, setFilteredSiteVisitList] = useState([])
	const user = JSON.parse(localStorage.getItem('user'))
	const [filters, setFilters] = useState({
		visitaddress: "",
		startDate: "",
		endDate: ""
	})

	function onCityfetch() {
		const token = localStorage.getItem('token')
		if(user.role=='Admin'){
			fetch('https://localhost:7273/api/VisitBooking',{headers: {'Authorization': `Bearer ${token}` }}).then((res) => res.json()).then((data) => {
				setSiteVisitList([...data])
				setFilteredSiteVisitList([...data])
			})
		}
		else if(user.role=='Seller'){
			fetch('https://localhost:7273/api/VisitBooking',{headers: {'Authorization': `Bearer ${token}` }}).then((res) => res.json()).then((data) => {
				setSiteVisitList([...data])
				setFilteredSiteVisitList([...data])
			})
		}
	}
	
	useEffect(() => {
		onCityfetch()
	}, [])	

	function OnDelete(id) {
		const token = localStorage.getItem('token')
		fetch('https://localhost:7273/api/VisitBooking/' + id, { method: 'DELETE', headers: {'Authorization': `Bearer ${token}` }}).then((res) => {
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

	const handleChange = (e) => {
		const { name, value } = e.target;
		console.log(name,value)
		setFilters((prev) => ({ ...prev, [name]: value }));
	  };

	function onFilterset (){
		setFilteredSiteVisitList(FilteredSiteVisitList.filter((property) => {
			return (
			  (filters.visitaddress === "" || property.visite_Address.includes(String(filters.visitaddress))) &&
			  (filters.startDate === "" || new Date(property.visite_Date.substring(0,10)) >= new Date(filters.startDate)) &&
			  (filters.endDate === "" || new Date(property.visite_Date.substring(0,10)) <= new Date(filters.endDate))
			);
		  }))
	 }
	 function onFilterRemove(){
		setFilters({visitaddress: "",startDate: "",endDate: ""})
		setFilteredSiteVisitList([...SiteVisitList])
	 }



	return <>
		<div class="row">
			<div class="col">

				<div class="mt-5 mb-3 d-flex justify-content-between">
					<h3>Site Visits</h3>
					{user.role!='Admin'?
					<div className="d-flex justify-content-end m-3">
					<Link to={"SiteVisitAddEdit"} class="btn btn-sm btn-success-soft me-1 mb-4"><i class="fa fa-plus" aria-hidden="true"></i> Add Visite</Link>
					</div>
					:""}
					
				</div>
					<hr />

				<div className="form row p-0 m-0 d-flex align-items-center">
					<div class="col-3">
						<label for="exampleInputEmail1" class="form-label">Address</label>
						<input type="text" onChange={handleChange} value={filters.visitaddress} name="visitaddress"  class="form-control" id="exampleInputEmail1" />
					</div>
					<div class="col-7">
						<label for="exampleInputEmail1" class="form-label">Price</label>
						<div className="row">
							<label for="exampleInputEmail1" class="form-label col-2 pt-2">From :</label>
							<input type="date" class="form-control col" value={filters.startDate} onChange={handleChange} name="startDate" id="exampleInputEmail2" />
						
							<label for="exampleInputEmail1" class="form-label col-2 pt-2">To :</label>
							<input type="date" class="form-control col" onChange={handleChange}value={filters.endDate} name="endDate" id="exampleInputEmail3" />
					
						</div>
						
					</div>
					<div class="col-2 pt-2 mt-2 d-flex justify-content-evenly">
						<button onClick={onFilterset} className="btn btn-success"><i class="fa fa-filter" aria-hidden="true"></i></button>
						<button onClick={onFilterRemove} className="btn btn-danger"><i class="fa fa-eraser" aria-hidden="true"></i></button>
					</div>
				</div> 
	 			
				<div class="row">
					<div class="col-md-12">
						<div class="bg-secondary-soft p-3 p-md-5 rounded ">
						
							<div class="row d-xxl-block ">
								<div class="col-12 align-middle py-3">
									<div class="row border-bottom ">
										<div class="col-2 align-middle text-body py-2">
											<h5>Property Code</h5>
										</div>
										<div class="col-10">
											<div class="row">
												<div class="col-3 align-middle text-body py-2">
													<h5>Visit Address</h5>
												</div>
												<div class="col-3 align-middle py-2">
													<h5>Visit Date</h5>
												</div>
												<div class="col-3 align-middle py-2">
													<h5>Created</h5>
												</div>
												{
													user.role=="Seller"?<div class="col-3 align-middle py-2">
													<h5>Action</h5>
												</div>:""
												}
											</div>
										</div>
									</div>
								</div>
							</div>

							{FilteredSiteVisitList.map((sv) => {
								return <>
									<div class="row">
										<div class="col-12 align-middle py-4">
											<div class="row ">
												<div class="col-2">
													<div class="card bg-transparent">
														<div class="row">
															<p class="mb-1 text-body">{sv.propertyID}</p>
														</div>
													</div>
												</div>

												<div class="col-10 pt-2 pt-xxl-0">
													<div class="row">
														<div class="col-3 align-middle pt-2 pt-md-0">
															<p>{sv.visite_Address}</p>
														</div>
														<div class="col-3 align-middle pt-2 pt-md-0">
															<p>{sv.visite_Date.substring(0, 10)}</p>
														</div>
														<div class="col-3 align-middle pt-2 pt-md-0">
															<p>{sv.created.substring(0, 10)}</p>
														</div>
														{user.role=='Seller'?
														<div class="col-md-3 align-middle d-flex  pt-2 pt-md-0">
														<Link to={"SiteVisitAddEdit/" + sv.bookingID} class="btn btn-sm btn-success-soft me-1 mb-4"><i class="far fa-fw fa-edit"></i></Link>
														<button class="btn btn-sm btn-danger-soft mb-4" onClick={() => {
															if (window.confirm('Are you sure to delete this record?')) { OnDelete(sv.bookingID) }
														}}><i class="far fa-fw fa-trash-alt"></i></button>
													</div>:""	
														}
														
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