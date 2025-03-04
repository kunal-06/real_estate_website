import { useEffect, useState } from "react"
export default function Home() {

    return <>


        <section class="position-relative overflow-hidden">

            <figure class="rotate position-absolute top-50 start-100 translate-middle">
                <svg class="opacity-1" viewBox="0 0 200 200" width="900px" height="1000px" xmlns="http://www.w3.org/2000/svg">
                    <path class="fill-primary-soft" d="M55.4,-18.3C63.9,8.2,57.5,39.2,36.7,55.4C16,71.5,-19,72.9,-37.8,57.8C-56.7,42.8,-59.4,11.3,-50.4,-15.8C-41.5,-42.9,-20.7,-65.7,1.4,-66.1C23.4,-66.6,46.9,-44.7,55.4,-18.3Z" transform="translate(100 100)" />
                </svg>
            </figure>

            <div class="position-absolute top-50 start-50 translate-middle mt-5 ms-5 mb-n5">
                <span class="blur-element opacity-2"></span>
            </div>

            <div class="container">
                <div class="row justify-content-end align-items-center position-relative">

                    <div class="col-lg-10 position-absolute-lg z-index-9">
                        <div class="row">
                            <div class="col-lg-6">

                                <h1 class="mb-0 display-4">Find your</h1>
                                <h2 class="display-5">Dream <span class="text-primary position-relative">Property

                                    <span class="position-absolute bottom-0 start-0 mb-n2 d-flex">
                                        <svg class="mt-auto" width="100%" height="13px" xmlns="http://www.w3.org/2000/svg">
                                            <path class="fill-primary" fill-rule="evenodd"
                                                d="M212.085,0.394 C204.384,0.051 195.626,0.202 187.838,0.120 C183.695,0.067 180.307,0.298 176.119,0.566 C170.855,0.909 165.842,0.830 160.919,0.938 C140.929,1.402 121.831,2.202 102.966,3.072 C85.830,3.849 68.326,5.613 51.511,5.528 C35.988,5.419 19.171,5.679 3.940,8.169 C-2.659,9.318 0.701,13.793 7.221,12.801 C22.156,10.566 39.083,10.615 54.338,10.577 C62.025,10.558 69.639,9.783 77.332,9.307 C86.344,8.750 95.372,8.246 104.415,7.718 C122.137,6.688 139.886,5.668 158.038,4.717 C162.113,4.505 166.200,4.407 170.328,4.172 C174.299,3.941 178.151,3.269 182.264,3.024 C186.073,2.796 189.753,2.843 193.719,2.546 C198.584,2.173 203.525,1.468 209.034,1.298 C211.295,1.192 214.566,0.484 212.085,0.394 L212.085,0.394 Z" />
                                        </svg>
                                    </span>

                                </span>
                                </h2>

                                <p class="mt-3">Rooms oh fully taken by worse do. Points afraid but may end law lasted. Was out laughter raptures returned outweigh. Luckily cheered colonel I do we attack highest enabled. Tried law yet style child.</p>
                            </div>
                        </div>


                        <div class="row">
                            <div class="col-lg-10">
                                <div class="shadow-lg p-3 mb-5 bg-body p-4 rounded">
                                    <div class="row align-items-center g-3">

                                        <div class="col-sm-6 col-md-3 bottomborder-select">
                                            <select class="form-select form-select-sm js-choice" aria-label=".form-select-sm example" >
                                                <option value="">Type</option>
                                                <option>Rent</option>
                                                <option>Buy</option>
                                                <option>Sale</option>
                                            </select>
                                        </div>

                                        <div class="col-sm-6 col-md-3 bottomborder-select">
                                            <select class="form-select form-select-sm js-choice" aria-label=".form-select-sm example">
                                                <option value="">Category</option>
                                                <option>Aparement</option>
                                                <option>Land</option>
                                                <option>Houses</option>
                                                <option>Villas</option>
                                                <option>Retails</option>
                                                <option>Shop</option>
                                                <option>Office</option>
                                            </select>
                                        </div>

                                        <div class="col-sm-6 col-md-3 bottomborder-select">
                                            <select class="form-select form-select-sm js-choice" aria-label=".form-select-sm example">
                                                <option value="">City</option>
                                                <option>New York</option>
                                                <option>Los Angeles</option>
                                                <option>Phoenix</option>
                                                <option>Mumbai</option>
                                            </select>
                                        </div>

                                        <div class="col-sm-6 col-md-3">
                                            <button type="button" class="btn btn-sm btn-primary w-100">Search</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>


                    <div class="col-lg-7">
                        <div class="row justify-content-center">

                            <div class="col-md-5 col-lg-6 position-relative d-none d-md-block">

                                <img class="border rounded" src="/src/assets/images/about/08.jpg" alt="" />

                                <figure class="position-absolute bottom-0 end-0 mb-n4">
                                    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="105px" height="68px">
                                        <path class="fill-dark" fill-rule="evenodd"
                                            d="M99.147,26.309 C96.847,26.202 94.894,23.934 95.420,21.689 C96.111,18.732 101.243,17.958 103.728,18.040 C106.540,21.381 102.550,26.467 99.147,26.309 ZM80.779,43.590 C79.264,43.267 76.909,42.659 77.146,40.505 C77.473,37.542 82.617,38.441 84.593,38.581 L84.543,38.922 C86.128,38.741 87.422,41.210 86.773,42.460 C85.799,44.336 82.373,43.931 80.779,43.590 ZM78.374,10.217 C75.852,11.089 72.400,11.023 72.232,7.568 C72.018,3.195 78.765,1.934 81.970,2.571 C84.265,5.654 81.781,9.038 78.374,10.217 ZM73.362,61.788 C72.709,65.351 68.249,66.985 65.142,67.388 C62.224,63.055 65.063,59.504 68.644,56.829 L69.259,56.374 C71.823,55.341 73.775,59.536 73.362,61.788 ZM50.822,35.374 C40.828,37.529 40.176,20.897 52.978,25.223 L52.212,24.841 C54.463,25.221 56.114,27.538 56.345,29.836 C56.695,33.318 54.029,34.682 50.822,35.374 ZM39.291,7.238 C31.618,2.096 42.219,-1.702 47.041,2.081 C51.689,7.805 44.162,10.502 39.291,7.238 ZM41.640,52.132 C45.774,56.380 47.867,62.688 41.292,65.693 C29.573,71.047 26.179,49.429 41.640,52.132 ZM17.672,35.636 C12.967,35.438 5.677,32.113 6.452,26.429 C7.389,19.549 17.899,20.396 22.747,21.964 C25.073,23.792 27.686,27.424 27.500,29.840 C27.163,34.214 21.348,35.791 17.672,35.636 ZM13.053,54.196 C17.516,58.735 5.129,62.811 1.725,58.672 C-0.533,55.927 0.192,54.402 3.220,52.694 C7.080,50.517 10.419,50.804 13.053,54.196 Z" />
                                    </svg>
                                </figure>
                            </div>



                            <div class="col-10 col-md-5 col-lg-6 position-relative">

                                <img class="border rounded mt-5" src="/src/assets/images/about/09.jpg" alt="" />

                                <figure class="position-absolute top-0 end-0">
                                    <svg width="52px" height="150px" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                                        <path class="fill-primary" fill-rule="evenodd"
                                            d="M51.176,43.525 C51.134,56.432 51.232,69.137 50.076,82.017 C49.058,93.357 45.967,104.671 47.291,116.073 C47.941,121.668 47.586,127.187 48.339,132.790 C48.975,137.524 49.686,144.373 47.852,148.872 C47.412,149.952 46.007,150.001 45.584,148.872 C44.598,146.241 45.178,143.572 45.320,140.803 C45.506,137.182 45.247,133.802 44.774,130.212 C44.106,125.152 44.038,120.113 43.084,115.090 C41.027,104.261 42.602,92.948 41.608,82.017 C39.276,56.376 40.213,30.668 44.858,5.363 C45.194,3.534 48.243,3.535 48.578,5.363 C49.779,11.927 51.262,18.537 51.638,25.208 C51.989,31.427 51.196,37.351 51.176,43.525 ZM31.838,15.306 C32.213,21.283 31.046,26.954 31.130,32.839 C31.303,44.965 30.181,56.759 29.062,68.837 C27.812,82.324 26.094,95.562 25.936,109.157 C25.900,112.244 25.935,115.341 25.827,118.426 C25.734,121.101 25.140,123.818 25.382,126.500 C25.654,129.503 26.801,132.039 26.874,135.084 C26.960,138.672 27.593,141.973 28.340,145.467 C28.932,148.236 24.527,148.444 24.736,145.952 C25.019,142.575 24.367,139.272 24.630,135.891 C24.849,133.070 24.352,130.872 24.123,128.114 C23.607,121.881 23.775,115.437 23.701,109.157 C23.623,102.415 23.428,95.762 22.658,89.058 C21.910,82.552 22.966,76.211 22.405,69.743 C21.863,63.499 20.571,56.846 21.328,50.604 C22.042,44.713 21.868,38.779 21.839,32.839 C21.824,29.676 22.681,26.802 22.951,23.681 C23.192,20.896 22.967,18.095 23.089,15.306 C23.293,10.650 23.538,4.474 26.792,0.872 C27.506,0.082 29.152,-0.006 29.853,0.872 C33.002,4.817 31.541,10.551 31.838,15.306 ZM9.086,138.892 C9.953,143.485 2.879,145.435 2.009,140.830 C-0.004,130.174 1.014,118.583 2.382,107.893 C3.864,96.315 2.769,84.197 2.843,72.519 C2.925,59.661 2.963,46.801 3.185,33.943 C3.240,30.788 3.677,27.480 3.190,24.348 C2.804,21.864 2.363,19.986 2.581,17.419 C2.994,12.551 2.566,7.720 3.401,2.914 C3.679,1.316 5.824,1.950 5.989,3.262 C6.370,6.309 7.775,8.812 8.238,11.783 C8.614,14.192 8.281,16.644 8.470,19.064 C8.673,21.675 9.602,24.064 9.695,26.703 C9.791,29.438 9.640,32.190 9.675,34.928 C9.829,47.139 9.919,59.350 9.997,71.562 C10.037,77.797 10.029,84.033 10.093,90.268 C10.148,95.590 10.661,100.880 10.005,106.184 C8.702,116.718 7.099,128.377 9.086,138.892 Z" />
                                    </svg>
                                </figure>


                                <div class="position-absolute bottom-0 end-0 me-n5 mb-n5">
                                    <div class="card d-inline-block mb-3 me-3">

                                        <div class="card-body bg-white shadow-lg rounded">

                                            <h4 class="card-title"><a href="post-single-4.html" class="btn-link text-reset fw-bold">Luxury villa in Paris</a></h4>

                                            <ul class="nav nav-divider align-items-center text-uppercase small mt-3">
                                                <li class="nav-item me-4">
                                                    <i class="fas fa-bed pe-1"></i>5
                                                </li>
                                                <li class="nav-item me-4">
                                                    <i class="fas fa-bath pe-1"></i>3
                                                </li>
                                                <li class="nav-item me-4">
                                                    <i class="fas fa-user pe-1"></i>6
                                                </li>
                                                <li class="nav-item me-4">
                                                    <i class="fas fa-square pe-1"></i>2900<sup class="text-lowercase">m2</sup>
                                                </li>
                                            </ul>

                                            <div class="mt-3">
                                                <a href="#" class="badge bg-primary-soft text-primary"><i class="fas fa-user-friends pe-1"></i>Family</a>
                                                <a href="#" class="badge bg-warning-soft text-warning"><i class="fas fa-rupee-sign pe-1"></i>Rent</a>
                                            </div>

                                            <div class="mt-3 d-flex">
                                                <h3 class="text-success pe-2">$500</h3><span class="pt-2">/month</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="position-relative overflow-hidden">

            <figure class="position-absolute top-50 start-0 translate-middle">
                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="496px" height="455px">
                    <path class="fill-primary-soft opacity-1" fill-rule="evenodd"
                        d="M248.000,-0.000 C384.967,-0.000 496.000,101.855 496.000,227.500 C496.000,353.144 384.967,455.000 248.000,455.000 C111.033,455.000 0.000,353.144 0.000,227.500 C0.000,101.855 111.033,-0.000 248.000,-0.000 Z" />
                </svg>
            </figure>

            <div class="container">
                <div class="row align-items-center justify-content-center position-relative g-5">

                    <div class="col-10 col-lg-6 position-relative order-2 order-lg-1">


                        <figure class="position-absolute top-0 end-0 mt-n5 d-none d-sm-block">
                            <svg>
                                <path class="fill-primary" d="M44.5,139.5c-0.1,0.6-0.6,1.1-1.4,1.4c-0.4,0.2-0.9,0.3-1.4,0.4c-0.3,0-0.6,0.1-0.9,0.1c-0.2,0-0.3,0-0.5,0
							c-0.2,0-0.3,0-0.5,0c-0.3,0-0.7,0-1.1,0c-0.2,0-0.4,0-0.6,0c-0.2,0-0.4,0-0.6-0.1c-0.4-0.1-0.8-0.1-1.2-0.2
							c-0.4-0.1-0.8-0.2-1.3-0.3c-0.2-0.1-0.4-0.1-0.7-0.2c-0.2-0.1-0.4-0.1-0.7-0.2c-0.4-0.1-0.9-0.3-1.3-0.5
							c-0.4-0.2-0.9-0.4-1.4-0.6l-0.3-0.2c-0.1-0.1-0.2-0.1-0.3-0.2c-0.2-0.1-0.5-0.2-0.7-0.4c-0.2-0.1-0.7-0.4-1.3-0.7
							c-0.3-0.2-0.7-0.4-1.1-0.7c-0.4-0.3-0.9-0.6-1.4-0.9c-0.5-0.3-1.1-0.7-1.7-1.1c-0.3-0.2-0.6-0.4-0.9-0.7
							c-0.2-0.1-0.3-0.2-0.5-0.4c-0.2-0.1-0.3-0.2-0.5-0.4c-0.6-0.5-1.3-1.1-2-1.7c-0.7-0.6-1.4-1.3-2.2-2c-3-2.9-6.2-6.5-9.1-11.2
							c-1.5-2.3-2.8-4.9-4.1-7.7l-0.1-0.3l-0.1-0.3c-0.1-0.2-0.1-0.4-0.2-0.5c-0.1-0.4-0.3-0.7-0.4-1.1c-0.1-0.4-0.3-0.7-0.4-1.1
							c-0.1-0.2-0.1-0.4-0.2-0.6c-0.1-0.2-0.1-0.4-0.2-0.6c-0.1-0.4-0.3-0.8-0.4-1.1c-0.1-0.2-0.1-0.4-0.2-0.6s-0.1-0.4-0.2-0.6
							c-0.1-0.4-0.2-0.8-0.3-1.2c-0.1-0.4-0.2-0.8-0.3-1.2c-0.1-0.4-0.2-0.8-0.3-1.2c-0.1-0.4-0.2-0.8-0.3-1.2C1.2,99.4,1.1,99,1,98.6
							c0-0.2-0.1-0.4-0.1-0.6c0-0.2-0.1-0.4-0.1-0.6c-0.1-0.4-0.1-0.8-0.2-1.3c-0.1-0.4-0.1-0.9-0.2-1.3c0-0.2-0.1-0.4-0.1-0.6
							c0-0.2,0-0.4-0.1-0.7c0-0.4-0.1-0.9-0.1-1.3c-0.1-0.9-0.1-1.8-0.1-2.7c0-0.2,0-0.4,0-0.7c0-0.2,0-0.4,0-0.7c0-0.5,0-0.9,0-1.4
							c0-0.5,0-0.9,0-1.4c0-0.2,0-0.5,0-0.7s0-0.5,0-0.7c0-0.5,0.1-0.9,0.1-1.4c0-0.5,0.1-0.9,0.1-1.4c0.7-7.4,2.5-15,5.6-22.3
							c0.8-1.8,1.6-3.6,2.5-5.4c0.9-1.8,1.9-3.5,3-5.3c0.3-0.4,0.5-0.9,0.8-1.3c0.3-0.4,0.6-0.9,0.8-1.3c0.3-0.4,0.6-0.8,0.9-1.3
							l0.4-0.6l0.5-0.6c0.6-0.8,1.2-1.6,1.8-2.5c0.6-0.8,1.3-1.6,1.9-2.4c2.7-3.1,5.5-6.1,8.6-8.9c0.8-0.7,1.5-1.4,2.3-2
							c0.8-0.7,1.6-1.3,2.4-2l0.6-0.5l0.6-0.5l1.2-0.9c0.4-0.3,0.8-0.6,1.2-0.9l1.3-0.9c3.3-2.4,6.8-4.6,10.4-6.6
							c3.6-2,7.2-3.8,10.8-5.4c7.3-3.2,14.8-5.8,22.2-7.5c0.5-0.1,0.9-0.2,1.4-0.3C81.9,2,82.1,2,82.3,1.9l0.3-0.1L83,1.8
							c0.9-0.2,1.9-0.3,2.8-0.5c0.9-0.1,1.8-0.3,2.8-0.4C89,0.8,89.5,0.7,90,0.7c0.5-0.1,0.9-0.1,1.4-0.2C95,0.1,98.6,0,102.1,0
							c3.5,0,6.9,0.4,10.1,0.9c1.6,0.3,3.2,0.6,4.8,0.9c1.5,0.4,3.1,0.8,4.5,1.2c0.7,0.2,1.4,0.5,2.2,0.7c0.4,0.1,0.7,0.2,1,0.4
							c0.2,0.1,0.3,0.1,0.5,0.2c0.2,0.1,0.3,0.1,0.5,0.2c0.3,0.1,0.7,0.3,1,0.4c0.3,0.1,0.7,0.3,1,0.4c0.2,0.1,0.3,0.1,0.5,0.2
							c0.2,0.1,0.3,0.1,0.5,0.2c0.3,0.1,0.6,0.3,1,0.4c2.5,1.2,4.8,2.4,6.9,3.7c4.2,2.6,7.4,5.4,9.9,7.9c1.2,1.3,2.2,2.5,3.1,3.5
							c0.2,0.3,0.4,0.5,0.6,0.8c0.2,0.3,0.4,0.5,0.5,0.7c0.2,0.2,0.3,0.5,0.5,0.7s0.3,0.4,0.4,0.6c0.2,0.4,0.5,0.7,0.6,1.1
							c0.2,0.3,0.3,0.6,0.4,0.8c0.2,0.4,0.3,0.7,0.2,0.7c-0.1,0-0.3-0.1-0.6-0.5c-0.2-0.2-0.4-0.4-0.6-0.7c-0.2-0.3-0.5-0.6-0.8-0.9
							c-0.1-0.2-0.3-0.4-0.5-0.5c-0.2-0.2-0.4-0.4-0.5-0.6c-0.2-0.2-0.4-0.4-0.6-0.6s-0.4-0.5-0.7-0.7c-0.9-0.9-2-2-3.3-3.1
							c-2.6-2.2-5.9-4.7-10-7c-2.1-1.1-4.3-2.2-6.8-3.2c-0.3-0.1-0.6-0.2-0.9-0.4c-0.2-0.1-0.3-0.1-0.5-0.2c-0.2-0.1-0.3-0.1-0.5-0.2
							c-0.3-0.1-0.6-0.2-1-0.3c-0.3-0.1-0.7-0.2-1-0.3c-0.2-0.1-0.3-0.1-0.5-0.2c-0.2-0.1-0.3-0.1-0.5-0.2c-0.3-0.1-0.7-0.2-1-0.3
							c-0.7-0.2-1.4-0.4-2.1-0.6c-1.4-0.4-2.8-0.7-4.3-1c-1.5-0.3-3-0.5-4.5-0.7c-3.1-0.3-6.3-0.5-9.6-0.4C98.8,4.2,95.3,4.5,91.9,5
							C91.5,5,91,5.1,90.6,5.2c-0.4,0.1-0.9,0.1-1.3,0.2c-0.9,0.2-1.7,0.3-2.6,0.5C85.8,6,84.9,6.2,84,6.4l-0.3,0.1l-0.3,0.1
							c-0.2,0.1-0.4,0.1-0.7,0.2c-0.4,0.1-0.9,0.2-1.3,0.3c-7,1.8-14.1,4.5-21.1,7.8c-3.5,1.7-6.9,3.5-10.2,5.5
							c-3.3,2-6.6,4.1-9.7,6.5l-1.2,0.9c-0.4,0.3-0.8,0.6-1.1,0.9L37,29.5l-0.6,0.5l-0.6,0.5c-0.7,0.6-1.5,1.3-2.2,1.9
							c-0.7,0.7-1.4,1.3-2.1,2c-2.8,2.7-5.4,5.5-7.8,8.4c-0.6,0.7-1.2,1.5-1.8,2.2c-0.5,0.8-1.1,1.5-1.6,2.3l-0.4,0.6l-0.4,0.6
							c-0.3,0.4-0.5,0.8-0.8,1.2c-0.2,0.4-0.5,0.8-0.7,1.2c-0.2,0.4-0.5,0.8-0.7,1.2c-0.9,1.6-1.8,3.2-2.6,4.9c-0.8,1.6-1.5,3.3-2.2,5
							c-2.7,6.7-4.2,13.6-4.7,20.1c0,0.4-0.1,0.8-0.1,1.2c0,0.4,0,0.8,0,1.2c0,0.2,0,0.4,0,0.6c0,0.2,0,0.4,0,0.6c0,0.4,0,0.8,0,1.2
							c0,0.4,0,0.8,0,1.2c0,0.2,0,0.4,0,0.6s0,0.4,0,0.6c0,0.8,0.1,1.6,0.2,2.3C8,91.9,8,92.3,8,92.7c0,0.2,0,0.4,0.1,0.6
							c0,0.2,0.1,0.4,0.1,0.6c0.1,0.4,0.1,0.7,0.2,1.1c0.1,0.4,0.1,0.7,0.2,1.1c0,0.2,0.1,0.4,0.1,0.6c0,0.2,0.1,0.4,0.1,0.5
							c0.1,0.4,0.1,0.7,0.2,1.1c0.1,0.4,0.2,0.7,0.3,1.1c0.1,0.4,0.2,0.7,0.3,1c0.1,0.3,0.2,0.7,0.3,1c0.1,0.3,0.2,0.7,0.3,1
							c0.1,0.2,0.1,0.3,0.2,0.5c0.1,0.2,0.1,0.3,0.2,0.5c0.1,0.3,0.2,0.7,0.3,1c0.1,0.2,0.1,0.3,0.2,0.5c0.1,0.2,0.1,0.3,0.2,0.5
							c0.1,0.3,0.2,0.6,0.4,0.9c0.1,0.3,0.3,0.6,0.4,0.9c0.1,0.2,0.1,0.3,0.2,0.5l0.1,0.2l0.1,0.2c1.1,2.4,2.3,4.6,3.6,6.6
							c2.6,4,5.4,7.1,7.9,9.5c0.7,0.6,1.3,1.1,1.9,1.6c0.6,0.5,1.2,1,1.7,1.4c0.1,0.1,0.3,0.2,0.4,0.3c0.1,0.1,0.3,0.2,0.4,0.3
							c0.3,0.2,0.5,0.4,0.8,0.6c0.5,0.3,1,0.7,1.4,0.9c0.4,0.3,0.8,0.5,1.2,0.7c0.4,0.2,0.7,0.4,1,0.5c0.5,0.3,0.9,0.5,1.1,0.6
							c0.2,0.1,0.4,0.2,0.6,0.3l0.3,0.2l0.3,0.1c0.4,0.2,0.7,0.4,1.1,0.6c0.4,0.2,0.7,0.4,1,0.6c0.2,0.1,0.3,0.2,0.5,0.3
							c0.2,0.1,0.3,0.2,0.5,0.3c0.3,0.2,0.6,0.4,1,0.6c0.3,0.2,0.6,0.4,0.9,0.5c0.1,0.1,0.3,0.2,0.4,0.3c0.1,0.1,0.3,0.2,0.4,0.3
							c0.3,0.2,0.5,0.3,0.8,0.5c0.2,0.2,0.5,0.3,0.7,0.5c0.2,0.2,0.4,0.3,0.6,0.5c0.4,0.3,0.7,0.7,1,1
							C44.3,138.2,44.6,138.9,44.5,139.5z"/>
                                <polygon class="fill-primary" points="165.6,41.7 159.3,10.9 152.1,26 135.6,32.3" />
                            </svg>
                        </figure>


                        <figure class="position-absolute bottom-0 start-0 me-5 mb-n5 d-none d-sm-block">
                            <svg class="fill-primary" width="210.8px" height="172.4px">
                                <path class="st0" d="M5.9,160.5c-3.3,0-5.9,2.7-5.9,5.9c0,3.3,2.7,5.9,5.9,5.9c3.3,0,5.9-2.7,5.9-5.9 C11.9,163.1,9.2,160.5,5.9,160.5z" />
                                <path class="st0" d="M45.7,160.5c-3.3,0-5.9,2.7-5.9,5.9c0,3.3,2.7,5.9,5.9,5.9c3.3,0,5.9-2.7,5.9-5.9 C51.7,163.1,49,160.5,45.7,160.5z" />
                                <path class="st0" d="M85.5,160.5c-3.3,0-5.9,2.7-5.9,5.9c0,3.3,2.7,5.9,5.9,5.9s5.9-2.7,5.9-5.9C91.5,163.1,88.8,160.5,85.5,160.5z" />
                                <path class="st0" d="M125.3,160.5c-3.3,0-5.9,2.7-5.9,5.9c0,3.3,2.7,5.9,5.9,5.9c3.3,0,5.9-2.7,5.9-5.9 C131.2,163.1,128.6,160.5,125.3,160.5z" />
                                <path class="st0" d="M165.1,160.5c-3.3,0-5.9,2.7-5.9,5.9c0,3.3,2.7,5.9,5.9,5.9c3.3,0,5.9-2.7,5.9-5.9 C171,163.1,168.4,160.5,165.1,160.5z" />
                                <path class="st0" d="M204.9,160.5c-3.3,0-5.9,2.7-5.9,5.9c0,3.3,2.7,5.9,5.9,5.9c3.3,0,5.9-2.7,5.9-5.9 C210.8,163.1,208.1,160.5,204.9,160.5z" />
                                <path class="st0" d="M5.9,128.4c-3.3,0-5.9,2.7-5.9,5.9s2.7,5.9,5.9,5.9c3.3,0,5.9-2.7,5.9-5.9S9.2,128.4,5.9,128.4z" />
                                <circle class="st0" cx="45.7" cy="134.3" r="5.9" />
                                <circle class="st0" cx="85.5" cy="134.3" r="5.9" />
                                <circle class="st0" cx="125.3" cy="134.3" r="5.9" />
                                <path class="st0" d="M165.1,128.4c-3.3,0-5.9,2.7-5.9,5.9s2.7,5.9,5.9,5.9c3.3,0,5.9-2.7,5.9-5.9S168.4,128.4,165.1,128.4z" />
                                <path class="st0" d="M204.9,128.4c-3.3,0-5.9,2.7-5.9,5.9s2.7,5.9,5.9,5.9c3.3,0,5.9-2.7,5.9-5.9S208.1,128.4,204.9,128.4z" />
                                <path class="st0" d="M5.9,96.3C2.7,96.3,0,99,0,102.2c0,3.3,2.7,5.9,5.9,5.9c3.3,0,5.9-2.7,5.9-5.9C11.9,99,9.2,96.3,5.9,96.3z" />
                                <circle class="st0" cx="45.7" cy="102.2" r="5.9" />
                                <circle class="st0" cx="85.5" cy="102.2" r="5.9" />
                                <circle class="st0" cx="125.3" cy="102.2" r="5.9" />
                                <path class="st0" d="M165.1,96.3c-3.3,0-5.9,2.7-5.9,5.9c0,3.3,2.7,5.9,5.9,5.9c3.3,0,5.9-2.7,5.9-5.9 C171,99,168.4,96.3,165.1,96.3z" />
                                <path class="st0" d="M204.9,96.3c-3.3,0-5.9,2.7-5.9,5.9c0,3.3,2.7,5.9,5.9,5.9c3.3,0,5.9-2.7,5.9-5.9 C210.8,99,208.1,96.3,204.9,96.3z" />
                                <path class="st0" d="M5.9,64.2c-3.3,0-5.9,2.7-5.9,5.9c0,3.3,2.7,5.9,5.9,5.9c3.3,0,5.9-2.7,5.9-5.9C11.9,66.9,9.2,64.2,5.9,64.2z" />
                                <path class="st0" d="M45.7,64.2c-3.3,0-5.9,2.7-5.9,5.9c0,3.3,2.7,5.9,5.9,5.9c3.3,0,5.9-2.7,5.9-5.9C51.7,66.9,49,64.2,45.7,64.2z" />
                                <path class="st0" d="M85.5,64.2c-3.3,0-5.9,2.7-5.9,5.9c0,3.3,2.7,5.9,5.9,5.9s5.9-2.7,5.9-5.9C91.5,66.9,88.8,64.2,85.5,64.2z" />
                                <path class="st0" d="M125.3,64.2c-3.3,0-5.9,2.7-5.9,5.9c0,3.3,2.7,5.9,5.9,5.9c3.3,0,5.9-2.7,5.9-5.9 C131.2,66.9,128.6,64.2,125.3,64.2z" />
                                <path class="st0" d="M165.1,64.2c-3.3,0-5.9,2.7-5.9,5.9c0,3.3,2.7,5.9,5.9,5.9c3.3,0,5.9-2.7,5.9-5.9 C171,66.9,168.4,64.2,165.1,64.2z" />
                                <path class="st0" d="M204.9,64.2c-3.3,0-5.9,2.7-5.9,5.9c0,3.3,2.7,5.9,5.9,5.9c3.3,0,5.9-2.7,5.9-5.9 C210.8,66.9,208.1,64.2,204.9,64.2z" />
                                <path class="st0" d="M5.9,32.1C2.7,32.1,0,34.8,0,38C0,41.3,2.7,44,5.9,44c3.3,0,5.9-2.7,5.9-5.9C11.9,34.8,9.2,32.1,5.9,32.1z" />
                                <circle class="st0" cx="45.7" cy="38" r="5.9" />
                                <circle class="st0" cx="85.5" cy="38" r="5.9" />
                                <circle class="st0" cx="125.3" cy="38" r="5.9" />
                                <path class="st0" d="M165.1,32.1c-3.3,0-5.9,2.7-5.9,5.9c0,3.3,2.7,5.9,5.9,5.9c3.3,0,5.9-2.7,5.9-5.9 C171,34.8,168.4,32.1,165.1,32.1z" />
                                <path class="st0" d="M204.9,32.1c-3.3,0-5.9,2.7-5.9,5.9c0,3.3,2.7,5.9,5.9,5.9c3.3,0,5.9-2.7,5.9-5.9 C210.8,34.8,208.1,32.1,204.9,32.1z" />
                                <path class="st0" d="M5.9,0C2.7,0,0,2.7,0,5.9c0,3.3,2.7,5.9,5.9,5.9c3.3,0,5.9-2.7,5.9-5.9C11.9,2.7,9.2,0,5.9,0z" />
                                <circle class="st0" cx="45.7" cy="5.9" r="5.9" />
                                <circle class="st0" cx="85.5" cy="5.9" r="5.9" />
                                <circle class="st0" cx="125.3" cy="5.9" r="5.9" />
                                <path class="st0" d="M165.1,0c-3.3,0-5.9,2.7-5.9,5.9c0,3.3,2.7,5.9,5.9,5.9c3.3,0,5.9-2.7,5.9-5.9C171,2.7,168.4,0,165.1,0z" />
                                <path class="st0" d="M204.9,0c-3.3,0-5.9,2.7-5.9,5.9c0,3.3,2.7,5.9,5.9,5.9c3.3,0,5.9-2.7,5.9-5.9C210.8,2.7,208.1,0,204.9,0z" />
                            </svg>
                        </figure>


                        <img class="img-fluid rounded" src="/src/assets/images/about/01.jpg" alt="" />

                        <div class="d-inline-block text-center bg-white shadow-lg position-absolute top-0 end-0 rounded p-3 p-sm-4 mt-3">
                            <div class="d-flex justify-content-center">

                                <h2 class="purecounter text-orange mb-0" data-purecounter-start="0" data-purecounter-end="6" data-purecounter-delay="200">0</h2>
                                <span class="h2 text-orange mb-0">k</span>
                            </div>
                            <p>Happy customers</p>
                        </div>

                        <div class="d-inline-block text-center bg-white shadow-lg rounded px-5 py-4 position-absolute bottom-0 start-0 mb-n4 ms-n3">
                            <div class="d-flex justify-content-center">

                                <h2 class="purecounter text-blue mb-0" data-purecounter-start="0" data-purecounter-end="18" data-purecounter-delay="100">0</h2>
                                <span class="h2 text-blue mb-0">k</span>
                            </div>
                            <p>Properties</p>
                        </div>
                    </div>



                    <div class="col-lg-6 ps-md-5 order-1">

                        <h2 class="h1">Serving renters & property owners</h2>
                        <p>Improved own provided blessing may peculiar domestic. Sight house has sex never. No visited raising gravity outward subject my cottage Mr be. Hold do at tore in park feet near my case.</p>

                        <a href="#" class="btn btn-outline-primary">Read more</a>

                        <div class="d-flex pt-2">
                            <h2 class="me-3">4.5</h2>
                            <div class="rating pt-2">
                                <p class="mb-0">Rating based on 578 buyers</p>
                                <ul class="list-inline">
                                    <li class="list-inline-item me-0 small"><i class="fas fa-star text-warning"></i></li>
                                    <li class="list-inline-item me-0 small"><i class="fas fa-star text-warning"></i></li>
                                    <li class="list-inline-item me-0 small"><i class="fas fa-star text-warning"></i></li>
                                    <li class="list-inline-item me-0 small"><i class="fas fa-star text-warning"></i></li>
                                    <li class="list-inline-item me-0 small"><i class="fas fa-star-half-alt text-warning"></i></li>
                                </ul>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </section>

        <section class="bg-primary-soft position-relative mt-5 overflow-hidden">

            <figure class="d-none d-md-block position-absolute top-0 start-50 translate-middle-x w-100">
                <svg class="fill-white" width="2392.9px" height="122.2px" viewBox="0 0 2392.9 122.2" xml:space="preserve">
                    <path class="st0" d="M0,73.8l2392.9-42.2V0H0V73.8z" />
                </svg>
            </figure>

            <figure class="position-absolute top-100 start-50 translate-middle w-100 mt-5">
                <svg class="fill-white" width="2392.9px" height="122.2px" viewBox="0 0 2392.9 122.2" xml:space="preserve">
                    <path class="st0" d="M2392.9,73.8L0,31.6V0h2392.9V73.8z" />
                </svg>
            </figure>

            <figure class="position-absolute bottom-0 end-0 me-n7">
                <svg class="opacity-5" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="350px" height="350px">
                    <path class="fill-light" fill-rule="evenodd"
                        d="M150.000,-0.000 C232.843,-0.000 300.000,67.157 300.000,150.000 C300.000,232.842 232.843,300.000 150.000,300.000 C67.157,300.000 0.000,232.842 0.000,150.000 C0.000,67.157 67.157,-0.000 150.000,-0.000 Z" />
                </svg>
            </figure>

            <div class="container">

                <div class="text-center">
                    <h2>How it works</h2>
                    <p>Saw met applauded favorite deficient engrossed concealed and her</p>
                </div>

                <div class="row align-items-center text-center mt-5">

                    <div class="col-md-6 col-lg-3">
                        <div class="card align-items-center bg-transparent">

                            <div class="position-relative">

                                <div class="box-xxxl bg-primary-overlay-hover border border-white border-5 rounded-circle shadow-lg">
                                    <img src="/src/assets/images/about/work/01.jpg" class="box-img" alt="..." />
                                </div>

                                <div class="card-element-hover box-md bg-white rounded-circle position-absolute top-50 start-50 translate-middle">
                                    <span class="text-primary fs-6 fw-bold">01</span>
                                </div>
                            </div>

                            <div class="card-body">
                                <h4 class="card-title">Choose Category</h4>
                                <p class="card-text">Demesne far hearted had has. Dependent on so extremely delivered by.</p>
                            </div>
                        </div>
                    </div>



                    <div class="col-md-6 col-lg-3">
                        <div class="card align-items-center bg-transparent">

                            <div class="position-relative">

                                <div class="box-xxxl bg-primary-overlay-hover border border-white border-5 rounded-circle shadow-lg">
                                    <img src="/src/assets/images/about/work/02.jpg" class="box-img" alt="..." />
                                </div>

                                <div class="card-element-hover box-md bg-white rounded-circle position-absolute top-50 start-50 translate-middle">
                                    <span class="text-primary fs-6 fw-bold">02</span>
                                </div>
                            </div>

                            <div class="card-body">
                                <h4 class="card-title">Find Real Estate</h4>
                                <p class="card-text">What better way to demonstrate your value to a potential customer than to describe</p>
                            </div>
                        </div>
                    </div>



                    <div class="col-md-6 col-lg-3">
                        <div class="card align-items-center bg-transparent">

                            <div class="position-relative">

                                <div class="box-xxxl bg-primary-overlay-hover border border-white border-5 rounded-circle shadow-lg">
                                    <img src="/src/assets/images/about/work/03.jpg" class="box-img" alt="..." />
                                </div>

                                <div class="card-element-hover box-md bg-white rounded-circle position-absolute top-50 start-50 translate-middle">
                                    <span class="text-primary fs-6 fw-bold">03</span>
                                </div>
                            </div>

                            <div class="card-body">
                                <h4 class="card-title">Buy or Rent Home</h4>
                                <p class="card-text">Fulfilled direction use continual Saw met applauded concealed and her.</p>
                            </div>
                        </div>
                    </div>



                    <div class="col-md-6 col-lg-3">
                        <div class="card align-items-center bg-transparent">

                            <div class="position-relative">

                                <div class="box-xxxl bg-primary-overlay-hover border border-white border-5 rounded-circle shadow-lg">
                                    <img src="/src/assets/images/about/work/04.jpg" class="box-img" alt="..." />
                                </div>

                                <div class="card-element-hover box-md bg-white rounded-circle position-absolute top-50 start-50 translate-middle">
                                    <span class="text-primary fs-6 fw-bold">04</span>
                                </div>
                            </div>

                            <div class="card-body">
                                <h4 class="card-title">Live Happily</h4>
                                <p class="card-text">As it so contrasted oh estimating instrument. Size like body someone had.</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>

        <section class="position-relative z-index-9">
            <div class="container">

                <div class="text-center">
                    <h2>Feature Properties</h2>
                    <p>A pleasure exertion if believed provided to all led out world this music while asked</p>
                </div>

                <div class="row mt-5">

                    <div class="col-sm-6 col-lg-4">
                        <div class="card mb-4">
                            <div class="position-relative overflow-hidden">

                                <img class="card-img" src="/src/assets/images/property/grid-list/02.jpg" alt="Card image" />

                                <div class="card-img-overlay">
                                    <div class="text-end">
                                        <a href="#" class="badge bg-dark text-light me-2"><i class="fas fa-video pe-2"></i><span>2</span></a>
                                        <a href="#" class="badge bg-dark text-light"><i class="fas fa-camera pe-2"></i><span>2</span></a>
                                    </div>
                                </div>
                            </div>

                            <div class="card-body px-2 pt-3">

                                <div class="d-flex justify-content-between">
                                    <div>
                                        <a href="#" class="badge bg-primary-soft text-primary"><i class="fas fa-user-friends pe-1"></i>Family</a>
                                        <a href="#" class="badge bg-danger-soft text-danger"><i class="fas fa-rupee-sign pe-1"></i>For Sale</a>
                                    </div>
                                    <a href="#"><i class="fas fa-heart fa-fw text-danger ms-auto"></i></a>
                                </div>

                                <h4 class="card-title mt-3">
                                    <a href="#">157485 Camino Codorniz</a>
                                </h4>

                                <ul class="nav nav-divider align-items-center text-uppercase small mt-3">
                                    <li class="nav-item me-4">
                                        <i class="fas fa-bed pe-1"></i> <span>5</span>
                                    </li>
                                    <li class="nav-item me-4">
                                        <i class="fas fa-bath pe-1"></i> <span>2</span>
                                    </li>
                                    <li class="nav-item me-4">
                                        <i class="fas fa-user pe-1"></i> <span>5</span>
                                    </li>
                                    <li class="nav-item me-4">
                                        <i class="fas fa-square pe-1"></i> <span>1800<sup class="text-lowercase">m2</sup></span>
                                    </li>
                                </ul>

                                <div class="mt-3 d-flex justify-content-between align-items-center">
                                    <div>
                                        <h6 class="text-decoration-line-through mb-0 text-muted">$150,000</h6>
                                        <h3 class="text-success mb-0">$120,000</h3>
                                    </div>
                                    <a class="btn btn-dark btn-sm" href="#">View details</a>
                                </div>
                            </div>

                        </div>
                    </div>



                    <div class="col-sm-6 col-lg-4">
                        <div class="card mb-4">
                            <div class="position-relative overflow-hidden">

                                <img class="card-img" src="/src/assets/images/property/grid-list/08.jpg" alt="Card image" />

                                <div class="card-img-overlay">
                                    <div class="d-flex justify-content-between">
                                        <a href="#" class="box-sm bg-primary text-light rounded-circle"><i class="fas fa-star"></i></a>
                                        <div>
                                            <a href="#" class="badge bg-dark text-light me-2"><i class="fas fa-video pe-2"></i><span>2</span></a>
                                            <a href="#" class="badge bg-dark text-light"><i class="fas fa-camera pe-2"></i><span>2</span></a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="card-body px-2 pt-3">

                                <div class="d-flex justify-content-between">
                                    <div>
                                        <a href="#" class="badge bg-primary-soft text-primary"><i class="fas fa-user-friends pe-1"></i>Family</a>
                                        <a href="#" class="badge bg-warning-soft text-warning"><i class="fas fa-rupee-sign pe-1"></i>For Rent</a>
                                    </div>
                                    <a href="#"><i class="far fa-heart fa-fw text-dark ms-auto"></i></a>
                                </div>

                                <h4 class="card-title mt-3">
                                    <a href="#">Single House Near New York</a>
                                </h4>

                                <ul class="nav nav-divider align-items-center text-uppercase small mt-3">
                                    <li class="nav-item me-4">
                                        <i class="fas fa-bed pe-1"></i> <span>5</span>
                                    </li>
                                    <li class="nav-item me-4">
                                        <i class="fas fa-bath pe-1"></i> <span>3</span>
                                    </li>
                                    <li class="nav-item me-4">
                                        <i class="fas fa-user pe-1"></i> <span>6</span>
                                    </li>
                                    <li class="nav-item me-4">
                                        <i class="fas fa-square pe-1"></i> <span>2900<sup class="text-lowercase">m2</sup></span>
                                    </li>
                                </ul>

                                <div class="mt-3 d-flex justify-content-between align-items-center">
                                    <h3 class="text-success">$160,000</h3>
                                    <a class="btn btn-dark btn-sm" href="#">View details</a>
                                </div>
                            </div>

                        </div>
                    </div>



                    <div class="col-sm-6 col-lg-4">
                        <div class="card mb-4">
                            <div class="position-relative overflow-hidden">

                                <img class="card-img" src="/src/assets/images/property/grid-list/03.jpg" alt="Card image" />

                                <div class="card-img-overlay">
                                    <div class="text-end">
                                        <a href="#" class="badge bg-dark text-light me-2"><i class="fas fa-video pe-2"></i><span>2</span></a>
                                        <a href="#" class="badge bg-dark text-light"><i class="fas fa-camera pe-2"></i><span>2</span></a>
                                    </div>
                                </div>
                            </div>

                            <div class="card-body px-2 pt-3">

                                <div class="d-flex justify-content-between">
                                    <div>
                                        <a href="#" class="badge bg-primary-soft text-primary"><i class="fas fa-user-friends pe-1"></i>Family</a>
                                        <a href="#" class="badge bg-danger-soft text-danger"><i class="fas fa-rupee-sign pe-1"></i>For Sale</a>
                                    </div>
                                    <a href="#"><i class="far fa-heart fa-fw text-dark ms-auto"></i></a>
                                </div>

                                <h4 class="card-title mt-3">
                                    <a href="#">Store in Woodside,  San Francisco</a>
                                </h4>

                                <ul class="nav nav-divider align-items-center text-uppercase small mt-3">
                                    <li class="nav-item me-4">
                                        <i class="fas fa-bed pe-1"></i> <span>3</span>
                                    </li>
                                    <li class="nav-item me-4">
                                        <i class="fas fa-bath pe-1"></i> <span>2</span>
                                    </li>
                                    <li class="nav-item me-4">
                                        <i class="fas fa-user pe-1"></i> <span>5</span>
                                    </li>
                                    <li class="nav-item me-4">
                                        <i class="fas fa-square pe-1"></i> <span>2000<sup class="text-lowercase">m2</sup></span>
                                    </li>
                                </ul>

                                <div class="mt-3 d-flex justify-content-between align-items-center">
                                    <div>
                                        <h6 class="text-decoration-line-through mb-0 text-muted">$25,000</h6>
                                        <h3 class="text-success mb-0">$22,000</h3>
                                    </div>
                                    <a class="btn btn-dark btn-sm" href="#">View details</a>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </section>

        <section class="position-relative pt-0 overflow-hidden">
            <div class="container">

                <figure class="position-absolute top-50 start-100 translate-middle ms-5 opacity-1">
                    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="1243px" height="1244px">
                        <path class="fill-primary-soft" fill-rule="evenodd" opacity="0.502"
                            d="M45.742,493.325 L503.836,43.741 C562.962,-14.286 657.919,-13.383 715.931,45.758 L1199.273,538.511 C1257.284,597.652 1256.381,692.635 1197.256,750.662 L739.162,1200.246 C680.037,1258.273 585.079,1257.370 527.068,1198.229 L43.725,705.475 C-14.286,646.335 -13.383,551.351 45.742,493.325 Z" />
                    </svg>
                </figure>


                <div class="text-center">
                    <h2>Reviews</h2>
                    <p>Merits ye if Mr narrow points. Melancholy particular Devonshire alteration it</p>
                </div>

                <div class="row mt-5 justify-content-center align-items-center">
                    <div class="col-12 position-relative">

                        <figure class="d-none d-md-block position-absolute top-100 start-0 translate-middle opacity-5">
                            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="159px" height="205px">
                                <path class="fill-primary" fill-rule="evenodd"
                                    d="M131.877,161.137 C122.214,145.318 146.789,130.343 156.436,146.136 C166.098,161.956 141.523,176.930 131.877,161.137 ZM102.788,148.291 C96.165,137.449 113.009,127.185 119.620,138.010 C126.243,148.852 109.400,159.116 102.788,148.291 ZM98.098,115.688 C97.764,115.693 97.430,115.698 97.095,115.702 C87.479,115.833 81.098,105.385 85.605,96.890 C85.762,96.594 85.918,96.299 86.075,96.004 C90.835,87.031 103.995,86.764 109.248,95.364 C114.501,103.964 108.255,115.550 98.098,115.688 ZM59.357,44.201 C50.238,29.271 73.432,15.137 82.536,30.043 C91.656,44.974 68.462,59.107 59.357,44.201 ZM44.404,12.517 C38.975,3.630 52.781,-4.783 58.201,4.090 C63.629,12.977 49.823,21.390 44.404,12.517 ZM64.988,55.048 C75.194,71.756 49.239,87.572 39.050,70.891 C28.845,54.183 54.800,38.367 64.988,55.048 ZM51.593,90.928 C55.542,91.881 59.273,94.599 61.390,98.064 C63.626,101.726 64.079,105.911 63.266,110.038 C62.449,114.180 59.524,117.544 56.122,119.836 C52.847,122.044 47.921,122.629 44.144,121.718 C40.195,120.765 36.464,118.047 34.347,114.582 C32.111,110.920 31.657,106.735 32.471,102.607 C33.288,98.465 36.213,95.102 39.614,92.810 C42.890,90.602 47.816,90.016 51.593,90.928 ZM36.481,164.301 C41.258,172.122 29.109,179.525 24.340,171.717 C19.563,163.896 31.712,156.493 36.481,164.301 ZM7.631,155.390 C1.334,145.081 17.349,135.323 23.636,145.615 C29.933,155.924 13.918,165.683 7.631,155.390 ZM10.248,45.625 C5.254,37.449 17.955,29.709 22.941,37.872 C27.935,46.048 15.234,53.788 10.248,45.625 ZM19.485,74.678 C25.999,85.342 9.433,95.438 2.929,84.790 C-3.585,74.126 12.982,64.031 19.485,74.678 ZM17.920,122.574 C24.326,133.061 8.035,142.988 1.640,132.519 C-4.766,122.031 11.525,112.105 17.920,122.574 ZM53.841,137.370 C59.270,146.257 45.464,154.670 40.044,145.797 C34.616,136.910 48.422,128.497 53.841,137.370 ZM61.209,171.627 C65.123,168.989 70.829,170.628 73.208,174.522 C75.758,178.697 74.232,183.873 70.306,186.519 C66.392,189.157 60.686,187.519 58.307,183.624 C55.757,179.449 57.283,174.273 61.209,171.627 ZM67.685,155.446 C63.016,147.803 74.889,140.568 79.550,148.199 C84.218,155.842 72.345,163.076 67.685,155.446 ZM97.851,161.408 C100.692,159.672 103.939,159.319 107.140,159.948 C111.661,160.837 114.513,164.448 116.065,168.498 C116.132,168.673 116.199,168.847 116.266,169.022 C117.260,171.617 116.678,175.801 115.281,178.149 C114.175,180.009 112.696,181.563 110.901,182.772 C108.686,184.265 105.820,184.672 103.239,184.389 C100.804,184.122 97.931,183.180 96.217,181.268 C96.093,181.128 95.968,180.989 95.843,180.849 C92.845,177.505 91.214,173.544 92.311,169.006 C93.052,165.944 95.162,163.050 97.851,161.408 ZM119.617,193.116 C124.503,201.115 112.078,208.686 107.200,200.700 C102.314,192.702 114.740,185.130 119.617,193.116 Z" />
                            </svg>
                        </figure>



                        <figure class="d-none d-md-block position-absolute top-0 end-0">
                            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="149px" height="98px">
                                <path fill-rule="evenodd" class="fill-primary"
                                    d="M147.198,27.887 C145.967,29.114 144.424,29.392 142.924,30.170 C141.203,31.064 139.209,32.361 137.826,33.721 C135.482,36.025 132.089,40.278 131.844,43.717 C131.662,46.280 127.774,47.989 126.484,45.169 C124.883,41.668 123.251,38.198 120.706,35.278 C118.179,32.378 116.624,30.734 112.707,31.105 C108.581,31.496 107.783,24.789 111.738,23.942 C112.949,23.684 114.945,22.142 116.003,21.447 C117.588,20.406 118.617,19.023 119.838,17.602 C122.096,14.974 122.737,11.800 123.553,8.576 C123.545,8.542 123.542,8.507 123.532,8.474 C122.696,5.729 126.039,4.390 127.932,5.912 C129.189,6.922 130.088,8.756 130.881,10.145 C132.076,12.237 133.194,14.318 134.651,16.258 C137.597,20.182 141.410,21.000 145.767,22.465 C148.039,23.230 149.000,26.089 147.198,27.887 ZM23.551,17.278 C22.397,17.876 21.061,18.746 20.134,19.657 C18.563,21.202 16.289,24.052 16.125,26.357 C16.002,28.075 13.396,29.220 12.532,27.331 C11.458,24.984 10.365,22.658 8.659,20.701 C6.966,18.757 5.923,17.656 3.298,17.904 C0.533,18.166 -0.003,13.670 2.648,13.103 C3.460,12.930 4.798,11.896 5.507,11.431 C6.569,10.733 7.259,9.806 8.077,8.854 C9.591,7.092 10.021,4.965 10.567,2.804 C10.562,2.781 10.560,2.757 10.553,2.736 C9.993,0.896 12.234,-0.002 13.502,1.018 C14.345,1.696 14.947,2.925 15.479,3.855 C16.280,5.258 17.029,6.652 18.006,7.953 C19.980,10.583 22.536,11.131 25.456,12.113 C26.979,12.626 27.623,14.542 26.415,15.747 C25.591,16.569 24.556,16.756 23.551,17.278 ZM117.314,81.883 C118.125,81.710 119.464,80.676 120.172,80.211 C121.235,79.513 121.924,78.586 122.742,77.634 C124.256,75.872 124.686,73.745 125.233,71.584 C125.227,71.561 125.225,71.538 125.219,71.516 C124.658,69.676 126.899,68.778 128.168,69.798 C129.011,70.476 129.613,71.705 130.144,72.635 C130.945,74.038 131.694,75.432 132.671,76.733 C134.646,79.363 137.201,79.911 140.122,80.893 C141.644,81.406 142.289,83.322 141.081,84.527 C140.256,85.349 139.222,85.536 138.216,86.058 C137.063,86.656 135.727,87.526 134.800,88.437 C133.228,89.982 130.954,92.832 130.790,95.137 C130.668,96.855 128.062,98.000 127.197,96.111 C126.124,93.764 125.031,91.438 123.325,89.481 C121.631,87.537 120.589,86.436 117.963,86.684 C115.198,86.946 114.663,82.451 117.314,81.883 Z" />
                            </svg>
                        </figure>



                        <div class="tiny-slider dots-creative arrow-round mb-0">
                            <div class="tiny-slider-inner" data-autoplay="true" data-arrow="true" data-dots="false" data-items="1" data-autoheight="false">


                                <div class="testimonial mb-3">
                                    <div class="col-12 col-md-7 offset-0 offset-md-3 position-relative">

                                        <img src="/src/assets/images/property/pd/09.jpg" class="rounded" alt="" />

                                        <div class="col-11 col-sm-8 col-lg-6 testimonial-items">

                                            <h4>Customer reviews</h4>
                                            <p>How promotion excellent curiosity yet attempted happiness Gay prosperous impression had conviction For every delay death ask style.</p>
                                            <div class="d-flex">

                                                <div class="avatar">
                                                    <img class="avatar-img rounded-circle" src="/src/assets/images/avatar/06.jpg" alt="avatar" />
                                                </div>

                                                <div class="ms-3">
                                                    <h5 class="mb-0">Frances Guerrero</h5>
                                                    <ul class="list-inline">
                                                        <li class="list-inline-item me-0 small"><i class="fas fa-star text-warning"></i></li>
                                                        <li class="list-inline-item me-0 small"><i class="fas fa-star text-warning"></i></li>
                                                        <li class="list-inline-item me-0 small"><i class="fas fa-star text-warning"></i></li>
                                                        <li class="list-inline-item me-0 small"><i class="fas fa-star text-warning"></i></li>
                                                        <li class="list-inline-item me-0 small"><i class="fas fa-star-half-alt text-warning"></i></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>



                            </div>
                        </div>

                    </div>
                </div>

                <div class="row mt-0 mt-md-5 justify-content-center">
                    <div class="col-md-8 bg-primary-soft px-4 py-3 rounded">
                        <div class="row align-items-center text-center text-lg-start">
                            <div class="col-lg-6">

                                <h5 class="">See what other people are saying</h5>

                                <div class="d-flex justify-content-center justify-content-lg-start">
                                    <ul class="list-inline">
                                        <li class="list-inline-item me-0 small"><i class="fas fa-star text-warning"></i></li>
                                        <li class="list-inline-item me-0 small"><i class="fas fa-star text-warning"></i></li>
                                        <li class="list-inline-item me-0 small"><i class="fas fa-star text-warning"></i></li>
                                        <li class="list-inline-item me-0 small"><i class="fas fa-star text-warning"></i></li>
                                        <li class="list-inline-item me-0 small"><i class="fas fa-star-half-alt text-warning"></i></li>
                                    </ul>
                                    <h5 class="ps-2 mb-2 mb-md-0">4.5 / 5.5</h5>
                                </div>
                            </div>

                            <div class="col-lg-6 text-center text-lg-end">
                                <button class="btn btn-orange-soft" type="button">View all review</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="pt-0">
            <div class="container card-grid">

                <div class="text-center mb-3 mb-md-5">
                    <h2>Explore cities</h2>
                    <p>Delightful own attachment her partiality unaffected occasional thoroughly</p>
                </div>
                <div class="row g-4">

                    <div class="col-md-3">

                        <div class="card card-metro card-grid-lg overflow-hidden rounded" style={{ backgroundImage: 'url(/src/assets/images/city/01.jpg)', backgroundPosition: 'center', backgroundSize: 'cover' }}>
                            <div class="card-img-overlay d-flex flex-column">

                                <div class="mt-auto card-text">
                                    <a href="#" class="badge bg-light-soft">5 Property</a>
                                    <div>
                                        <a href="#" class="text-light mt-auto fs-4 stretched-link">India/ Mumbai</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>



                    <div class="col-md-3">

                        <div class="card card-metro card-grid-lg overflow-hidden rounded" style={{ backgroundImage: 'url(/src/assets/images/city/04.jpg)', backgroundPosition: 'center', backgroundSize: 'cover' }}>

                            <div class="card-img-overlay d-flex flex-column">

                                <div class="mt-auto card-text">
                                    <a href="#" class="badge bg-light-soft">5 Property</a>
                                    <div>
                                        <a href="#" class="text-light mt-auto fs-4 stretched-link">America/ California</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div class="col-md-6">
                        <div class="row g-4">

                            <div class="col-12">

                                <div class="card card-metro card-grid-sm overflow-hidden rounded" style={{ backgroundImage: 'url(/src/assets/images/city/03.jpg)', backgroundPosition: 'center', backgroundSize: 'cover' }}>

                                    <div class="card-img-overlay d-flex flex-column">

                                        <div class="mt-auto card-text">
                                            <a href="#" class="badge bg-light-soft">5 Property</a>
                                            <div>
                                                <a href="#" class="text-light mt-auto fs-4 stretched-link">England/ London</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>



                            <div class="col-12">

                                <div class="card card-metro card-grid-sm overflow-hidden rounded" style={{ backgroundImage: 'url(/src/assets/images/city/02.jpg)', backgroundPosition: 'center', backgroundSize: 'cover' }}>

                                    <div class="card-img-overlay d-flex flex-column">

                                        <div class="mt-auto card-text">
                                            <a href="#" class="badge bg-light-soft">5 Property</a>
                                            <div>
                                                <a href="#" class="text-light mt-auto fs-4 stretched-link">Dubai/ Dubai</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
}