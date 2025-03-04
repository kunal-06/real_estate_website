import { Link, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Propertys from "./Propertys";
import PropertyDetails from "../Admin/PropertyDetails";
import Contactus from "./Contactus";
import { ToastContainer } from "react-toastify";
import MyProfile from "../Admin/MyProfile";
import UserAddEdit from "../Admin/UserAddEdit";

export default function ClientPanel() {
    const user = JSON.parse(localStorage.getItem('user'))
    const token = localStorage.getItem('token')
    return <>
        <div class="offcanvas offcanvas-end" data-bs-scroll="false" tabindex="-1" id="offcanvasMenu" aria-modal="true" role="dialog">
            <div class="offcanvas-header justify-content-end">
                <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div class="offcanvas-body d-flex flex-column pt-0 px-4">
                <div>
                    <img src="src/assets/images/logo.svg" class="mt-2	" alt="logo" />
                    <p class="pt-3">Points afraid but may end law lasted. Was out laughter raptures returned outweigh.</p>

                    <ul class="nav d-block flex-column my-4">
                        <li class="nav-item text-primary-hover">
                            <a class="nav-link text-dark h4 active" href="index.html">Home</a>
                        </li>
                        <li class="nav-item text-primary-hover">
                            <a class="nav-link text-dark h4" href="about.html">About</a>
                        </li>
                        <li class="nav-item text-primary-hover">
                            <a class="nav-link text-dark h4" href="services.html">Service</a>
                        </li>
                        <li class="nav-item text-primary-hover">
                            <a class="nav-link text-dark h4" href="contact-us.html">Contact Us</a>
                        </li>
                        <li class="nav-item text-primary-hover">
                            <a class="nav-link text-dark h4" href="faq.html">Faqs</a>
                        </li>
                    </ul>
                </div>

                <div class="row m-2">
                    <div class="col-12 bg-light p-4 p-sm-5 rounded text-center">
                        <div class="row justify-content-between align-items-center">

                            <h4>Subscribe today!</h4>
                            <p>Stay up to date with our latest news and product</p>

                            <form>
                                <div class="input-group">
                                    <input class="form-control bg-white border-1" type="email" name="Newsletter" placeholder="Enter your email address" />
                                    <button type="button" class="btn btn-primary mb-0">Subscribe</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

                <div class="mt-auto pb-3 text-center">

                    <p class="text-body mb-2 fw-bold">New York, USA (HQ)</p>
                    <address class="mb-0">750 Sing Sing Rd, Horseheads, NY, 14845</address>
                    <p class="mb-2">Call: <a href="#" class="text-body">123-456-8780</a> </p>
                    <a href="#" class="text-body d-block">example@gmail.com</a>

                    <ul class="list-unstyled list-group-inline display-9 mt-4">
                        <li> <a class="btn btn-round me-2 bg-facebook" href="#"><i class="fab fa-facebook-square"></i></a> </li>
                        <li> <a class="btn btn-round me-2 bg-instagram-gradient" href="#"><i class="fab fa-instagram-square"></i></a> </li>
                        <li> <a class="btn btn-round me-2 bg-twitter" href="#"><i class="fab fa-twitter-square"></i></a> </li>
                        <li> <a class="btn btn-round bg-linkedin" href="#"><i class="fab fa-linkedin"></i></a> </li>
                    </ul>
                </div>
            </div>
        </div>

        <header class="navbar-light navbar-sticky header-static">
            <div class="navbar-top small bg-light d-none d-md-block">
                <div class="container">
                    <div class="d-md-flex justify-content-between align-items-center my-2">

                        <div class="d-flex align-items-center justify-content-center">

                            <ul class="nav justify-content-center justify-content-md-start">
                                <li class="nav-item me-3">
                                    <a class="navbar-link" href="#"><i class="far fa-envelope me-2"></i>example@email.com</a>
                                </li>
                                <li class="nav-item">
                                    <a class="navbar-link" href="#"><i class="fas fa-headset me-2"></i>123-456-789</a>
                                </li>
                            </ul>
                        </div>


                        <div class="d-flex align-items-center justify-content-center">

                            <ul class="list-unstyled d-flex">
                                <li> <a class="px-2" href="#"><i class="fab fa-facebook-square"></i></a> </li>
                                <li> <a class="px-2" href="#"><i class="fab fa-instagram-square"></i></a> </li>
                                <li> <a class="px-2" href="#"><i class="fab fa-twitter-square"></i></a> </li>
                                <li> <a class="ps-2" href="#"><i class="fab fa-linkedin"></i></a> </li>
                            </ul>

                            <ul class="nav ms-3">
                                <li class="nav-item">
                                    {
                                        token == null ?
                                            <Link to={'/Login'} class="nav-link pe-0"><i class="far fa-user me-2"></i>Login</Link>
                                            :<Link to={'/MyProfile'}><img class="box-sm rounded-circle" src="\src\assets\images\profile.png" alt="Profile picture" /></Link>
                                    }
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>


            <nav class="navbar navbar-expand-lg">
                <div class="container">

                    <a class="navbar-brand" href="index.html">
                        <img class="navbar-brand-item" src="/src/assets/images/logo.svg" alt="logo" />
                    </a>



                    <button class="navbar-toggler ms-auto" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">

                        <span class="navbar-toggler-icon"></span>
                    </button>


                    <div class="collapse navbar-collapse" id="navbarCollapse">
                        <ul class="navbar-nav navbar-nav-scroll ms-auto">


                            <li class="nav-item dropdown">
                                <Link to={'/'} class="nav-link navbar-primary-soft-hover " id="homeMenu">Home</Link>
                            </li>


                            {/* <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" id="pagesMenu" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Pages</a>
                                <ul class="dropdown-menu" aria-labelledby="pagesMenu">
                                    <li> <a class="dropdown-item" href="about.html">About</a></li>
                                    <li> <a class="dropdown-item" href="services.html">Service</a></li>
                                    <li> <a class="dropdown-item" href="contact-us.html">Contact</a></li>
                                    <li> <a class="dropdown-item" href="error-404.html">Error 404</a></li>
                                    <li> <a class="dropdown-item" href="maintenance-mode.html">Maintenance</a></li>
                                    <li> <a class="dropdown-item" href="signup.html">Signup</a></li>
                                    <li> <a class="dropdown-item" href="signin.html">Signin</a></li>
                                    <li> <a class="dropdown-item" href="faq.html">Faq</a></li>
                                </ul>
                            </li> */}


                            <li class="nav-item dropdown">
                                <Link class="nav-link " to={'/Propertys'} id="listings">Listings</Link>
                                {/* <ul class="dropdown-menu" aria-labelledby="listings">
                                    <li> <a class="dropdown-item" href="property-list.html">Property list</a></li>
                                    <li> <a class="dropdown-item" href="property-grid.html">Property grid</a></li>

                                    <li class="dropdown-submenu dropend">
                                        <a class="dropdown-item dropdown-toggle" href="#">Property detail</a>
                                        <ul class="dropdown-menu dropdown-menu-start" data-bs-popper="none">
                                            <li> <a class="dropdown-item" href="property-detail.html">Style 1</a> </li>
                                            <li> <a class="dropdown-item" href="property-detail-2.html">Style 2</a> </li>
                                        </ul>
                                    </li>

                                    <li class="dropdown-submenu dropend">
                                        <a class="dropdown-item dropdown-toggle" href="#">Agent</a>
                                        <ul class="dropdown-menu dropdown-menu-start" data-bs-popper="none">
                                            <li> <a class="dropdown-item" href="agent-list.html">Agent list</a> </li>
                                            <li> <a class="dropdown-item" href="agent-detail.html">Agent detail</a> </li>
                                        </ul>
                                    </li>

                                    <li class="dropdown-submenu dropend">
                                        <a class="dropdown-item dropdown-toggle" href="#">Agency</a>
                                        <ul class="dropdown-menu dropdown-menu-start" data-bs-popper="none">
                                            <li> <a class="dropdown-item" href="agency-list.html">Agency list</a> </li>
                                            <li> <a class="dropdown-item" href="agency-detail.html">Agency detail</a> </li>
                                        </ul>
                                    </li>
                                </ul> */}
                            </li>


                            {user != null && user.role != 'Buyer' ? <li class="nav-item dropdown">
                                <Link class="nav-link" to={'/Admin'} id="dashboard" > Dashboard</Link>
                                {/* <div class="dropdown-menu pb-3 pb-lg-0 rounded dropdown-menu-sm-end" data-bs-popper="none" aria-labelledby="dashboard">

                                    <div class="d-none d-sm-flex p-4 bg-light align-items-center mb-3">
                                        <span class="me-3 mb-0 h2"><i class="far fa-chart-bar fa-fw"></i></span>
                                        <div>
                                            <h5 class="mb-0">Analyze full dashboard</h5>
                                            <p class="mb-0">Points afraid but may end laughter raptures</p>
                                        </div>
                                    </div>

                                    <div class="d-block d-sm-flex">
                                        <ul class="list-unstyled w-100 pe-0 pe-lg-5">
                                            <li> <a class="dropdown-item" href="agent-dashboard.html">Dashboard</a></li>
                                            <li> <a class="dropdown-item" href="agent-property.html">My property</a></li>
                                            <li> <a class="dropdown-item" href="agent-add-property.html">Add new property</a></li>
                                        </ul>
                                        <ul class="list-unstyled w-100 pe-0 pe-lg-5">
                                            <li> <a class="dropdown-item" href="agent-profile.html">My profile</a></li>
                                            <li> <a class="dropdown-item" href="agent-add-property.html">Add new property</a></li>
                                        </ul>
                                    </div>

                                    
                                </div> */}
                            </li> : ""}


                            <li class="nav-item">	<Link class="nav-link" to={"/Contact"}>Contact</Link></li>
                        </ul>
                    </div>



                    <div class="nav-item dropdown nav-search ms-1 ms-lg-3">
                        <a class="nav-link" role="button" href="#" id="navSearch" data-bs-toggle="dropdown" aria-expanded="false">
                            <i class="bi bi-search fs-4"> </i>
                        </a>
                        <div class="dropdown-menu dropdown-menu-end shadow rounded p-2" aria-labelledby="navSearch">
                            <form class="input-group">
                                <input class="form-control border-primary" type="search" placeholder="Search" aria-label="Search" />
                                <button class="btn btn-sm btn-primary m-0" type="submit">Search</button>
                            </form>
                        </div>
                    </div>


                    <div class="nav-item ms-1 ms-lg-3">
                        <a class="nav-link p-0" data-bs-toggle="offcanvas" href="#offcanvasMenu" role="button" aria-controls="offcanvasMenu">
                            <i class="bi bi-text-right display-8 rtl-flip" data-bs-target="#offcanvasMenu"> </i>
                        </a>
                    </div>
                </div>
            </nav>

        </header>

        <main>
            <Routes>
                <Route path="/*" element={<Home />} />
                <Route path="/Propertys" element={<Propertys />} />
                <Route path={"/ProeprtyDetails/:id"} element={<PropertyDetails />} />
                <Route path='/Contact' element={<Contactus />} />
                <Route path='/MyProfile' element={<div className="mx-5" style={{scale:"0.9"}}><MyProfile /></div>} />
                <Route path='/UserAddEdit/:id' element={<UserAddEdit />} />
            </Routes>

        </main>


    </>
}