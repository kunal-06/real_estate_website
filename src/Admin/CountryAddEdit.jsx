import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { Bounce, ToastContainer, toast } from 'react-toastify'

export default function CountryAddEdit() {

	const { id } = useParams();
	var nav = useNavigate()
	const [CountryList, setCountryList] = useState({})
	const token = localStorage.getItem('token')
	const [errors, setErrors] = useState({});
	function OnFillData(id) {
		fetch('https://localhost:7273/api/Country/' + id,{ method: 'GET',headers:{'Authorization': `Bearer ${token}`}}).then((res) => res.json()).then((data) => {
			setCountryList(data[0])
		})
	}

	const onChangeFunction = (event) => {
		setCountryList({
			...CountryList,
			[event.target.name]: event.target.value,
		});
		console.log(CountryList)
	};

	useEffect(() => {
		if (id != null) {
			OnFillData(id)
		}
	}, [])

	const editCountry = () => {
		if (id != null) {
			fetch("https://localhost:7273/api/Country/" + id, {
				method: "PUT",
				headers: { "Content-Type": "application/json", 'Authorization': `Bearer ${token}` },
				body: JSON.stringify(CountryList)
			}).then((response) => {
				if (response.status === 200) {
					toast.success('City Update Successfully', {
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
				}
				else {
					response.json().then((err)=>{setErrors(err.errors);});
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
					console.error("Server Error:", response.status);
				}
			})
		}
		else {
			fetch("https://localhost:7273/api/Country", {
				method: "POST",
				headers: { "Content-Type": "application/json", 'Authorization': `Bearer ${token}` },
				body: JSON.stringify(CountryList)
			}).then((response) => {

				if (response.status === 200) {
					toast.success('City Inserted Successfully', {
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
					
				} else {
					response.json().then((err)=>{setErrors(err.errors);});
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
					<h3>AddEdit Country</h3>
					<hr />
				</div>
				<form id="stepByStepForm" class="file-upload">

					<div class="step step1">

						<div class="row gx-5 align-items-center justify-content-center">

							<div class="col-xxl-10 mb-5 mb-xxl-0">
								<div class="row g-3 bg-secondary-soft rounded p-3 p-md-5">

									<div class="col-md-12">
										<label class="form-label">Country Name</label>
										<input type="text" onChange={onChangeFunction} name="countryName" value={CountryList.countryName} class="form-control" aria-label="CountryName" />
										{
											errors.CountryName?.map((err, index) => (
												<div key={index} style={{ color: "red" }}>
													{err}
												</div>))
										}
									</div>

									<div className="col-md-6">
										<Link to={-1} className="btn btn-success m-1">back</Link>
										<a type="submit" onClick={editCountry} className="btn btn-primary m-1" >{id ? "Update" : "Insert"}</a>
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