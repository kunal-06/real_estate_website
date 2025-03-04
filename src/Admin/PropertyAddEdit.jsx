
import { useEffect, useState, useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { MapContainer, TileLayer, Marker, useMapEvents, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import markerIcon from "../assets/images/marker.svg";
L.Icon.Default.mergeOptions({
  iconUrl: markerIcon,
});

const ClickableMap = ({ onLocationSelect }) => {
	const map = useMapEvents({
		click(e) {
			onLocationSelect(e.latlng);
		},
		locationfound(e) {
			setPosition(e.latlng)
			map.flyTo(e.latlng, map.getZoom())
		  },
	});
	return null;
};
const ChangeView = ({ position }) => {
	const map = useMap();
	useEffect(() => {
	  map.setView(position, map.getZoom()); // Update map center
	}, [position, map]);
	return null;
  };

export default function PropertyAddEdit() {
	const { id } = useParams();
	var nav = useNavigate()
	const token = localStorage.getItem('token')
	const [PageIndex, setPageIndex] = useState(0)
	const [Country, setCountry] = useState([])
	const [State, setState] = useState([])
	const [City, setCity] = useState([])
	const [errors, setErrors] = useState({});
	const [selectedImages, setSelectedImages] = useState([]);
	const [Images,setImages] = useState([]);
	const categorylist = ["Aparement", "Land", "Houses", "Villas", "Retails", "Shop", "Office"]
	const propertytype = ["For Rent", "For Sell"]
	const [position, setPosition] = useState(null);
	const [formData, setFormData] = useState({

		latitude: "",
		longitude: "",
		propertyName: "",
		title: "",
		description: "",
		propertyType: "",
		badroomNo: 0,
		status: "",
		price: "",
		price_per_sqft: "",
		carpetArea: 0,
		cityID: 0,
		address: "",
		sellerID: 2,
		category: "",
		images: [],
	});


	useEffect(() => {

		if (id != 0 && id != null && id != undefined) {
			fetch("https://localhost:7273/api/Property/" + id).then(res => res.json()).then((data) => {
				setFormData({...data})
				setPosition({lat:data.latitude,lng:data.longitude})
			}).then(()=>{
				fetch(`https://localhost:7273/api/PropertyImg/get-image/`+id).then((res)=>res.json()).then((img)=>{
					const images = img.map((i)=>{
						return URL.createObjectURL(i.imagePath)}
					)
					console.log(images)
				
					setImages([...images])
					})
			})
		}
		// fetch("https://localhost:7273/api/Country").then(res => res.json()).then((data) => {
		// 	setCountry([...data])
		// })
		fetch("https://localhost:7273/api/City").then(res => res.json()).then((data) => {
			setCity([...data])
			console.log(City)
		})
	}, [])

	function onMapLocationSelected(e) {
		setPosition(e)
		setFormData({ ...formData, latitude: e.lat, longitude: e.lng })
		console.log(e)
	}

	function onCountryChange(event) {
		setCity([])
		const index = event.target.selectedIndex;
		const el = event.target.childNodes[index]
		const option = el.getAttribute('id');
		fetch("https://localhost:7273/StateByCountry/" + option,{ method: 'GET',headers:{'Authorization': `Bearer ${token}`}}).then(res => res.json()).then((data) => {
			setState([...data])
		})
	}
	function onStateChange(event) {
		const index = event.target.selectedIndex;
		const el = event.target.childNodes[index]
		const option = el.getAttribute('id');
		fetch("https://localhost:7273/CityByState/" + option,{ method: 'GET',headers:{'Authorization': `Bearer ${token}`}}).then(res => res.json()).then((data) => {
			setCity([...data])

		})
	}

	const handleInputChange = (e) => {
		const { name, value } = e.target;
		// if(name="country")
		setFormData({ ...formData, [name]: value })

	};

	const handleFileChange = (e) => {
		setSelectedImages([...e.target.files]);
		setImages([...e.target.files]) // Store images in a separate state
	};

	const OnCityChange = (e) => {
		const index = e.target.selectedIndex;
		const el = e.target.childNodes[index]
		const option = el.getAttribute('id');

		setFormData({ ...formData, cityID: option })
	}

	const handleSubmit = async (e) => {
		e.preventDefault();


		const uploadData = new FormData();
		if(id>0){
			uploadData.append("PropertyID",id)
		}else{uploadData.append("PropertyID",0)}
		uploadData.append("PropertyName", formData.propertyName);
		uploadData.append("Title", formData.title);
		uploadData.append("Description", formData.description);
		uploadData.append("PropertyType", formData.propertyType);
		uploadData.append("BadroomNo", formData.badroomNo);
		uploadData.append("Status", formData.status);
		uploadData.append("Price", formData.price);
		uploadData.append("Price_per_sqft", formData.price_per_sqft);
		uploadData.append("CarpetArea", formData.carpetArea);
		uploadData.append("CityID", formData.cityID);
		uploadData.append("Address", formData.address);
		uploadData.append("Latitude", formData.latitude);
		uploadData.append("Longitude", formData.longitude);
		uploadData.append("SellerID", formData.sellerID);
		uploadData.append("Category", formData.category);

		selectedImages.forEach((image) => {
			uploadData.append("images", image);
		});

		try {
			if(id != 0 && id != null && id != undefined){
				fetch("https://localhost:7273/api/Property/UpdatePropertyWithImages/"+id, {
					method: "PUT",
					body: uploadData,
				}).then(res=>res.json()).then(response=>{console.log(response)});
			}
			else{
				fetch("https://localhost:7273/api/Property/UploadPropertyWithImages", {
					method: "POST",
					body: uploadData,
				}).then(res=>res.json()).then(response=>{console.log(response)});
				
			}
			
		} catch (error) {
			console.error("Error uploading property:", error);
		}
	};

	const Page = {
		0: <div class="step step1">

			<div class="row gx-5 align-items-center justify-content-center">

				<div class="col-xxl-10 mb-5 mb-xxl-0">
					<div class="row g-3 bg-secondary-soft rounded p-3 p-md-5">
						<h4 class="my-0">Property Status</h4>

						<div class="col-md-12">
							<label class="form-label">Title *</label>
							<input type="text" name="title" value={formData.title} onChange={handleInputChange} class="form-control" aria-label="Title" />
						</div>

						<div class="col-md-12">
							<label for="exampleFormControlTextarea1" class="form-label">Description *</label>
							<textarea class="form-control" value={formData.description} onChange={handleInputChange} name="description" id="exampleFormControlTextarea1" rows="4" spellcheck="false"></textarea>
						</div>

						<h4 class="mt-5 mb-0">Property Categories</h4>

						<div class="col-md-6">
							<label class="form-label">Property Name *</label>
							<input type="text" name="propertyName" value={formData.propertyName} onChange={handleInputChange} class="form-control" aria-label="property id" />
						</div>

						<div class="col-md-6">
							<label class="form-label">Type *</label>
							<select class="form-select js-choice" value={formData.propertyType} onChange={handleInputChange} name="propertyType" aria-label="Default select example">
								<option value="">Select item</option>
								{propertytype.map(element => {
									return <option>{element}</option>
								})}
							</select>
						</div>

						<div class="col-md-6">
							<label class="form-label">Category *</label>
							<select class="form-select js-choice" value={formData.category} name="category" onChange={handleInputChange} aria-label="Default select example">
								<option value="">Select item</option>
								{categorylist.map(element => {
									return <option>{element}</option>
								})}
							</select>
						</div>

						<div class="col-md-6">
							<label class="form-label">Status *</label>
							<select class="form-select js-choice" value={formData.status} onChange={handleInputChange} name="status" aria-label="Default select example">
								<option value="">Select item</option>
								{
									['Available', 'Inactive', 'Sold'].map(element => {
										return <option>{element}</option>
									})
								}
							</select>
						</div>

						<div class="col-md-6">
							<label class="form-label">Bedroom *</label>
							<select class="form-select js-choice" onChange={handleInputChange} name="badroomNo" aria-label="Default select example">
								<option value="">Select item</option>
								<option>1</option>
								<option>2</option>
								<option>3</option>
							</select>
						</div>

						<h4 class="mt-5 mb-0">Property price</h4>


						<div class="col-md-6">
							<label class="form-label">CarpetArea *</label>
							<input type="text" name="carpetArea" value={formData.carpetArea} onChange={handleInputChange} class="form-control" aria-label="after price label" />
						</div>

						<div class="col-md-6 ">
							<label class="form-label">Pre Squre rate *</label>
							<input type="text" name="price_per_sqft" value={formData.price_per_sqft} onChange={handleInputChange} class="form-control" aria-label="t	ax rate" />
						</div>

						<div class="col-md-6">
							<label class="form-label">Enter price *</label>
							<input type="text" name="price" value={formData.price} onChange={handleInputChange} class="form-control" aria-label="price" />
						</div>

					</div>
				</div>
			</div>
		</div>,
		1: <div class="step step2">

			<div class="row gx-5 align-items-center justify-content-center">

				<div class="col-xxl-10 mb-5 mb-xxl-0">
					<div class="row g-3 bg-secondary-soft p-3 p-md-5 rounded">
						<h4 class="mb-4 mt-0">Upload your property photo</h4>

						<div class={"mt-0 " + id ? "col-md-12" : "col-md-3"}>
							<div class="d-flex justify-content-center align-items-center p-4 bg-primary-soft border-dashed rounded">
								<input type="file" id="customFile" name="file" multiple accept="image/*" onChange={handleFileChange} />
								<label for="customFile" style={{ "cursor": "pointer" }}>
									<span class="fs-2 text-primary"><i class="fas fa-file-upload me-4"></i></span>
								</label>
								<div>
									<h6 class="mb-1">Drag file here or click to upload</h6>
									<span>upload up to 8 files</span>
								</div>
							</div>
						</div>

						<h4 class="mt-5 mb-0">Priview</h4>
						<div className="row g-4">
							{selectedImages.map(e => {
								
								const url = URL.createObjectURL(e)
								return <img src={url} className="col-xxl-6 col-xl-4 col-3" width={"300px"} height={"auto"} />
							})}
						</div>
						{/* <h4 class="mt-5 mb-0">Video option</h4>

						<div class="col-md-6">
							<label class="form-label">Video from *</label>
							<select class="form-select js-choice" aria-label="Default select example">
								<option value="">Select item</option>
								<option>Youtube</option>
								<option>Vimeo</option>
							</select>
						</div>

						<div class="col-md-6">
							<label class="form-label">Video link *</label>
							<input type="text" class="form-control" aria-label="property id" />
						</div> */}
					</div>
				</div>
			</div>
		</div>,
		2: <div class="step step3">

			<div class="row gx-5">

				<div class="col-xxl-6 mb-5 mb-xxl-0">
					<div class="bg-secondary-soft p-3 p-sm-5 rounded">
						<div class="row g-3">
							<h4 class="my-4">Location Detail</h4>

							{/* <div class="col-md-6">
								<label class="form-label">Country *</label>
								<select name="country" id="" class="form-control" onChange={onCountryChange}>
									<option>Select Country</option>
									{
										Country.map(c => {
											return <option id={c.countryID}>{c.countryName}</option>
										})
									}
								</select>
							</div>

							<div class="col-md-6">
								<label class="form-label">State *</label>
								<select name="state" id="" class="form-control" onChange={onStateChange}>
									<option>Select State</option>
									{
										State.map(s => {
											return <option id={s.stateID}>{s.stateName}</option>
										})
									}
								</select>
							</div> */}

							<div class="col-md-6">
								<label class="form-label">City *</label>
								<select name="city" id="" onChange={OnCityChange} class="form-control" >
									<option>Select City</option>
									{
										City.map(c => {
											if (e.cityID == FormData.cityID) { return <option selected id={c.cityID}>{c.cityName}</option> }
											else { return <option id={c.cityID}>{c.cityName}</option> }
										})
									}
								</select>
							</div>

							<div class="col-md-6">
								<label class="form-label">Zip *</label>
								<input type="text" class="form-control" aria-label="Zip" />
							</div>

							<div class="col-md-12">
								<label for="exampleFormControlTextarea2" class="form-label">Address *</label>
								<textarea class="form-control" name="address" value={formData.address} onChange={handleInputChange} id="exampleFormControlTextarea2" rows="4" spellcheck="false"></textarea>
							</div>

							<div class="col-md-6">
								<label class="form-label">Latitude *</label>
								<input type="text" value={formData.latitude} name="latitude" class="form-control" aria-label="Latitude" />
							</div>

							<div class="col-md-6">
								<label class="form-label">Longitude *</label>
								<input type="text" value={formData.longitude} name="longitude" class="form-control" aria-label="Longitude" />
							</div>
						</div>
					</div>
				</div>

				<div class="col-xxl-6">
					<div class="row g-3 bg-secondary-soft p-3 p-md-5 rounded">
						<MapContainer
							center={[20, 78]} // Default location
							zoom={5}
							style={{ height: "400px", width: "100%" }}
						>
							 <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
							 {position && <ChangeView position={position} />}
       						 <ClickableMap onLocationSelect={onMapLocationSelected} />
        					{position && <Marker position={position} />}
						 
						</MapContainer>

					</div>
				</div>
			</div>
		</div>,
		3: <div class="step step4">

			<div class="row mb-4 gx-5">
				<div class="col-xxl-12 mb-xxl-0">
					<div class=" bg-secondary-soft p-5 rounded">
						<div class="row">

							<div class="col-sm-6 col-md-4 mt-4 mt-sm-0">

								<h5 class="font-base mb-2">Interior Details</h5>

								<div class="form-check">
									<input class="form-check-input" type="checkbox" value="" id="flexCheckDefault1" />
									<label class="form-check-label" for="flexCheckDefault1">
										Kitchen
									</label>
								</div>

								<div class="form-check">
									<input class="form-check-input" type="checkbox" value="" id="flexCheckDefault2" />
									<label class="form-check-label" for="flexCheckDefault2">
										Laundary
									</label>
								</div>

								<div class="form-check">
									<input class="form-check-input" type="checkbox" value="" id="flexCheckDefault3" />
									<label class="form-check-label" for="flexCheckDefault3">
										Gym
									</label>
								</div>

								<div class="form-check">
									<input class="form-check-input" type="checkbox" value="" id="flexCheckDefault4" />
									<label class="form-check-label" for="flexCheckDefault4">
										Projector Room
									</label>
								</div>
							</div>


							<div class="col-sm-6 col-md-4 mt-4 mt-sm-0">

								<h5 class="font-base mb-2">Outdoor Details</h5>

								<div class="form-check">
									<input class="form-check-input" type="checkbox" value="" id="flexCheckDefault5" />
									<label class="form-check-label" for="flexCheckDefault5">
										Back yard
									</label>
								</div>

								<div class="form-check">
									<input class="form-check-input" type="checkbox" value="" id="flexCheckDefault6" />
									<label class="form-check-label" for="flexCheckDefault6">
										Front yard
									</label>
								</div>

								<div class="form-check">
									<input class="form-check-input" type="checkbox" value="" id="flexCheckDefault7" />
									<label class="form-check-label" for="flexCheckDefault7">
										Attached garrage
									</label>
								</div>

								<div class="form-check">
									<input class="form-check-input" type="checkbox" value="" id="flexCheckDefault8" />
									<label class="form-check-label" for="flexCheckDefault8">
										Pool
									</label>
								</div>
							</div>


							<div class="col-sm-6 col-md-4 mt-4 mt-md-0">

								<h5 class="font-base mb-2">Other Features</h5>

								<div class="form-check">
									<input class="form-check-input" type="checkbox" value="" id="flexCheckDefault9" />
									<label class="form-check-label" for="flexCheckDefault9">
										Elevator
									</label>
								</div>

								<div class="form-check">
									<input class="form-check-input" type="checkbox" value="" id="flexCheckDefault10" />
									<label class="form-check-label" for="flexCheckDefault10">
										Wifi
									</label>
								</div>

								<div class="form-check">
									<input class="form-check-input" type="checkbox" value="" id="flexCheckDefault11" />
									<label class="form-check-label" for="flexCheckDefault11">
										School
									</label>
								</div>

								<div class="form-check">
									<input class="form-check-input" type="checkbox" value="" id="flexCheckDefault12" />
									<label class="form-check-label" for="flexCheckDefault12">
										Transpotation hub
									</label>
								</div>

								<div class="form-check">
									<input class="form-check-input" type="checkbox" value="" id="flexCheckDefault13" />
									<label class="form-check-label" for="flexCheckDefault13">
										Super market
									</label>
								</div>

								<div class="form-check">
									<input class="form-check-input" type="checkbox" value="" id="flexCheckDefault14" />
									<label class="form-check-label" for="flexCheckDefault14">
										Clinic
									</label>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	}

	return <>
		<div class="row">
			<div class="col-12">

				<div class="my-5">
					<h3>Add Property</h3>
					<hr />
				</div>
				<form id="stepByStepForm" class="file-upload" >
					<ul class="progress-step">
						<li class="progress-bar__dot full box-md position-relative me-4 me-lg-0">
							<span class="mb-0 position-absolute top-50 start-50 translate-middle fs-6"><i class="far fa-edit"></i></span>
						</li>
						<li class="progress-bar__connector align-items-center d-none d-lg-block">
							<span class="fs-5 mb-0 ms-2 text-dark">Description</span>
						</li>

						<li class="progress-bar__dot box-md position-relative me-4 me-lg-0">
							<span class="mb-0 position-absolute top-50 start-50 translate-middle fs65"><i class="fas fa-photo-video"></i></span>
						</li>
						<li class="progress-bar__connector align-items-center d-none d-lg-block">
							<span class="fs-5 mb-0 ms-2 text-dark">Media</span>
						</li>

						<li class="progress-bar__dot box-md position-relative me-4 me-lg-0">
							<span class="mb-0 position-absolute top-50 start-50 translate-middle fs65"><i class="fas fa-map-marker-alt"></i></span>
						</li>
						<li class="progress-bar__connector align-items-center d-none d-lg-block">
							<span class="fs-5 mb-0 ms-2 text-dark">Location</span>
						</li>

						<li class="progress-bar__dot box-md position-relative">
							<span class="mb-0 position-absolute top-50 start-50 translate-middle fs65"><i class="fas fa-bars"></i></span>
						</li>
						<li class="progress-bar__connector align-items-center d-none d-lg-block">
							<span class="fs-5 mb-0 ms-2 text-dark">Amenities</span>
						</li>
					</ul>


					{Page[PageIndex]}

					<div class="mt-5 d-flex justify-content-between">
						<a id="previous" class={"btn btn-md btn-dark-soft " + PageIndex <= 0 ? "disable" : ""}
							onClick={() => {
								if (PageIndex > 0) {
									setPageIndex(PageIndex - 1)
								}
							}}
						>
							previous
						</a>
						<a id="next" onClick={() => {
							if (PageIndex < 3) {
								setPageIndex(PageIndex + 1)
							}
						}} class={"btn btn-primary-soft btn-md " + PageIndex >= 4 ? "disable" : ""}>
							next
						</a>
						<a onClick={handleSubmit} class={"btn btn-primary-soft btn-md " + PageIndex != 3 ? "disable " : ""}>
							Submit
						</a>
					</div>

				</form>
			</div>
		</div>
	</>

} 