import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

export default function RequestAddEdit(){

	const { id } = useParams();
	
	const [RequestList, setRequestList] = useState({})
	const [errors, setErrors] = useState({});
	function OnFillData(id){
		const token = localStorage.getItem('token')
		fetch('https://localhost:7273/api/Request/'+id,{headers:{'Authorization': `Bearer ${token}` }}).then((res) => res.json()).then((data) => {
			setRequestList(data[0])
			
		})
	}

	const onChangeFunction = (event) => {
        setRequestList({
          ...RequestList,
          [event.target.name]: event.target.value,
        });
		console.log(RequestList)
      };

	useEffect(()=>{
		if(id!=null){
			OnFillData(id)
		}
	},[])

	const editRequest = ()=>{
		const token = localStorage.getItem('token')
        if(id!=null){
			fetch("https://localhost:7273/api/Request/" +id ,{
				method:"PUT",
				headers: { "Content-Type": "application/json",'Authorization': `Bearer ${token}`  },
				body: JSON.stringify(RequestList)
			 }).then((response)=>{
				if(response.status ===200){

				}else{
					response.json().then((err)=>{setErrors(err.errors);});
				}
			 })
		}
		else{
			fetch("https://localhost:7273/api/Request",{
				method:"POST",
				headers: { "Content-Type": "application/json",'Authorization': `Bearer ${token}`  },
				body: JSON.stringify(RequestList)
			 }).then((response) => {
				if (response.status === 400) {
					response.json().then((err)=>{setErrors(err.errors);});
				} else {console.error("Server Error:", response.status);}
				})
		}
	}

    return<>
        	<div class="row">
					<div class="col-12">

						<div class="my-5">
							<h3>{id?"Update":"Insert"} Request</h3>
							<hr/>
						</div>
							<form id="stepByStepForm" class="file-upload">
								
								<div class="step step1">

									 <div class="row gx-5 align-items-center justify-content-center">

										<div class="col-xxl-10 mb-5 mb-xxl-0">
											<div class="row g-3 bg-secondary-soft rounded p-3 p-md-5">
											<h4 class="mt-5 mb-0">Property Info</h4>

												<div class="col-md-12">
													<label for="exampleFormControlTextarea1" class="form-label">Description</label>
													<textarea class="form-control" value={RequestList.description || ""} onChange={onChangeFunction}  name="description" id="exampleFormControlTextarea1" rows="4" spellcheck="false"></textarea>
													{
											errors.Description?.map((err, index) => (
												<div key={index} style={{ color: "red" }}>
													{err}
												</div>))
										}
												</div>

												<div class="col-md-12">
													<label class="form-label">BuyerID</label>
													<input type="number" name="buyerID" value={RequestList.buyerID || ""} onChange={onChangeFunction} class="form-control" aria-label="BuyerID"/>
													{
											errors.BuyerID?.map((err, index) => (
												<div key={index} style={{ color: "red" }}>
													{err}
												</div>))
										}
												</div>

												<div class="col-md-12">
													<label class="form-label">SellerID</label>
													<input type="number" name="sellerID" value={RequestList.sellerID || ""} onChange={onChangeFunction} class="form-control" aria-label="SellerID"/>
													{
											errors.SellerID?.map((err, index) => (
												<div key={index} style={{ color: "red" }}>
													{err}
												</div>))
										}
												</div>
												
                                                <div class="col-md-12">
													<label class="form-label">PropertyID</label>
													<input type="number" name="propertyID" value={RequestList.propertyID || ""} onChange={onChangeFunction} class="form-control" aria-label="PropertyID"/>
													{
											errors.PropertyID?.map((err, index) => (
												<div key={index} style={{ color: "red" }}>
													{err}
												</div>))
										}
												</div>

												<h4 class="mt-5 mb-0">Contact Info</h4>

												<div class="col-md-12">
													<label class="form-label">Email</label>
													<input type="email" name="email" value={RequestList.email || ""} onChange={onChangeFunction} class="form-control" aria-label="Email"/>
													{
											errors.Email?.map((err, index) => (
												<div key={index} style={{ color: "red" }}>
													{err}
												</div>))
										}
												</div>

												<div class="col-md-12">
													<label class="form-label">Phone</label>
													<input type="text" name="phone" value={RequestList.phone || ""} onChange={onChangeFunction} class="form-control" aria-label="Phone"/>
													{
											errors.Phone?.map((err, index) => (
												<div key={index} style={{ color: "red" }}>
													{err}
												</div>))
										}
												</div>

											 
												<div className="col-md-6">
													<Link to={-1} className="btn btn-success m-1">back</Link>
									
													<a type="submit" onClick={editRequest} className="btn btn-primary m-1" value={id?"Update":"Insert"}>Update</a>
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