import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { Bounce, ToastContainer, toast } from 'react-toastify'

export default function CityAddEdit() {
	const { id } = useParams();
	var nav = useNavigate()
	
	const [CityList, setCityList] = useState({})
	const [StateList, setStateList] = useState([])
	const [errors, setErrors] = useState({});
	function OnFillData(id) {
		fetch('https://localhost:7273/api/City/' + id).then((res) => res.json()).then((data) => {
			setCityList(data[0])
		})
	}

	const onChangeFunction = (event) => {

		if (event.target.id === "stateName") {
			const index = event.target.selectedIndex;
			const el = event.target.childNodes[index]
			const option = el.getAttribute('id');
			setCityList({
				...CityList, stateID: option
			});
			console.log(CityList)
		}
		else {
			setCityList({
				...CityList,
				[event.target.name]: event.target.value,
			});
		}

	};

	useEffect(() => {
		if (id != null) {
			OnFillData(id)
		}
		const token = localStorage.getItem('token')
		fetch('https://localhost:7273/api/State',{ method: 'GET',headers:{'Authorization': `Bearer ${token}`}}).then(res => res.json()).then(data => { setStateList([...data]) })
	}, [])

	const editCity = () => {
		const token = localStorage.getItem('token')
		if (id != null) {
			fetch("https://localhost:7273/api/City/" + id, {
				method: "PUT",
				headers: {
					"Content-Type": "application/json",
					'Authorization': `Bearer ${token}`
				},
				body: JSON.stringify(CityList)
			}).then(res => res.json()).then((response) => {
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
					console.error("Server Error:", response.status);
				}
			})
		}
		else {
			fetch("https://localhost:7273/api/City", {
				method: "POST",
				headers: { "Content-Type": "application/json", 'Authorization': `Bearer ${token}` },
				body: JSON.stringify(CityList)
			}).then((response) => {
				if (response.status === 400) {
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

				} else if (response.status === 200) {
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
				}
				else {
					console.error("Server Error:", response.status);
				}
			})
		}
	}

	return <>
		<div class="row">
			<div class="col-12">

				<div class="my-5">
					<h3>AddEdit City</h3>
					<hr />
				</div>
				<form id="stepByStepForm" class="file-upload">

					<div class="step step1">

						<div class="row gx-5 align-items-center justify-content-center">

							<div class="col-xxl-10 mb-5 mb-xxl-0">
								<div class="row g-3 bg-secondary-soft rounded p-3 p-md-5 needs-validation">


									<div class="col-md-12">
										<label class="form-label">City Name</label>
										<input type="text" value={CityList.cityName || ""} name="cityName" onChange={onChangeFunction} placeholder="City Name" id="validationCustom01" class="form-control" />
										{
											errors.CityName?.map((err, index) => (
												<div key={index} style={{ color: "red" }}>
													{err}
												</div>))
										}

									</div>


									<div class="col-md-12">
										<label class="form-label">State Name</label>
										<select class="form-select js-choice" id="stateName" onChange={onChangeFunction}>
											{StateList.map(s => {
												return <option id={s.stateID} selected={CityList.stateID == s.stateID ? true : false}>{s.stateName}</option>
											})}
										</select>
										{
											errors.StateID?.map((err, index) => (
												<div key={index} style={{ color: "red" }}>
													{err}
												</div>))
										}
									</div>



									<div className="col-md-6">
										<Link to={-1} className="btn btn-success m-1">back</Link>

										<a type="submit" onClick={editCity} className="btn btn-primary m-1" >{id ? "Update" : "Insert"}</a>

									</div>
									<ToastContainer />
								</div>
							</div>
						</div>
					</div>
				</form>
			</div>
		</div>
	</>
}