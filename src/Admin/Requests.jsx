import { useEffect, useState } from "react"
import { Link } from 'react-router-dom';
export default function Requests() {

	const [RequestList, setRequestList] = useState([])
	const [FilteredRequestList, setFilteredRequestList] = useState([])
	const user = JSON.parse( localStorage.getItem('user'))
	function onGetRequests(){
		const token = localStorage.getItem('token')
		if(user.role=='Seller'){
			fetch('https://localhost:7273/api/Request/User/'+user.userID,{headers:{'Authorization': `Bearer ${token}` }}).then((res) => res.json()).then((data) => {
				setRequestList([...data])
				setFilteredRequestList([...data])
			})	
		}
		else if(user.role=="Admin"){
			fetch('https://localhost:7273/api/Request',{headers:{'Authorization': `Bearer ${token}` }}).then((res) => res.json()).then((data) => {
				setRequestList([...data])
				setFilteredRequestList([...data])
			})
		}
	}

	
	useEffect(() => {
		onGetRequests()
	}, [])

	function onStatechange(id,status){
		const token = localStorage.getItem('token')
		if(status=="Pending"){
			fetch(`https://localhost:7273/api/Request/Status/${id}/${"Accepted"}`, {method: "PUT" ,headers:{'Authorization': `Bearer ${token}` }})
		}
		if(status=="Accepted"){
			fetch(`https://localhost:7273/api/Request/Status/${id}/${"Pending"}`, {method: "PUT",headers:{'Authorization': `Bearer ${token}` }})
		}
		onGetRequests()
	}
	function onRequestRejected(id,status){
		const token = localStorage.getItem('token')
		if(status!="Rejected"){
			fetch(`https://localhost:7273/api/Request/Status/${id}/${"Rejected"}`, {method: "PUT",headers:{'Authorization': `Bearer ${token}` }})
		}
		onGetRequests()
	}

	function OnDelete(id) {
		const token = localStorage.getItem('token')
		fetch('https://localhost:7273/api/Request/' + id, { method: 'DELETE' ,headers:{'Authorization': `Bearer ${token}` }}).then((res) => {
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
	function OnStatusDropDownCall(e){
		if(String(e.target.value)==="Select Status"){onGetRequests()}
		else{setFilteredRequestList(RequestList.filter((r)=>String(r.status)==e.target.value))}
	}


	return <>
		<div class="row">

				<div class="my-5 col-12">
					<h3>Requests</h3>
					<hr />
				</div>


				<div className="form col-12 me-2 row d-flex justify-content-end">
					<div class="col-3 mb-3">
						<label for="exampleInputEmail1" class="form-label">Status</label>
						<select class="form-select js-choice" name="propertyType" onChange={OnStatusDropDownCall} aria-label="Default select example">
								
								{["Select Status","Rejected", "Pending","Accepted"].map(element => {
									return <option>{element}</option>
								})}
							</select>
					</div>
				</div>

				<div class="row col-12">
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
												<div class="col-2 align-middle text-body py-2">
													<h5>Buyer Name</h5>
												</div>
												<div class="col-2 align-middle py-2">
													<h5>Email</h5>
												</div>
												<div class="col-2 align-middle py-2">
													<h5>Phone No.</h5>
												</div>
												<div class="col-2 align-middle py-2">
													<h5>Created</h5>
												</div>
												<div class="col-2 align-middle py-2">
													<h5>Status</h5>
												</div>
												{
													user.Role=="Seller"?<div class="col-2 align-middle py-2">
													<h5>Action</h5>
												</div>:""
												}
											</div>
										</div>
									</div>
								</div>
							</div>


							{
								FilteredRequestList.map((r) => {
									return <>
										<div class="row">
											<div class="col-12 align-middle py-4">
												<div class="row ">
													<div class="col-2">
														<div class="card bg-transparent">
															<div class="row">
																<p class="mb-1 text-body">{r.propertyID}</p>
															</div>
														</div>
													</div>

													<div class="col-10 pt-2 pt-xxl-0">
														<div class="row">
															<div class="col-2 align-middle pt-2 pt-md-0">
																<p>{r.buyerName}</p>
															</div>
															<div class="col-2 align-middle pt-2 pt-md-0" >
																<p>{r.email}</p>
															</div>
															<div class="col-2 align-middle pt-2 pt-md-0">
																<p>{r.phone}</p>
															</div>
															<div class="col-2 align-middle pt-2 pt-md-0">
																<p>{r.created.substring(0, 10)}</p>
															</div>

															<div class="col-2 align-middle pt-2 pt-md-0">
																{(r.status=="Pending")?<p className="p-2 badge text-bg-warning">{r.status}</p>
																	:r.status=="Accepted"?<p className="p-2 badge text-bg-success">{r.status}</p>:
																	<p className="p-2 badge text-bg-danger">{r.status}</p>
																	}
															</div>
															{
																user.role=="Seller"?
															<div class="col-2 align-middle pt-2 pt-md-0">
																<a onClick={()=>onStatechange(r.requestID,r.status)} class="btn btn-sm btn-success-soft me-1 mb-1"><i class="fa fa-check" aria-hidden="true"></i></a>
																<button class="btn btn-sm btn-danger-soft mb-1" onClick={() => {
																	if (window.confirm('Are you sure to Reject Request?')) { onRequestRejected(r.requestID,r.status) }
																}}><i class="fa fa-times" aria-hidden="true"></i></button>
															</div>:""
															}
														</div>
													</div>
												</div>
											</div>
										</div>
										<hr />
									</>
								})

							}
						</div>
					</div>
				</div>
		</div>
	</>
}