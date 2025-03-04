import { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom";
import { Bounce, toast } from "react-toastify";
export default function Login(){
	var nav = useNavigate()
	const [data_login,setdata_login]= useState({email:"",password:0})
	const [errors, setErrors] = useState({});
	const handleInputChange = (e) => {
			const { name, value } = e.target;
				setdata_login({
					...data_login,
					[name]: value,
				  });
	  };

	function onLogin(event){
		event.preventDefault();
			fetch('https://localhost:7273/api/User/Login',{
				method: 'POST',
				body: JSON.stringify({
				  email:data_login.email,
				  password:data_login.password
				}),
				headers: {
					'Content-type': 'application/json; charset=UTF-8',
				  }
				}).then((data) => {
					
					if (data.status === 200) { 
						data.json().then((res) => { 
							localStorage.setItem("token",res.token)
						localStorage.setItem("user",JSON.stringify(res.user))
						 });
						
						toast.success('Login Successfully', {
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
						nav("/Home")
					}
					else{
						toast.error('Wrong Email And Password !!!', {
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
    return<>

<section class="login d-flex justify-content-center border shadow bg-body-tertiary rounded">
	<div class="container card-grid ">
		<div class="row align-items-center ">
			<div class="col-md-6 mt-md-0 order-2 order-md-1">
				
				<h3>Please log in with your account!</h3>
				<p class="mb-4 mb-lg-5">Login to your account easily with less information.</p>
				
				<form class="row">
					
					<div class="col-md-12 mb-3">
						<label for="exampleInputEmail1" class="form-label text-dark">Email address *</label>
						<input type="email" name="email" onChange={handleInputChange} class="form-control bg-light border-0" id="exampleInputEmail1"/>
					</div>
					
					<div class="col-md-12 mb-3">
						<label for="inputPassword5" class="form-label text-dark">Password *</label>
						<input type="password" name="password" onChange={handleInputChange} id="inputPassword5" class="form-control bg-light border-0"/>
						<div id="passwordHelpBlock" class="form-text">
							Your password must be 8 characters at least 
						</div>
					</div>
					<div class="col-md-12 d-flex justify-content-between mb-4">
						<div class="form-check">
							<input type="checkbox" class="form-check-input" id="exampleCheck1"/>
							<label class="form-check-label" for="exampleCheck1">keep me signed in</label>
						</div>
						<div class="text-primary-hover"><a href="#" class="text-secondary"><u>Forgot password?</u></a></div>	
					</div>
					
					<div class="row align-items-center">
						<div class="col-sm-4">
							<button class="btn btn-primary" onClick={onLogin} type="button">Sign in</button>
						</div>
						<div class="col-sm-8 text-sm-end mt-3 mt-sm-0">
							<span class="text-muted">Don't have an account? <Link to={"/Register"}>Signup here</Link></span>
						</div>
					</div>	
				</form>
				

				
				<div class="row">
					<div class="col-12 text-center">
						<div class="position-relative my-5">
							<hr/>
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

			
			<div class="col-md-6 order-1">
				<img src="src/assets/images/signin-signup/01.png" alt=""/>
			</div>
		</div>
	</div>
</section>

    </>
}