import { BrowserRouter, Routes, Route, Link ,useNavigate} from 'react-router-dom';
import Dashboard from "./Dashboard";
import { FaBell, FaEye, FaImage } from "react-icons/fa";
import "../assets/vendor/font-awesome/css/all.min.css"
import "../assets/vendor/bootstrap-icons/bootstrap-icons.css"
import "../assets/css/style.css"
import "../assets/vendor/bootstrap/dist/js/bootstrap.bundle.min.js"
import "../assets/vendor/purecounterjs/dist/purecounter_vanilla.js"
import "../assets/vendor/chart/chart.js"
import "../assets/js/functions.js"
import State from "./State.jsx"
import PropertyList from "./PropertyList.jsx";
import Citys from "./Citys.jsx";
import Countrys from "./Countrys.jsx";
import Users from "./Users.jsx";
import Login from "../Components/Login.jsx"
import Requests from "./Requests.jsx";
import SiteVisit from "./SiteVisit.jsx";
import PropertyImg from "./PropertyImg.jsx";
import PropertyAddEdit from './PropertyAddEdit.jsx';
import UserAddEdit from './UserAddEdit.jsx';
import RequestAddEdit from './RequestAddEdit.jsx';
import CityAddEdit from './CityAddEdit.jsx';
import SiteVisitAddEdit from './SiteVisitAddEdit.jsx';
import StateAddEdit from './StateAddEdit.jsx';
import CountryAddEdit from './CountryAddEdit.jsx';
import MyProfile from './MyProfile.jsx';
import { ToastContainer } from 'react-toastify';
import PropertyDetails from './PropertyDetails.jsx';
import PageNotFound from '../Components/PageNotFound.jsx';
import { PiCityFill } from 'react-icons/pi';
import { FaLocationDot } from 'react-icons/fa6';
import { GiEarthAmerica, GiSouthAmerica, GiWorld } from 'react-icons/gi';

export default function AdminPanel() {
    var nav = useNavigate()
    const user = JSON.parse(localStorage.getItem('user'))
    function IsTokenAvl(){
        if(localStorage.getItem("token")){
            return true
        }
        else{
            return false
        }
    } 
    function onLogOut(){
        localStorage.removeItem("token")
        localStorage.removeItem("user")
        nav("/Login")
    }


    return <>
        <div class="dashboard-topbar navbar-dark bg-dark ">
        
            <div class="d-flex justify-content-between align-items-center">

                <a class="navbar-brand d-flex align-items-center py-2" href="index.html">
                    <img class="navbar-brand-item" src="\src\assets\images\logo-light.svg" alt="logo" />
                </a>


                <ul class="list-inline m-0 text-primary-hover">

                    <li class="d-none d-md-inline-block list-inline-item text-white me-3">
                        <form class="align-self-center position-relative" role="search" action="#">
                            <input type="text" class="form-control bg-secondary-soft text-white border-0" placeholder="Search here..." />
                            <button type="submit" id="search-submit" class="btn position-absolute top-50 end-0 translate-middle-y"><i class="fa fa-search text-secondary"></i></button>
                        </form>
                    </li>

                    <li class="list-inline-item me-2 me-sm-3"> <a href="#" class="text-white"><i class="far fa-envelope"></i></a></li>
                    <li class="list-inline-item me-2 me-sm-3">
                        <a href="#" class="text-white position-relative">
                            <i class="far fa-bell"></i>
                            <span class="position-absolute top-0 start-100 translate-middle badge rounded-circle bg-danger p-1">
                                <span class="visually-hidden">unread messages</span>
                            </span>
                        </a>
                    </li>
                   
                    <li class="list-inline-item">
                        <Link to={"/Admin/MyProfile"} class="btn-link">
                            <img class="box-sm rounded-circle" src="\src\assets\images\profile.png" alt="Profile picture" />
                        </Link>
                        <ul class="dropdown-menu min-w-auto" aria-labelledby="dropdownAvatar">
                            <li><a class="dropdown-item" href="#">Profile</a></li>
                            <li><a class="dropdown-item" href="#">Setting</a></li>
                            <li><a class="dropdown-item" href="#">My Wallet</a></li>
                            <li><a class="dropdown-item" href="#">Sign out</a></li>
                        </ul>
                    </li>

                    <li class="list-inline-item d-md-inline-block d-lg-none">
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#dashboardNav" aria-controls="dashboardNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                    </li>
                </ul>
            </div>
        </div>


        <div class="container-fluid px-0 w-100">
            <div class="row page-wrapper">

                <nav class="navbar navbar-expand-lg navbar-light bg-light px-3">
                    <div class="collapse navbar-collapse" id="dashboardNav">
                        <div class="dashboard-sidebar bg-light">
                            <div class="content mt-3">

                                <div class="navlistlist-group list-group-borderless p-3 p-md-4 ">
                                    <p class="text-body mb-2">Main</p>
                                    <Link class="list-group-item hover-primary-soft active" to="/Admin"><i class="fas fa-fw fa-tachometer-alt me-2"></i>Dashboard</Link>

                                    <p class="text-body mt-3 mb-2">Manage Listing</p>
                                    <Link class="list-group-item hover-primary-soft" to="/Admin/PropertyList"><i class="fa fa-home me-2" aria-hidden="true"></i>Property</Link>
                                    {/* <a class="list-group-item hover-primary-soft" href="agent-property.html"><i class="fas fa-fw fa-home me-2"></i>My Property</a>
                                        <a class="list-group-item hover-primary-soft" href="agent-favorite.html"><i class="fab fa-fw fa-gratipay me-2"></i>My Favorites</a>
                                        <a class="list-group-item hover-primary-soft" href="agent-review.html"><i class="far fa-fw fa-comment-dots me-2"></i>Review</a>
                                         */}
                                    <Link class="list-group-item hover-primary-soft" to="/Admin/PropertyImg"><FaImage className='me-2'/> Property Images</Link>
                                    <Link class="list-group-item hover-primary-soft" to="/Admin/Requests"><FaBell className='me-2'/>Requests</Link>
                                    <Link class="list-group-item hover-primary-soft" to="/Admin/SiteVisit"><FaEye className='me-2'/>Site Visits</Link>
                                    {
                                        user.role=='Admin'?
                                        <>
                                        <Link class="list-group-item hover-primary-soft" to="/Admin/City"><PiCityFill className='me-2'/>City</Link>
                                        <Link class="list-group-item hover-primary-soft" to="/Admin/State"><GiSouthAmerica className='me-2'/>State</Link>
                                        <Link class="list-group-item hover-primary-soft" to="/Admin/Country"><GiEarthAmerica className='me-2'/>Country</Link>
                                        </>:""
                                    }
                                    {user.Role=="Admin"?<Link class="list-group-item hover-primary-soft" to="/Admin/Users"><i class="far fa-fw fa-comment-dots me-2"></i>Users</Link>
                                    :""}
                                    <p class="text-body mt-3 mb-2">Manage Account</p>
                                    <Link class="list-group-item hover-primary-soft" to={"/Admin/MyProfile"}><i class="fas fa-fw fa-user-alt me-2"></i>My Profile</Link>
                                    <a class="list-group-item hover-primary-soft" onClick={onLogOut}><i class="fas fa-fw fa-sign-out-alt me-2"></i>Log Out</a>

                                    <p class="text-body mt-3 mb-1">Agent of:</p>
                                    <a class="list-group-item" href="#">
                                        <img class=" " src="/src/assets/images/agency/03.svg" alt="Profile picture" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
                <div class="main-content" >
                    <Routes>
                        <Route path="/" element={IsTokenAvl()?<Dashboard />:nav("/Login")} />
                        <Route path="/PropertyList" element={IsTokenAvl()?<PropertyList />:nav("/Login")} />
                        <Route path="/PropertyImg" element={IsTokenAvl()?<PropertyImg />:nav("/Login")} />
                        <Route path="/Users" element={(IsTokenAvl() )?<Users />:nav("/Login")} />
                        <Route path="/SiteVisit" element={IsTokenAvl()?<SiteVisit />:nav("/Login")} />
                        <Route path="/Requests" element={IsTokenAvl()?<Requests />:nav("/Login")} />
                        {
                            user.role=='Admin'?
                            <>
                                <Route path="/City" element={IsTokenAvl()?<Citys />:nav("/Login")} />
                                <Route path="/State" element={IsTokenAvl()?<State />:nav("/Login")} />  
                                <Route path="/Country" element={IsTokenAvl()?<Countrys />:nav("/Login")} />
                            </>:<>
                            `   <Route path="/City" element={IsTokenAvl()?<PageNotFound />:nav("/Login")} />
                                <Route path="/State" element={IsTokenAvl()?<PageNotFound />:nav("/Login")} />  
                                <Route path="/Country" element={IsTokenAvl()?<PageNotFound />:nav("/Login")} />
                            </>
                        }
                        <Route path="/MyProfile" element={IsTokenAvl()?<MyProfile />:nav("/Login")} />
                        <Route path="/PropertyDetails/:id" element={IsTokenAvl()?< PropertyDetails/>:nav("/Login")} />
                        <Route path="/Users/UserAddEdit/:id?" element={IsTokenAvl()?<UserAddEdit />:nav("/Login")} />
                        <Route path="PropertyList/PropertyAddEdit/:id?" element={IsTokenAvl()?<PropertyAddEdit />:nav("/Login")} />
                        <Route path="Requests/RequestAddEdit/:id?" element={IsTokenAvl()?<RequestAddEdit />:nav("/Login")} />
                        <Route path="SiteVisit/SiteVisitAddEdit/:id?" element={IsTokenAvl()?<SiteVisitAddEdit />:nav("/Login")} />
                        <Route path="City/CityAddEdit/:id?" element={IsTokenAvl()?<CityAddEdit />:nav("/Login")} />
                        <Route path="Country/CountryAddEdit/:id?" element={IsTokenAvl()?<CountryAddEdit />:nav("/Login")} />
                        <Route path="State/StateAddEdit/:id?" element={IsTokenAvl()?<StateAddEdit />:nav("/Login")} />
                        </Routes>

                </div>
            </div>
        </div>
        <div class="back-top"><i class="bi bi-arrow-up-short position-absolute top-50 start-50 translate-middle"></i></div>

    </>
}