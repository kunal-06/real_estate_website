import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { Bounce, toast, ToastContainer } from "react-toastify";
export default function SiteVisitAddEdit() {

	const { id } = useParams();
	var nav = useNavigate()
	const user = JSON.parse(localStorage.getItem('user'))
	const [SiteVisitList, setSiteVisitList] = useState({
		BuyerID:user.userID
	})
	const [errors, setErrors] = useState({});
	function OnFillData(id) {
		const token = localStorage.getItem('token')
		fetch('https://localhost:7273/api/VisitBooking/' + id,{headers: {'Authorization': `Bearer ${token}` }}).then((res) => res.json()).then((data) => {
			setSiteVisitList(...data,data.buyerID=user.buyerID)
		})
	}

	const onChangeFunction = (event) => {
		setSiteVisitList({ 
			...SiteVisitList,
			[event.target.name]: event.target.value,
		});
		console.log(SiteVisitList)
	};

	useEffect(() => {
		
		if (id != null) {
			OnFillData(id)
		}
	}, [])

	const editSiteVisit = () => {
		const token = localStorage.getItem('token')
		if (id != null) {
			fetch("https://localhost:7273/api/VisitBooking/" + id, {
				method: "PUT",
				headers: { "Content-Type": "application/json",'Authorization': `Bearer ${token}` },
				body: JSON.stringify(SiteVisitList)
			}).then((response) => {
				if (response.status === 200) {
					toast.success('Update Successfully', {
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
					nav(-1)
				} else {
					response.json().then((err) => { setErrors(err.errors); });
					toast.error('Error Ouccer !!!', {
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
		else {
			fetch("https://localhost:7273/api/VisitBooking", {
				method: "POST",
				headers: { "Content-Type": "application/json",'Authorization': `Bearer ${token}`},
				body: JSON.stringify(SiteVisitList)
			}).then((response) => {
				if (response.status === 200) {
					toast.success('Inserted Successfully', {
						position: "top-right",
						autoClose: 5000,
						hideProgressBar: false,
						closeOnClick: false,
						pauseOnHover: true,
						draggable: true,
						progress: undefined,
						theme: "light",
						transition: Bounce,
					})
				} else {
					response.json().then((err) => { setErrors(err.errors); });
					toast.error('Error Ouccer !!!', {
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
	}

	return <>
		<div class="row">
			<div class="col-12">

				<div class="my-5">
					<h3>AddEdit Visite Booking</h3>
					<hr />
				</div>
				<form id="stepByStepForm" class="file-upload">

					<div class="step step1">

						<div class="row gx-5 align-items-center justify-content-center">

							<div class="col-xxl-10 mb-5 mb-xxl-0">
								<div class="row g-3 bg-secondary-soft rounded p-3 p-md-5">

									<div class="col-md-12">
										<label class="form-label">Buyer Name</label>
										<input type="text" name="buyerID" disabled value={user.userName}  class="form-control" aria-label="BuyerID" />
										{
											errors.BuyerID?.map((err, index) => (
												<div key={index} style={{ color: "red" }}>
													{err}
												</div>))
										}
									</div>

									<div class="col-md-12">
										<label class="form-label">Property Code</label>
										<input type="number" name="propertyID" value={SiteVisitList.propertyID} onChange={onChangeFunction} class="form-control" aria-label="PropertyID" />
										{
											errors.PropertyID?.map((err, index) => (
												<div key={index} style={{ color: "red" }}>
													{err}
												</div>))
										}
									</div>


									<div class="col-md-12">
										<label class="form-label">Visit Address</label>
										<input type="text" name="visite_Address"value={SiteVisitList.visite_Address} onChange={onChangeFunction} class="form-control" aria-label="Visit Address" />
										{
											errors.Visite_Address?.map((err, index) => (
												<div key={index} style={{ color: "red" }}>
													{err}
												</div>))
										}
									</div>

									<div class="col-md-12">
										<label class="form-label">Visit Date</label>
										<input type="date" name="visite_Date" value={String(SiteVisitList.visite_Date).substring(0,10)} onChange={onChangeFunction} class="form-control" aria-label="Visit Date" />
										{
											errors.Visite_Date?.map((err, index) => (
												<div key={index} style={{ color: "red" }}>
													{err}
												</div>))
										}
									</div>


									<div className="col-md-6">
										<Link to={-1} className="btn btn-success m-1">back</Link>
										<a type="submit" onClick={editSiteVisit} className="btn btn-primary m-1" >{id ? "Update" : "Insert"}</a>
									</div>
								</div>
								<ToastContainer/>
							</div>
						</div>
					</div>
				</form>
			</div>
		</div>
	</>
}