import { useEffect, useState } from 'react'
import '../App.css'
import { Link } from 'react-router-dom';
import PropertyDetails from '../Admin/PropertyDetails';
import { FaCircle } from 'react-icons/fa';
import { MdOutlineClose } from 'react-icons/md';
export default function Propertys() {
    const [PropertyList, setPropertyList] = useState([])
    const [FilteredProperty, setFilteredPropertyList] = useState([])
    const [SwitchGrid, setSwitchGrid] = useState(0);
    const [CityList, setCityList] = useState([])
    const [filters, setFilters] = useState({
        propertyName: "",
        propertyType: "",
        category: "",
        city: 0,
        minprice: "",
        maxprice: "",
    })
    function onGetPropertys() {
        fetch('https://localhost:7273/api/Property/').then((res) => res.json()).then((data) => {
            setPropertyList([...data])
            setFilteredPropertyList([...data])
        })
    }
    function onCityfetch() {
        fetch('https://localhost:7273/api/City').then((res) => res.json()).then((data) => {
            setCityList([...data])
        })
    }
    useEffect(() => {
        onGetPropertys()
        onCityfetch()
    }, [])

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name == 'city') {
            
            setFilters((prevFilters) => ({
                ...prevFilters,
                'city': value,
            }));
        }
        else if (name == "propertyName") {
            setFilters((prevFilters) => ({
                ...prevFilters,
                [name]: value,
            }));
            handleFilter()

        }
        else {
            console.log("alive")
            setFilters((prevFilters) => ({
                ...prevFilters,
                [name]: value,
            }));
        }
    };

    const handleFilter = () => {
        const filtered = PropertyList.filter((property) => {
            return (
                (filters.propertyName === "" || property.propertyName.toLowerCase().includes(filters.propertyName.toLowerCase())) &&
                (filters.propertyType === "" || property.propertyType === filters.propertyType) &&
                (filters.category === "" || property.category === filters.category) &&
                (filters.city == 0 || property.cityID == filters.city) &&
                (filters.minprice === "" || property.price >= Number(filters.minprice)) &&
                (filters.maxprice === "" || property.price <= Number(filters.maxprice))
            );
        });

        setFilteredPropertyList(filtered);
    };



    const formatPrice = (price) => {
        if (price >= 10000000) {
            return (price / 10000000).toFixed(1).replace(".0", "") + " Cr";
        } else if (price >= 100000) {
            return (price / 100000).toFixed(1).replace(".0", "") + " L";
        } else if (price >= 1000) {
            return (price / 1000).toFixed(1).replace(".0", "") + "K";
        }
        return price.toString();
    };


    return <>
        <section className="propertybanner h-25">
            <div class="container">

                <div class="row">
                    <div class="col-md-12 my-4">
                        <div class="shadow-lg p-3 bg-blur p-4 rounded-1">
                            <div class="row g-3">
                                <div class="col-lg-4 pt-3 pt-lg-0">

                                    <input type="text" class="form-control" id="formGroupExampleInput1" name='propertyName' value={filters.propertyName} onChange={handleChange} placeholder="Enter keyword" />
                                </div>

                                <div class="col-lg-8 pt-3 pt-lg-0">
                                    <div class="row g-3 align-items-center">

                                        <div class="col-sm-6 col-md-3 pb-2 pb-md-0">
                                            <select class="form-select form-select-sm js-choice" name='propertyType' value={filters.propertyType} onChange={handleChange} aria-label=".form-select-sm example">
                                                <option value="">Type</option>
                                                <option>For Rent</option>
                                                <option>For Sale</option>
                                            </select>
                                        </div>

                                        <div class="col-sm-6 col-md-3 pb-2 pb-md-0">
                                            <select class="form-select form-select-sm js-choice" name='category' value={filters.category} onChange={handleChange} aria-label=".form-select-sm example">
                                                <option value="">Categories</option>
                                                <option>Aparement</option>
                                                <option>Land</option>
                                                <option>Houses</option>
                                                <option>Villas</option>
                                                <option>Retails</option>
                                                <option>Shop</option>
                                                <option>Office</option>
                                            </select>
                                        </div>

                                        <div class="col-sm-6 col-md-1 pb-2 pb-md-0">
                                            <div class="d-grid gap-2">
                                                <input type="checkbox" class="btn-check" id="btn-check-outlined" />
                                                <label class="btn btn-outline-primary" for="btn-check-outlined" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-controls="collapseExample">
                                                    <i class="fas fa-sliders-h me-2"></i>
                                                </label	>
                                            </div>
                                        </div>
                                        <div class="col-sm-6 col-md-1 pb-2 pb-md-0">
                                            <div class="d-grid gap-2">
                                                <button  class="btn btn-outline-danger" onClick={(e)=>{
                                                    
                                                    setFilters(
                                                        {
                                                            propertyName: "",
                                                            propertyType: "",
                                                            category: "",
                                                            city: 0,
                                                            minprice: "",
                                                            maxprice: "",
                                                        }
                                                    )
                                                    setFilteredPropertyList(PropertyList)
                                                    
                                            }}> <MdOutlineClose/></button>
                                                
                                            </div>
                                        </div>

                                        <div class="col-sm-6 col-md-3 pb-2 pb-md-0">
                                            <button type="button" onClick={handleFilter} class="btn btn-primary w-100">Search</button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="row">

                                <div class="collapse" id="collapseExample">
                                    <div class="row g-3 mt-3">

                                        <div class="col-sm-6 col-md-3 pb-2 pb-md-0">
                                            <select class="form-control" name='city' onChange={handleChange} value={filters.city} aria-label=".form-select-sm example">
                                                <option value="">Select City</option>
                                                {CityList.map((c) => <option value={c.cityID}>{c.cityName}</option>)}
                                            </select>
                                        </div>

                                        {/* <div class="col-sm-6 col-md-3 pb-2 pb-md-0">
                                            <select class="form-select form-select-sm js-choice"  aria-label=".form-select-sm example">
                                                <option value="">Areas</option>
                                                <option>Manhattan</option>
                                                <option>Queens</option>
                                                <option>Westside</option>
                                            </select>
                                        </div> */}

                                        <div class="col-sm-6 col-md-3 pb-2 pb-md-0">

                                            <input type="text" class="form-control" name='minprice' onChange={handleChange} value={filters.minprice} id="formGroupExampleInput2" placeholder="Min Price" />
                                        </div>

                                        <div class="col-sm-6 col-md-3 pb-2 pb-md-0">

                                            <input type="text" class="form-control" name='maxprice' onChange={handleChange} value={filters.maxprice} id="formGroupExampleInput3" placeholder="Max Price" />
                                        </div>


                                        {/* <h6 class="font-base text-primary mt-4"><i class="fas fa-fw fa-sliders-h me-2"></i>Amenities</h6>
                                        <div class="row mt-2">

                                            <div class="col-sm-6 col-md-3">

                                                <div class="form-check">
                                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                    <label class="form-check-label text-white" for="flexCheckDefault">
                                                        Clinic
                                                    </label>
                                                </div>

                                                <div class="form-check">
                                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault2" />
                                                    <label class="form-check-label text-white" for="flexCheckDefault2">
                                                        Internet
                                                    </label>
                                                </div>
                                            </div>


                                            <div class="col-sm-6 col-md-3">

                                                <div class="form-check">
                                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault3" />
                                                    <label class="form-check-label text-white" for="flexCheckDefault3">
                                                        Park
                                                    </label>
                                                </div>

                                                <div class="form-check">
                                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault4" />
                                                    <label class="form-check-label text-white" for="flexCheckDefault4">
                                                        School
                                                    </label>
                                                </div>
                                            </div>


                                            <div class="col-sm-6 col-md-3">

                                                <div class="form-check">
                                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault5" />
                                                    <label class="form-check-label text-white" for="flexCheckDefault5">
                                                        Supermarket
                                                    </label>
                                                </div>

                                                <div class="form-check">
                                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault6" />
                                                    <label class="form-check-label text-white" for="flexCheckDefault6">
                                                        Swiming pool
                                                    </label>
                                                </div>
                                            </div>


                                            <div class="col-sm-6 col-md-3">

                                                <div class="form-check">
                                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault7" />
                                                    <label class="form-check-label text-white" for="flexCheckDefault7">
                                                        Transportation hub
                                                    </label>
                                                </div>

                                                <div class="form-check">
                                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault8" />
                                                    <label class="form-check-label text-white" for="flexCheckDefault8">
                                                        Air Conditioning
                                                    </label>
                                                </div>
                                            </div>
                                        </div> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>

        <section class="pt-5">
            <div class="container">

                <div class="row mb-4">
                    <div class="col-md-12">

                        <div class="d-md-flex justify-content-md-between align-items-center">

                            <span></span>

                            <div class="text-primary-hover text-end d-none d-md-block">
                                <ul class="list-inline">

                                    <li class="list-inline-item"><a onClick={() => { SwitchGrid == 0 ? setSwitchGrid(1) : "" }} class="border rounded-1 p-2 me-2"><i class="fas fa-fw fa-th-large"></i></a></li>

                                    <li class="list-inline-item"><a onClick={() => { SwitchGrid == 1 ? setSwitchGrid(0) : "" }} class="border rounded-1 p-2 me-2"><i class="fas fa-fw fa-list-ul"></i></a></li>
                                </ul>
                            </div>
                        </div>

                    </div>
                </div>

                <div class="row">


                    <div class="col-lg-12 order-1">

                        <h3>Property List</h3>

                        {SwitchGrid == 0 ?
                            <div class="row mt-5">
                                {FilteredProperty.map((p) => {
                                    return <>
                                        <div class="col-md-8">
                                            <div class="card mb-5 card-img-scale">
                                                <div class="row g-3">
                                                    <div class="col-md-5 col-lg-12 col-xl-5">
                                                        <div class="card overflow-hidden">

                                                            {p.imagePath != "" && p.imagePath != null ?
                                                                <img class="card-img rounded-1" src={"https://localhost:7273/" + p.imagePath} alt="Card image" /> :
                                                                <img width={400} src="/src/assets/images/noimageplaceholder.png" />}

                                                            <div class="card-img-overlay">

                                                                <div class="d-flex justify-content-between align-items-center">
                                                                    <a href="#" class="badge bg-orange">Limited</a>
                                                                    <div>
                                                                        <a href="#" class="badge bg-dark text-white me-2"><i class="fas fa-video pe-2"></i><span>2</span></a>
                                                                        <a href="#" class="badge bg-dark text-white"><i class="fas fa-camera pe-2"></i><span>2</span></a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div class="col-md-7 col-lg-12 col-xl-7">
                                                        <div class="row">

                                                            <div class="col-md-7">

                                                                <h4 class="card-title"><a href="#">{p.propertyName}</a></h4>
                                                                <p class="small mb-3 mb-md-2 text-primary-hover"><a href="#"><i class="fas fa-map-marker-alt me-1"></i>{p.address}n</a></p>

                                                                <ul class="nav nav-divider align-items-center text-uppercase small mb-2 mb-lg-3">
                                                                    <li class="nav-item me-4 mb-1">
                                                                        <i class="fas fa-bed pe-1"></i> <span>{p.badroomNo}</span>
                                                                    </li>
                                                                    <li class="nav-item me-4 mb-1">
                                                                        <i class="fas fa-user pe-1"></i> <span>6</span>
                                                                    </li>
                                                                    <li class="nav-item me-4 mb-1">
                                                                        <i class="fas fa-square pe-1"></i> <span>{p.carpetArea}<sup class="text-lowercase">m2</sup></span>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                            <div class="col-md-5">
                                                                <div class="d-sm-flex justify-content-sm-between">

                                                                    <div class="mb-2 mb-sm-0">
                                                                        <span class="badge bg-warning-soft text-warning"><i class="fas fa-rupee-sign pe-1"></i>{p.propertyType}</span>
                                                                        <span class="badge bg-success-soft text-success"><i class="fas fa-home pe-1"></i>{p.category}</span>
                                                                    </div>

                                                                    <div>
                                                                        <div class="d-flex d-md-block align-items-center mb-2 mb-lg-0">
                                                                            <h5 class="text-success mb-0 me-3 me-md-0">₹{p.price}</h5>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <div class="d-flex justify-content-end align-items-center">



                                                                <div class="d-flex align-items-center">
                                                                    {/* <a href="#" class="text-end me-3 mb-0 h5"><i class="fas fa-fw fa-heart-o text-danger"></i></a> */}
                                                                    <Link to={`/ProeprtyDetails/${p.propertyID}`} class="btn btn-dark btn-sm">View details</Link>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>

                                    </>
                                })
                                }
                                </div>
                                :
                                <div class="row mt-5">

                                    {FilteredProperty > 0 && FilteredProperty.map((p) => {
                                        return <>
                                            <div class="col-sm-4 p-2">
                                                <div class="card mb-4">
                                                    <div class="position-relative overflow-hidden">

                                                        {p.imagePath != "" && p.imagePath != null ?
                                                            <img class="card-img rounded" src={"https://localhost:7273/" + p.imagePath} alt="Card image" /> :
                                                            <img width={700} src="/src/assets/images/noimageplaceholder.png" />}


                                                        <div class="card-img-overlay">
                                                            <div class="text-end">
                                                                <a href="#" class="badge bg-dark text-light me-2"><i class="fas fa-video pe-2"></i><span>5</span></a>
                                                                <a href="#" class="badge bg-dark text-light"><i class="fas fa-camera pe-2"></i><span>2</span></a>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div class="card-body px-2 pt-3">

                                                        <div class="d-flex justify-content-between">
                                                            <div>
                                                                <a href="#" class="badge bg-danger-soft text-danger"><i class="fas fa-rupee-sign pe-1"></i>{p.propertyType}</a>
                                                            </div>
                                                            {/* <a href="#"><i class="fas fa-heart fa-fw text-danger ms-auto"></i></a> */}
                                                        </div>

                                                        <h4 class="card-title mt-3">
                                                            <a href="#">{p.title}</a>
                                                        </h4>

                                                        <ul class="nav nav-divider align-items-center text-uppercase small mt-3">
                                                            <li class="nav-item me-4">
                                                                <i class="fas fa-bed pe-1"></i> <span>{p.badroomNo}</span>
                                                            </li>
                                                            <li class="nav-item me-4">
                                                                <i class="fas fa-bath pe-1"></i> <span>2</span>
                                                            </li>
                                                            <li class="nav-item me-4">
                                                                <i class="fas fa-user pe-1"></i> <span>4</span>
                                                            </li>
                                                            <li class="nav-item me-4">
                                                                <i class="fas fa-square pe-1"></i> <span>{p.carpetArea}<sup class="text-lowercase">m2</sup></span>
                                                            </li>
                                                        </ul>

                                                        <div class="mt-3 d-flex justify-content-between align-items-center">
                                                            <h3 class="text-success">{formatPrice(p.price)}</h3>

                                                            <Link to={`/ProeprtyDetails/${p.propertyID}`} class="btn btn-dark btn-sm" href="#">View details</Link>
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>
                                        </>
                                    })}

                                </div>
                        }
                        {
                            FilteredProperty.length == 0 &&<h3>No property Found . . . </h3>
                        }


                                {/* <div class="col-12">
                            <nav class="mt-4 d-flex justify-content-center" aria-label="navigation">
                                <ul class="pagination pagination-bordered rounded">
                                    <li class="page-item disabled">
                                        <a class="page-link" href="#" tabindex="-1"><i class="fas fa-chevron-left"></i></a>
                                    </li>
                                    <li class="page-item"><a class="page-link" href="#">1</a></li>
                                    <li class="page-item active"><a class="page-link" href="#">2</a></li>
                                    <li class="page-item"><a class="page-link" href="#">3</a></li>
                                    <li class="page-item disabled"><a class="page-link" href="#">..</a></li>
                                    <li class="page-item"><a class="page-link" href="#">15</a></li>
                                    <li class="page-item">
                                        <a class="page-link" href="#"><i class="fas fa-chevron-right"></i></a>
                                    </li>
                                </ul>
                            </nav>
                        </div> */}
                            </div>

                </div>
                </div>
        </section>
    </>
}