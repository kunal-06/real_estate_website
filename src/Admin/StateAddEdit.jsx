import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
export default function StateAddEdit() {
	const { id } = useParams();
	var nav = useNavigate()
	const [StateList, setStateList] = useState({})
	const [CountryList,setCountryList] = useState([])
	const [errors, setErrors] = useState({});
	function OnFillData(id) {
		fetch('https://localhost:7273/api/State/' + id).then((res) => res.json()).then((data) => {
			setStateList(data[0])
		})
	}

	const onChangeFunction = (event) => {
		if (event.id == "country") {
			const index = event.target.selectedIndex;
			const el = event.target.childNodes[index]
			const option = el.getAttribute('id');
			setCityList({
				...StateList,countryID:option
			});
		}
		else{
		setStateList({
			...StateList,
			[event.target.name]: event.target.value,
		});}
		console.log(StateList)
	};

	useEffect(() => {
		if (id != null) {
			OnFillData(id)
		}
		fetch('https://localhost:7273/api/Country').then(res => res.json()).then(data => {setCountryList([...data]),console.log(data)})
	}, [])

	const editState = () => {
		const token = localStorage.getItem('token');
		if (id != null) {
			fetch("https://localhost:7273/api/State/" + id, {
				method: "PUT",
				headers: { "Content-Type": "application/json", 'Authorization': `Bearer ${token}`},
				body: JSON.stringify(StateList)
			}).then(res=>res.json()).then((response) => {
				if (response.status === 400) {
					const errorData = response.errors;
					setErrors(errorData);
					console.log(errors);
				}
				else if(response.status === 200){
					nav(-1)
				}
				console.log(response)
			})
		}
		else {
			fetch("https://localhost:7273/api/State", {
				method: "POST",
				headers: { "Content-Type": "application/json" ,'Authorization': `Bearer ${token}`},
				body: JSON.stringify(StateList)
			}).then(res => res.json()).then((response) => {
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
					<h3>AddEdit State</h3>
					<hr />
				</div>
				<form id="stepByStepForm" class="file-upload">

					<div class="step step1">

						<div class="row gx-5 align-items-center justify-content-center">

							<div class="col-xxl-10 mb-5 mb-xxl-0">
								<div class="row g-3 bg-secondary-soft rounded p-3 p-md-5">



									<div class="col-md-12">
										<label class="form-label">State Name</label>
										<input type="text" name="stateName" value={StateList.stateName || ""} onChange={onChangeFunction} class="form-control" aria-label="StateName" />
										{
											errors.StateName?.map((err, index) => (
												<div key={index} style={{ color: "red" }}>
													{err}
												</div>))
										}
									</div>

									<div class="col-md-12">
										<label class="form-label">Country Name</label>
										<select class="form-select js-choice" id="country" onChange={onChangeFunction}>
											{CountryList.map(s => {
												return <option id={s.countryID} selected={StateList.countryID==s.countryID?true:false}>{s.countryName}</option>
											})}
										</select>
										{
											errors.CountryID?.map((err, index) => (
												<div key={index} style={{ color: "red" }}>
													{err}
												</div>))
										}
									</div>

									<div className="col-md-6">
										<Link to={-1} className="btn btn-success m-1">back</Link>
										<a onClick={editState} className="btn btn-primary m-1">Update</a>
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