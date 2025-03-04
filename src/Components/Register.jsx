import { useEffect, useState } from "react"
import { Link } from "react-router-dom";
export default function Register() {
    const [data_register, setdata_register] = useState({ userName: "", password: "", email: "", phone: "",role:"" })
    const [errors, setErrors] = useState({});

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setdata_register({
            ...data_register,
            [name]: value,
        });
        console.log(data_register)
    };
    function onValueChange(event) {

       setdata_register({...data_register,role:event.target.value})

    }

    function OnSubmit() {
        fetch('https://localhost:7273/api/User', {
            method: 'POST',
            body: JSON.stringify({
                userName: data_register.userName,
                password: data_register.password,
                email: data_register.email,
                phone: data_register.phone,
                role: data_register.role
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            }
        }
        ).then((res) => res.json()).then((response) => {
            if (response.status === 200) { navigator(-1) }
            else if (response.status === 400) {
                const errorData = response.errors;
                setErrors(errorData);
                console.log(errors);
            } else { console.error("Server Error:", response.status); }
        })
    }

    return <>
        <section class="login py-5 d-flex justify-content-center border shadow bg-body-tertiary rounded">
            <div class="container px-0">
                <div class="row">
                    <div class="col-lg-6 mt-lg-0 order-2 order-lg-1">

                        <h3>Sign up for your account!</h3>
                        <p class="mb-4 mb-lg-5">Create your account easily with less information.</p>

                        <form class="row">

                            <div class="col-md-12 mb-3">
                                <label for="exampleInputEmail1" class="form-label text-dark">Name *</label>
                                <input type="text" name="userName" onChange={handleInputChange} class="form-control bg-light" id="exampleInputName" />
                                {
                                    errors.UserName?.map((err, index) => (
                                        <div key={index} style={{ color: "red" }}>
                                            {err}
                                        </div>))
                                }
                            </div>

                            <div class="col-md-12 mb-3">
                                <label for="exampleInputEmail1" class="form-label text-dark">Email address *</label>
                                <input type="email" name="email" onChange={handleInputChange} class="form-control bg-light " id="exampleInputEmail1" />
                                {
                                    errors.Email?.map((err, index) => (
                                        <div key={index} style={{ color: "red" }}>
                                            {err}
                                        </div>))
                                }
                            </div>

                            <div class="col-md-12 mb-3">
                                <label for="inputPassword5" class="form-label text-dark">Password *</label>
                                <input type="password" name="password" onChange={handleInputChange} id="inputPassword5" class="form-control bg-light " />
                                <div id="passwordHelpBlock" class="form-text">
                                    Your password must be 8 characters at least
                                </div>
                                {
                                    errors.Password?.map((err, index) => (
                                        <div key={index} style={{ color: "red" }}>
                                            {err}
                                        </div>))
                                }
                            </div>

                            <div class="col-md-12 mb-3">
                                <label for="inputPassword6" class="form-label text-dark">Phone *</label>
                                <input type="text" name="phone" onChange={handleInputChange} id="inputPhone" class="form-control bg-light " />
                                {
                                    errors.Phone?.map((err, index) => (
                                        <div key={index} style={{ color: "red" }}>
                                            {err}
                                        </div>))
                                }
                            </div>

                            <div class="col-md-12 row">
                                <label for="exampleInputEmail1" class="form-label text-dark col-2">Role *</label>
                                <div className="col-3">
                                    <div class="form-check ">
                                        <input class="form-check-input" type="radio" value={"Buyer"} name="flexRadioDefault" id="flexRadioDefault1" onChange={onValueChange} />
                                        <label class="form-check-label" for="flexRadioDefault1"  >
                                            Buyer
                                        </label>
                                    </div>
                                    <div class="form-check ">
                                        <input class="form-check-input" type="radio" value={"Seller"} name="flexRadioDefault" id="flexRadioDefault2" onChange={onValueChange} />
                                        <label class="form-check-label" for="flexRadioDefault2" >
                                            Seller
                                        </label>
                                    </div>
                                </div>
                            </div>

                            <div class="row align-items-center">
                                <div class="col-sm-4">
                                    <a onClick={OnSubmit} class="btn btn-primary" >Sign up</a>
                                </div>
                                <div class="col-sm-8 text-sm-end mt-2 mt-sm-0">
                                    <span class="text-muted">Already have an account? <Link to={"/Login"}>Signin here</Link></span>
                                </div>
                            </div>
                        </form>



                        <div class="row">
                            <div class="col-12 text-center">
                                <div class="position-relative mt-4">
                                    <hr />
                                    <p class="small position-absolute top-50 start-50 translate-middle bg-white">Or do it via social media account</p>
                                </div>

                                <ul class="list-inline-item">
                                    <li class="list-inline-item">
                                        <a href="#" class="btn btn-lg btn-light fs-5"><i class="fab fa-fw fa-google text-google-icon"></i></a>
                                    </li>
                                    <li class="list-inline-item">
                                        <a href="#" class="btn btn-lg btn-light fs-5"><i class="fab fa-fw fa-apple"></i></a>
                                    </li>
                                    <li class="list-inline-item">
                                        <a href="#" class="btn btn-lg btn-light fs-5"><i class="fab fa-fw fa-facebook-f text-facebook"></i></a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>


                    <div class="col-lg-6 order-1 text-center pt-3">
                        <img src="src/assets/images/signin-signup/01.png" alt="" />
                    </div>
                </div>
            </div>
        </section>
    </>
}