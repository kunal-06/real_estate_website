import { useEffect, useState } from "react"
import DashBoardCustomShareBar from "./DashaboardCustomShapeBar"
import DeshBoardLineChart from "./DashBoardLineChart"
import PropertyTable from "./PropertyTable"
import VisiteBookLineChart from "./VisiteBookLineaChart"
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { PiCity, PiCityFill } from "react-icons/pi"
import { FaBell } from "react-icons/fa"
import DashBoardLineChart from "./DashBoardLineChart"
import DashBoardPieChart from "./DashboardPieChart"
import DashBoardRedialChart from "./DashBoardRedialChart"

export default function Dashboard() {
    const [Counts, setCounts] = useState({})
    const user = JSON.parse(localStorage.getItem('user'))
    const [highlightedDates, setHighlightedDates] = useState([]);

    const tileClassName = ({ date, view }) => {
        if (view === "month") {

            const isHighlighted = highlightedDates.some(
                (highlightedDate) =>
                    date.getDate() === highlightedDate.getDate() &&
                    date.getMonth() === highlightedDate.getMonth() &&
                    date.getFullYear() === highlightedDate.getFullYear()
            );

            return isHighlighted ? "highlight" : "";
        }
    };
    useEffect(() => {
        if (user.role == "Admin") {
            fetch(`https://localhost:7273/api/Dashboard/0`).then((res) => res.json()).then((data) => {
                setCounts(data)
            })
        }
        else {
            fetch(`https://localhost:7273/api/Dashboard/${user.userID}`).then((res) => res.json()).then((data) => {
                setCounts(data)
            })
            fetch(`https://localhost:7273/api/Dashboard/MonthWiseVisite/${user.userID}`).then((res) => res.json()).then((response) => {
                var newDates = response.map((e) => {
                    console.log(e)
                    var s = e.substring(0, 10).split('-')
                    return new Date(s[2], s[1] - 1, s[0])
                })
                setHighlightedDates([...newDates])
            })
        }
    }, [])
    return <>
        <div class="row">
            <div class="col-12">
                <div class="my-5">
                    <h3>Dashboard</h3>
                    <hr />
                </div>
                <div class="row">
                    <div class="col-12">

                        <svg xmlns="http://www.w3.org/2000/svg" style={{ display: "none" }}>
                            <symbol id="check-circle-fill" fill="currentColor" viewBox="0 0 16 16">
                                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                            </symbol>
                            <symbol id="info-fill" fill="currentColor" viewBox="0 0 16 16">
                                <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z" />
                            </symbol>
                            <symbol id="exclamation-triangle-fill" fill="currentColor" viewBox="0 0 16 16">
                                <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                            </symbol>
                        </svg>

                        {/* <div class="alert alert-success d-flex align-items-center alert-dismissible fade show" role="alert">
                            <svg class="bi flex-shrink-0 me-2" width="24" height="24" role="img" aria-label="Danger:"><use xlink:href="#exclamation-triangle-fill" /></svg>
                            <div>
                                Hello! You have got a new message from customer on <strong>Realty</strong> for rent request
                            </div>
                            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                        </div>


                        <div class="alert alert-danger d-flex align-items-center alert-dismissible fade show mb-5" role="alert">
                            <svg class="bi flex-shrink-0 me-2" width="24" height="24" role="img" aria-label="Success:"><use xlink:href="#check-circle-fill" /></svg>
                            <div>
                                Password change notice for security issue and make your password more strong
                            </div>
                            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                        </div> */}

                        <div class="row ">

                            <div class="col-sm-6 col-xl-3 mb-5 mb-xxl-0">
                                <div class="bg-danger d-flex justify-content-between align-items-center p-3 rounded">
                                    <span class="display-5 text-white opacity-5"><i class="fas fa-fw fa-home"></i></span>
                                    <div class="text-center">
                                        <h3 class="purecounter mb-0 text-white" data-purecounter-start="0" data-purecounter-end="200" data-purecounter-delay="200">{Counts.propertyCount}</h3>
                                        <p class="mb-0 text-white">Total Property</p>
                                    </div>
                                </div>
                            </div>

                            <div class="col-sm-6 col-xl-3 mb-5 mb-xxl-0">
                                <div class="bg-warning d-flex justify-content-between align-items-center p-3 rounded">
                                    <span class="display-5 text-white opacity-5"><FaBell /></span>
                                    <div class="text-center">
                                        <h3 class="purecounter mb-0 text-white" data-purecounter-start="0" data-purecounter-end="156" data-purecounter-delay="200">{Counts.requestCount}</h3>
                                        <p class="mb-0 text-white">Total Requests</p>
                                    </div>
                                </div>
                            </div>

                            <div class="col-sm-6 col-xl-3 mb-5 mb-xxl-0">
                                <div class="bg-info d-flex justify-content-between align-items-center p-3 rounded">
                                    <span class="display-5 text-white opacity-5"><i class="fas fa-fw fa-eye"></i></span>
                                    <div class="text-center">
                                        <h3 class="purecounter mb-0 text-white" data-purecounter-start="0" data-purecounter-end="225" data-purecounter-delay="200">{Counts.siteCount}</h3>
                                        <p class="mb-0 text-white">Total Site Visit</p>
                                    </div>
                                </div>
                            </div>

                            <div class="col-sm-6 col-xl-3 mb-5 mb-xxl-0">
                                <div class="bg-orange d-flex justify-content-between align-items-center p-3 rounded">
                                    <span class="display-5 text-white opacity-5"><PiCityFill /></span>
                                    <div class="text-center">
                                        <h3 class="purecounter mb-0 text-white" data-purecounter-start="0" data-purecounter-end="80" data-purecounter-delay="100">10</h3>
                                        <p class="mb-0 text-white">Avaliable Cities</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="row mt-5">

                            <div class="col-12 m-2 mb-xl-0">
                                <h4 class="mb-4 mt-0">View Statistics</h4>
                                <div class="bg-secondary-soft gap-3 p-4 rounded d-flex justify-content-around row">

                                    {
                                        user.role == 'Admin' ?
                                            <div class="col container m-2">
                                                <div class="row g-5">
                                                    <div class="col-12 border p-3 rounded shadow-sm">
                                                        <div className="row">
                                                            <div className="col d-flex flex-column">
                                                                <h3 class="mb-0 me-2">7</h3>
                                                                <p class="mb-1 fw-bold">Properties for Sell</p>
                                                                <small class="text-muted">Target 3k/month</small>
                                                            </div>

                                                            <div className="col-3 d-flex justify-content-center align-items-center">

                                                                <div class="progress-circle text-success border border-3 rounded-circle p-2" style={{ width: "50px", height: "50px" }}>
                                                                    <span class="fw-bold">90%</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div class="col-12 border p-3 rounded shadow-sm">
                                                        <div className="row">
                                                            <div className="col d-flex flex-column">
                                                                <h3 class="mb-0 me-2">2</h3>
                                                                <p class="mb-1 fw-bold">Properties for Rent</p>
                                                                <small class="text-muted">Target 3k/month</small>
                                                            </div>

                                                            <div className="col-3 d-flex justify-content-center align-items-center">

                                                                <div class="progress-circle text-success border border-3 rounded-circle p-2" style={{ width: "50px", height: "50px" }}>
                                                                    <span class="fw-bold">70%</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            : ""
                                    }
                                    <div className="col-7 border rounded-2 p-3">
                                        <h5 className="mb-3">{user.role=='Admin'?'Monthly Property Added':'Monthly Rent Revenue'}</h5>
                                        
                                        <hr />
                                        <DashBoardLineChart />
                                    </div>

                                    {user.role == 'Seller' ? <div className="col border rounded-2 p-3 px-4">
                                        <h5 className="mb-3">Visiting Days</h5>
                                        <hr />
                                        <Calendar tileClassName={tileClassName} calendarType="iso8601" />
                                        <style>{`
                                    .react-calendar__tile--now {
                                        background: none !important;
                                        color: inherit !important;
                                        }
                                        
                                        .highlight {
                                            background-color:rgb(114, 161, 215) ;
                                            color: black ;
                                            border-radius: 20%;
                                            }
                                            `}</style>
                                    </div> : ""}

                                </div>
                            </div>
                            <hr />

                            <div class="col-12 mt-3 mb-5 mb-xl-0">
                                <div class="bg-secondary-soft row gap-3 p-3 rounded d-flex justify-content-around">
                                    <div className="col-6 border rounded-2 p-3">
                                        <h5 className="mb-3">Monthly Visit Booking</h5>
                                        <hr />
                                        <VisiteBookLineChart />
                                    </div>
                                    {user.role == 'Admin' ?
                                        <div className="col-5 border rounded-2 p-3">

                                            <h5 className="mb-3">Listed Property Category Count</h5>
                                            <hr />
                                            <DashBoardRedialChart />
                                        </div>
                                        :
                                        <div className="col-5 border rounded-2 p-3">
                                            <h5 className="mb-3">Totel Property Sell/Rent</h5>
                                            <hr />
                                            <DashBoardPieChart />
                                        </div>
                                    }


                                </div>
                            </div>
                            <div class="col-12 bg-secondary-soft mt-3 mb-5 mb-xl-0">
                                <PropertyTable />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </>
}