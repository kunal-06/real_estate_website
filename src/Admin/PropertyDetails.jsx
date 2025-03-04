import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { MapContainer, TileLayer, Marker, useMapEvents, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import markerIcon from "../assets/images/marker.svg";
import { Bounce, toast, ToastContainer } from "react-toastify";
L.Icon.Default.mergeOptions({
    iconUrl: markerIcon,
});

const ChangeView = ({ position }) => {
    const map = useMap();
    useEffect(() => {
        map.setView(position, map.getZoom()); // Update map center
    }, [position, map]);
    return null;
};

export default function PropertyDetails() {
    const { id } = useParams();
    var nav = useNavigate()
    const [Property, setProperty] = useState({ images: [] });
    const [UserDetails, setUserDetails] = useState({})
    const user = JSON.parse(localStorage.getItem('user'))
    const token = localStorage.getItem('token')
    const [Request, setRequest] = useState({
        description: '',
        buyerID: 0,
        sellerID: 0,
        email: '',
        phone: '',
        propertyID: 0
    })

    useEffect(() => {

        if (id != 0 && id != null && id != undefined) {
            fetch("https://localhost:7273/api/Property/" + id).then(res => res.json()).then((data) => {
                if (data.sellerID != null) {
                    fetch(`https://localhost:7273/api/User/${data.sellerID}`,{ method: 'GET',headers:{'Authorization': `Bearer ${token}`}}).then((res) => res.json()).then((userData) => {
                        setUserDetails(...userData)
                        console.log(userData)
                    })
                }
                setProperty(data)
            })

        }
    }, [])

    function handleFormChange(e) {
        var { name, value } = e.target
        setRequest({ ...Request, ['description']: value ,buyerID: user.userID,
            email: user.email,
            phone: user.phone,
            propertyID: Property.propertyID,
            sellerID: Property.sellerID,
            Status:"Pending"})
    }
    function onSubmitRequestForm() {
        const token = localStorage.getItem('token')
        fetch("https://localhost:7273/api/Request", {
            method: "POST",
            headers: { "Content-Type": "application/json" ,'Authorization': `Bearer ${token}` },
            body: JSON.stringify(Request)
        }).then((response) => {
            if (response.status === 200) {
                response.json().then((err)=>{console.log(err.errors);});
                toast.success('Sended Successfully', {
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
            else{
                response.json().then((err)=>{console.log(err.errors);});
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

return <>
    <section class="pt-3 pt-md-4">
        <div class="container card-grid">
            <button className="btn btn-outline-success my-3" onClick={(e) => { e.preventDefault(), nav(-1) }}><i class="fa fa-arrow-left" aria-hidden="true"></i>  Back</button>
            <div class="row">
                <div class="col-md-12">
                    <div class="row mt-3">

                        <div className="col-8">
                            {Property.images.length > 0 ? <img src={"https://localhost:7273/" + Property.images[0].imagePath} width={700} /> :
                                <img width={600} src="/src/assets/images/noimageplaceholder.png" />}
                        </div>
                        {/* /src/assets/images/property/pd/01.jpg */}

                        <div class="col-lg-4 mt-4 mt-lg-0">
                            <div class="row">
                                <div class="col-12">

                                    <div class="d-flex justify-content-between mb-4">
                                        <div>
                                            <a href="#" class="badge bg-orange text-white">Featured</a>
                                            <a href="#" class="badge bg-danger-soft text-danger"><i class="fas fa-rupee-sign pe-1"></i>{Property.propertyType}</a>
                                        </div>
                                        <ul class="list-inline text-primary-hover">

                                            <li class="list-inline-item"><a href="#" class="border rounded p-1 me-1 small"><i class="fas fa-fw fa-print"></i></a></li>

                                            <li class="list-inline-item position-relative">
                                                <a href="#" class="btn-link border rounded p-1 me-1 small" role="button" id="dropdownShare" data-bs-toggle="dropdown" aria-expanded="false">
                                                    <i class="fas fa-fw fa-share-alt"></i>
                                                </a>

                                                <ul class="dropdown-menu dropdown-w-sm dropdown-menu-end rounded" aria-labelledby="dropdownShare">
                                                    <li><a class="dropdown-item" href="#"><i class="fab fa-twitter-square me-2"></i>Twitter</a></li>
                                                    <li><a class="dropdown-item" href="#"><i class="fab fa-facebook-square me-2"></i>Facebook</a></li>
                                                    <li><a class="dropdown-item" href="#"><i class="fab fa-linkedin me-2"></i>LinkedIn</a></li>
                                                    <li><a class="dropdown-item" href="#"><i class="fas fa-copy me-2"></i>Copy link</a></li>
                                                </ul>
                                            </li>

                                            <li class="list-inline-item"><a href="#" class="border rounded p-1 me-1 small"><i class="fas fa-fw fa-heart text-danger"></i></a></li>
                                        </ul>
                                    </div>

                                    <h3 class="lh-1 mb-3">{Property.title}</h3>

                                    <div class="d-flex align-items-center mb-3">
                                        <h4 class="text-success mb-0 me-2">₹{Property.price}</h4>
                                    </div>

                                    <div class="row mb-3">

                                        <div class="col-sm-12 mb-0">
                                            <ul class="list-group list-group-borderless">
                                                <li class="list-group-item text-dark px-0 d-flex">
                                                    Address:<span class="text-body ms-2">{Property.address}</span>
                                                </li>
                                            </ul>
                                        </div>

                                        {/* <div class="col-sm-6 mb-0">
                                                <ul class="list-group list-group-borderless">
                                                    <li class="list-group-item text-dark px-0">
                                                        Country:<span class="text-body ms-2">Italy</span>
                                                    </li>
                                                    <li class="list-group-item text-dark px-0">
                                                        State:<span class="text-body ms-2">Maxico</span>
                                                    </li>
                                                </ul>
                                            </div> */}

                                        <div class="col-sm-6 mb-0">
                                            <ul class="list-group list-group-borderless">
                                                <li class="list-group-item text-dark px-0">
                                                    City:<span class="text-body ms-2">{Property.cityName}</span>
                                                </li>
                                                <li class="list-group-item text-dark px-0">
                                                    Zip:<span class="text-body ms-2">13055</span>
                                                </li>
                                            </ul>
                                        </div>

                                        <a href="#map" class="btn btn-link text-start">
                                            <i class="fas fa-map-marker-alt me-2"></i>See map location
                                        </a>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="py-0">
        <div class="container position-relative" data-sticky-container="">
            <div class="row">

                <div class="col">

                    <nav id="navbar-example" class="navbar navbar-dark bg-dark rounded">
                        <ul class="nav p-2">

                            <li class="nav-item">
                                <a class="nav-link" href="#description">Description</a>
                            </li>

                            <li class="nav-item">
                                <a class="nav-link" href="#detail">Detail</a>
                            </li>

                            <li class="nav-item">
                                <a class="nav-link" href="#map">Map</a>
                            </li>
                        </ul>
                    </nav>



                    <div class="row g-0 mt-5" id="description">
                        <div class="col-12 border rounded p-4">
                            <div class="row">

                                <div class="mb-4">
                                    <h3>Description</h3>
                                </div>

                                <div class="col-sm-6 col-xl-3 mb-4">
                                    <div class="d-flex align-items-center">
                                        <div class="box-lg bg-primary-soft rounded-circle h5 mb-0">
                                            <i class="fas fa-fw fa-bed text-primary"></i>
                                        </div>
                                        <div class="ms-2">
                                            <span class="text-dark small">Bedroom</span>
                                            <h5 class="mb-0 font-base">{Property.badroomNo}</h5>
                                        </div>
                                    </div>
                                </div>

                                {/* <div class="col-sm-6 col-xl-3 mb-4">
                                        <div class="d-flex align-items-center">
                                            <div class="box-lg bg-primary-soft rounded-circle h5 mb-0">
                                                <i class="fas fa-fw fa-bath text-primary"></i>
                                            </div>
                                            <div class="ms-2">
                                                <span class="text-dark small">Bathroom</span>
                                                <h5 class="mb-0 font-base">2</h5>
                                            </div>
                                        </div>
                                    </div> */}

                                <div class="col-sm-6 col-xl-3 mb-4">
                                    <div class="d-flex align-items-center">
                                        <div class="box-lg bg-primary-soft rounded-circle h5 mb-0">
                                            <i class="fas fa-fw fa-bath text-primary"></i>
                                        </div>
                                        <div class="ms-2">
                                            <span class="text-dark small">Person</span>
                                            <h5 class="mb-0 font-base">6</h5>
                                        </div>
                                    </div>
                                </div>

                                <div class="col-sm-6 col-xl-3 mb-4">
                                    <div class="d-flex align-items-center">
                                        <div class="box-lg bg-primary-soft rounded-circle h5 mb-0">
                                            <i class="fas fa-fw fa-square text-primary"></i>
                                        </div>
                                        <div class="ms-2">
                                            <span class="text-dark small">SQFT</span>
                                            <h5 class="mb-0 font-base">{Property.carpetArea}<sup class="text-lowercase">m2</sup></h5>
                                        </div>
                                    </div>
                                </div>

                                <div class="col-sm-6 col-xl-3 mb-4">
                                    <div class="d-flex align-items-center">
                                        <div class="box-lg bg-primary-soft rounded-circle h5 mb-0">
                                            <i class="fas fa-fw fa-hammer text-primary"></i>
                                        </div>
                                        <div class="ms-2">
                                            <span class="text-dark small">Year built</span>
                                            <h5 class="mb-0 font-base">2019</h5>
                                        </div>
                                    </div>
                                </div>

                                <div class="col-sm-6 col-xl-3 mb-4">
                                    <div class="d-flex align-items-center">
                                        <div class="box-lg bg-primary-soft rounded-circle h5 mb-0">
                                            <i class="fas fa-fw fa-warehouse text-primary"></i>
                                        </div>
                                        <div class="ms-2">
                                            <span class="text-dark small">Garage</span>
                                            <h5 class="mb-0 font-base">1</h5>
                                        </div>
                                    </div>
                                </div>

                                <div class="col-sm-6 col-xl-3 mb-4">
                                    <div class="d-flex align-items-center">
                                        <div class="box-lg bg-primary-soft rounded-circle h5 mb-0">
                                            <i class="fas fa-fw fa-file-invoice text-primary"></i>
                                        </div>
                                        <div class="ms-2">
                                            <span class="text-dark small">Status</span>
                                            <h5 class="mb-0 font-base">{Property.status}</h5>
                                        </div>
                                    </div>
                                </div>

                                <p class="mt-3">{Property.description}</p>

                            </div>
                        </div>

                    </div>



                    <div class="row g-0 mt-5" id="detail">
                        <div class="col-12 border rounded p-4">
                            <div class="row">

                                <div class="primary-line mb-4">
                                    <h3>Details</h3>
                                </div>

                                <div class="col-sm-6 col-md-4">
                                    <ul class="list-group list-group-borderless">
                                        <li class="list-group-item px-0">
                                            Property ID:<span class="text-body ms-2">{Property.propertyID}</span>
                                        </li>
                                        <li class="list-group-item px-0">
                                            Property Size:<span class="text-body ms-2">{Property.carpetArea} sqft<sup></sup></span>
                                        </li>
                                        <li class="list-group-item px-0">
                                            Garage:<span class="text-body ms-2">No</span>
                                        </li>
                                        <li class="list-group-item px-0">
                                            Roofing:<span class="text-body ms-2">No</span>
                                        </li>
                                        <li class="list-group-item px-0">
                                            Room:<span class="text-body ms-2">{Property.badroomNo}</span>
                                        </li>
                                    </ul>
                                </div>

                                <div class="col-sm-6 col-md-4">
                                    <ul class="list-group list-group-borderless">
                                        {
                                            Property.propertyType == "For Rent" ? <li class="list-group-item px-0">
                                                Price:<span class="text-body ms-2">$700 / month</span>
                                            </li> : ""
                                        }
                                        <li class="list-group-item px-0">
                                            Customer ID:<span class="text-body ms-2">56</span>
                                        </li>
                                        <li class="list-group-item px-0">
                                            Basement:<span class="text-body ms-2">Yes</span>
                                        </li>
                                        <li class="list-group-item px-0">
                                            Garage Size:<span class="text-body ms-2">No</span>
                                        </li>
                                        <li class="list-group-item px-0">
                                            Ownership:<span class="text-body ms-2">Leasehold</span>
                                        </li>
                                    </ul>
                                </div>

                                <div class="col-sm-6 col-md-4">
                                    <ul class="list-group list-group-borderless">
                                        <li class="list-group-item px-0">
                                            Bathorrm:<span class="text-body ms-2">3</span>
                                        </li>
                                        <li class="list-group-item px-0">
                                            Bedroom:<span class="text-body ms-2">6</span>
                                        </li>
                                        <li class="list-group-item px-0">
                                            Year Built:<span class="text-body ms-2">2005</span>
                                        </li>
                                        <li class="list-group-item px-0">
                                            Available From:<span class="text-body ms-2">2010</span>
                                        </li>
                                        <li class="list-group-item px-0">
                                            Floor No:<span class="text-body ms-2">6</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>



                    <div class="row g-0 mt-5" id="map">
                        <div class="col-6 border rounded p-4">
                            <div class="row">

                                <div class="primary-line mb-4">
                                    <h3>Property Location</h3>
                                </div>
                                <div class="col-12">
                                    <div class="row g-3 rounded">
                                        <div class="position-md-absolute end-0 top-0 w-100 h-400 mb-4">
                                            <MapContainer
                                                center={[20, 78]} // Default location
                                                zoom={5}
                                                style={{ height: "400px", width: "100%" }}
                                            >
                                                <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                                                {Property.latitude != null || Property.longitude != null ?
                                                    <>
                                                        <ChangeView position={{ lat: Property.latitude, lng: Property.longitude }} />
                                                        <Marker position={{ lat: Property.latitude, lng: Property.longitude }} />
                                                    </>

                                                    : ""}
                                            </MapContainer>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <div class="col-6 border rounded p-4">
                                <div class="row">

                                    <div class="primary-line mb-4">
                                        <h3>Seller Details</h3>
                                    </div>
                                    <div class="col-12">
                                        <div class="row g-3 rounded ">
                                            <div class="position-md-absolute end-0 top-0 w-100 h-400 mb-4" style={{fontSize:20}}>
                                               <div className="row">
                                                <span className="col-2"></span>
                                                <p className=" col-4"><b>Name :</b> </p>
                                                <p className=" col-4">{UserDetails.userName}</p>
                                                <span className="col-2"></span>
                                               </div>
                                               <div className="row">
                                               <span className="col-2"></span>
                                               <p className=" col-4"><b>Email : </b></p>
                                               <p className=" col-4">{UserDetails.email}</p>
                                               <span className="col-2"></span>
                                               </div>
                                               <div className="row">
                                               <span className="col-2"></span>
                                               <p className=" col-4"><b>phone : </b></p>
                                               <p className=" col-4">{UserDetails.phone}</p>
                                               <span className="col-2"></span>
                                               </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div> */}
                        <div class="col-lg-6 p-4">
                            <div data-sticky="" data-margin-top="80" data-sticky-for="991">
                                <div class="row mb-5 mb-lg-0">
                                    <div class="col-12 col-md-6 col-lg-12">

                                        <div class="bg-white p-4 shadow-lg rounded mb-4">

                                            <div class="d-flex justify-content-between align-items-center mb-4">
                                                <div class="d-flex align-items-center">

                                                    {/* <div class="avatar avatar-xl">
                                                            <img class="avatar-img rounded-circle" src="/src/assets/images/avatar/3.jpg" alt="avatar" />
                                                        </div> */}

                                                    <div class="ms-3">
                                                        <h5 class="mb-0">Scarlet Doe</h5>
                                                        {/* <ul class="list-inline">
                                                                <li class="list-inline-item me-0 small"><i class="fas fa-star text-warning"></i></li>
                                                                <li class="list-inline-item me-0 small"><i class="fas fa-star text-warning"></i></li>
                                                                <li class="list-inline-item me-0 small"><i class="fas fa-star text-warning"></i></li>
                                                                <li class="list-inline-item me-0 small"><i class="fas fa-star text-warning"></i></li>
                                                                <li class="list-inline-item me-0 small"><i class="fas fa-star-half-alt text-warning"></i></li>
                                                            </ul> */}
                                                    </div>
                                                </div>

                                                <div class="position-relative text-primary-hover">
                                                    <a href="#" class="btn-link border rounded p-2" role="button" id="dropdownShare2" data-bs-toggle="dropdown" aria-expanded="false">
                                                        <i class="fas fa-fw fa-ellipsis-v"></i>
                                                    </a>

                                                    <ul class="dropdown-menu dropdown-w-sm dropdown-menu-end rounded" aria-labelledby="dropdownShare2">
                                                        <li><a class="dropdown-item" href="#"><i class="fas fa-fw fa-phone me-2"></i>Call agent</a></li>
                                                        <li><a class="dropdown-item" href="#"><i class="fas fa-fw fa-envelope me-2"></i>Email agent</a></li>
                                                        <li><a class="dropdown-item" href="#"><i class="fas fa-fw fa-sliders-h me-2"></i>View listing</a></li>
                                                    </ul>
                                                </div>
                                            </div>

                                            <ul class="nav nav-tabs nav-justified flex-column flex-sm-row">
                                                <li class="nav-item mb-2 mb-sm-0"> <a class="nav-link active" data-bs-toggle="tab" href="#tab-2-1">Contact agent </a> </li>
                                                <li class="nav-item mb-2 mb-sm-0"> <a class="nav-link" data-bs-toggle="tab" href="#tab-2-2">Schedule tour</a> </li>
                                            </ul>
                                            <div class="tab-content mb-0">

                                                <div class="tab-pane show active" id="tab-2-1">
                                                    <form class="row">

                                                        <div class="mb-3">
                                                            <label for="exampleFormControlTextarea2" class="form-label">Message *</label>
                                                            <textarea class="form-control" id="exampleFormControlTextarea2" onChange={handleFormChange} rows="3"></textarea>
                                                        </div>

                                                        <div class="d-grid gap-2 mt-2">
                                                            <button class="btn btn-primary" type="button" onClick={onSubmitRequestForm}>Submit</button>
                                                        </div>
                                                    </form>
                                                </div>


                                                <div class="tab-pane" id="tab-2-2">
                                                    <form class="row">
                                                        <div class="mb-3">
                                                            <label class="form-label">Date *</label>
                                                            <input type="date" class="form-control" aria-label="Title" />
                                                        </div>
                                                        <div class="mb-3">
                                                            <label class="form-label">Time *</label>
                                                            <input type="time" class="form-control" aria-label="Title" />
                                                        </div>
                                                        <div class="mb-3">
                                                            <label class="form-label">Name *</label>
                                                            <input type="text" class="form-control" aria-label="Title" />
                                                        </div>
                                                        <div class="mb-3">
                                                            <label for="exampleFormControlInput2" class="form-label">Email address *</label>
                                                            <input type="email" class="form-control" id="exampleFormControlInput2" placeholder="" />
                                                        </div>
                                                        <div class="mb-3">
                                                            <label class="form-label">Phone number *</label>
                                                            <input type="text" class="form-control" aria-label="Title" />
                                                        </div>
                                                        <div class="mb-3">
                                                            <label for="exampleFormControlTextarea3" class="form-label">Message *</label>
                                                            <textarea class="form-control" id="exampleFormControlTextarea3" rows="3"></textarea>
                                                        </div>

                                                        <div class="d-grid gap-2 mt-2">
                                                            <button class="btn btn-primary" onClick={onSubmitRequestForm}>Submit</button>
                                                        </div>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>

                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>


                </div>

<ToastContainer />



            </div>
        </div>
    </section>
</>
}