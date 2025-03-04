import { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
export default function MyProfile() {

    const [UserList, setUserList] = useState({})
    const token = localStorage.getItem('token')
    var nav = useNavigate()
    useEffect(() => {
        var user = JSON.parse( localStorage.getItem('user'))
    
        fetch('https://localhost:7273/api/User/'+user.userID,{ method: 'GET',headers:{'Authorization': `Bearer ${token}`}}).then((res) => res.json()).then((data) => {
            setUserList(...data)
            console.log(data)
        })
    }, [])

    function onLogOut(){
        localStorage.removeItem("token")
        localStorage.removeItem("user")
        nav("/Login")
    }

    return <>
        
        <div class="row">
            <div class="col-12">

                <div class="my-5">
                    <h3>My Profile</h3>
                    <hr />
                </div>

                <form class="file-upload">
                    <div class="row mb-5 gx-5">

                        <div class="col-xxl-8 mb-5 mb-xxl-0">
                            <div class="bg-secondary-soft px-4 py-5 rounded">
                                <div class="row g-3">
                                    <h4 class="mb-4 mt-0">Contact detail</h4>

                                    <div class="col-md-6">
                                        <label class="form-label">First Name *</label>
                                        <input type="text" class="form-control" disabled value={UserList.userName} aria-label="First name" />
                                    </div>

                                    <div class="col-md-6">
                                        <label class="form-label">Last Name *</label>
                                        <input type="text" class="form-control" disabled  aria-label="Last name" value="Doe" />
                                    </div>

                                    <div class="col-md-6">
                                        <label class="form-label">Phone number *</label>
                                        <input type="text" class="form-control" disabled value={UserList.phone} aria-label="Phone number" />
                                    </div>

                                    <div class="col-md-6">
                                        <label for="inputEmail4" class="form-label">Email *</label>
                                        <input type="email" class="form-control" disabled value={UserList.email} id="inputEmail4"  />
                                    </div>

                                    <div class="col-md-6">
                                        <label class="form-label">Language *</label>
                                        <select class="form-select" multiple aria-label="multiple select example">
                                            <option selected="">Select item</option>
                                            <option value="1">US English</option>
                                            <option value="2">UK English</option>
                                            <option value="3">Franch</option>
                                            <option value="3">Hindi</option>
                                        </select>
                                        <p class="text-muted small text-end mt-2 mb-0"><b>Note:</b> You can select multiple language</p>
                                    </div>

                                </div>
                            </div>
                        </div>

                        <div class="col-xxl-4">
                            <div class="bg-secondary-soft px-4 py-5 rounded">
                                <div class="row g-3">
                                    <h4 class="mb-4 mt-0">Upload your profile photo</h4>
                                    <div class="text-center">

                                        <div class="square position-relative display-2 mb-3">
                                            <i class="fas fa-fw fa-user position-absolute top-50 start-50 translate-middle text-secondary"></i>
                                        </div>

                                        <input type="file" id="customFile" name="file" hidden />
                                        <label class="btn btn-success-soft btn-block" for="customFile">Upload</label>
                                        <button type="button" class="btn btn-danger-soft">Remove</button>

                                        <p class="text-muted mt-3 mb-0"><span class="me-1">Note:</span>Minimum size 300px x 300px</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="gap-3 d-md-flex justify-content-md-end text-center">
                        <a type="button" class="btn btn-danger btn-lg" onClick={onLogOut}> Log out</a>
                        <Link type="button" to={"/Admin/Users/UserAddEdit/"+UserList.userID} class="btn btn-primary btn-lg">Upload profile</Link>
                    </div>
                </form>
            </div>
        </div>
    </>
}


