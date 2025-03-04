import { useState } from "react"
import { Bounce, toast, ToastContainer } from "react-toastify";

export default function Contactus(){
    const [formData,setFormDate] = useState({
        name:'',
        email:'',
        phonenumber:'',
        subject:'',
        message:''
    })

    function onFillForm(e){
        const {name,value} = e.target;
        setFormDate({...formData,[name]:value})
    }
    function onFillSubmit(){
        toast.success('Send Successfully', {
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
        console.log('hello')
        setFormDate({name:'',email:'',phonenumber:'',subject:'',message:''})
    }
    return<>
        <section class="bg-light py-5">
	<div class="container">
		<div class="row">
			<div class="col-12 d-flex justify-content-between">
				<h1 class="mb-0 me-2 h2">Contact us</h1>
				
				<nav class="d-flex justify-content-center d-none" aria-label="breadcrumb">
          <ol class="breadcrumb breadcrumb-dots mb-0">
            <li class="breadcrumb-item"><a href="index.html"><i class="fas fa-home"></i> Home</a></li>
						<li class="breadcrumb-item active">Wishlist</li>
          </ol>
        </nav>
			</div>
		</div>
	</div>
</section>
<section class="position-relative pt-3 pt-md-5">
	
	<figure class="d-none d-xl-block rotate position-absolute top-50 start-100 translate-middle ms-n7 mt-5">
		<svg class="opacity-1 rotate-200" viewBox="0 0 200 200" width="900px" height="1000px" xmlns="http://www.w3.org/2000/svg">
		  <path class="fill-primary-soft" d="M55.4,-18.3C63.9,8.2,57.5,39.2,36.7,55.4C16,71.5,-19,72.9,-37.8,57.8C-56.7,42.8,-59.4,11.3,-50.4,-15.8C-41.5,-42.9,-20.7,-65.7,1.4,-66.1C23.4,-66.6,46.9,-44.7,55.4,-18.3Z" transform="translate(100 100)"></path>
		</svg>
	</figure>

	<div class="container">
		<div class="row justify-content-center">	
			
			<div class="col-lg-7 mt-3 mt-lg-0">
				
				<h3 class="mb-3">Get In Touch</h3>
				<form class="row g-3">
					
					<p class="mb-1">What option you are interested in?</p>
					<div class="d-sm-flex mt-1">
						
						<div class="form-check me-4">
							<input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" checked/>
							<label class="form-check-label  text-dark" for="flexRadioDefault1">
								Membership
							</label>
						</div>
						
						<div class="form-check me-4">
							<input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2"/>
							<label class="form-check-label  text-dark" for="flexRadioDefault2">
								Inquiry
							</label>
						</div>
						
						<div class="form-check me-4">
							<input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault3"/>
							<label class="form-check-label  text-dark" for="flexRadioDefault3">
								Complain
							</label>
						</div>
						
						<div class="form-check me-4">
							<input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault4"/>
							<label class="form-check-label  text-dark" for="flexRadioDefault4">
								Other
							</label>
						</div>

					</div>
					
					<div class="col-md-6 contact-form">
						<input type="text" class="form-control text-dark" name="name" onChange={onFillForm} value={formData.name}  placeholder="Your name"/>
					</div>
					<div class="col-md-6 contact-form">
						<input type="email" class="form-control text-dark" onChange={onFillForm} value={formData.email} name="email" placeholder="Email"/>
					</div>
					<div class="col-md-6 contact-form">
						<input type="text" class="form-control text-dark" onChange={onFillForm} name="phonenumber" value={formData.phonenumber} placeholder="Phone number"/>
					</div>
					<div class="col-md-6 contact-form">
						<input type="text" class="form-control text-dark" onChange={onFillForm} name="subject" value={formData.subject} placeholder="Subject"/>
					</div>
					<div class="col-12">
						<textarea class="form-control" id="exampleFormControlTextarea1" onChange={onFillForm} name="message" value={formData.message} rows="3" placeholder="Message"></textarea>
					</div>
					<div class="col-12 form-check ms-2">
						<input type="checkbox" class="form-check-input" id="exampleCheck1"/>
						<label class="form-check-label" for="exampleCheck1">I consent to have this website store my submitted information so they can respond to my inquiry.</label>
					</div>
					
					<div class="d-grid gap-2 d-md-block">
						<button class="btn btn-primary" onClick={onFillSubmit} type="button">Send Message</button>
					</div>
				</form>
			</div>
			
			
			
			<div class="col-lg-5 mt-5 mt-lg-0">
				<h3 class="mb-3">Our Office</h3>
				<p> As hastened oh produced prospect formerly up am. Placing forming nay looking old married few has.</p>
				
				
				<h5 class="mb-2">Mumbai</h5>
				<ul class="list-inline mb-3">
					<li class="list-item text-primary-hover mb-1">
						<a href="#" class="d-flex">
							<i class="fas fa-fw fa-map-marker-alt text-primary me-2 mt-1"></i>Chicago HQ Estica Cop. 8573 Livingston St. Macomb, MI 48042
						</a>
					</li>
					<li class="list-item text-primary-hover mb-1">
						<a href="#">
							<i class="fas fa-fw fa-phone-alt text-primary me-2"></i>123-456-789
						</a>
					</li>
					<li class="list-item text-primary-hover">
						<a href="#">
							<i class="far fa-fw fa-envelope text-primary me-2"></i>example@email.com
						</a>
					</li>
				</ul>

				
				<h5 class="mb-2">New York</h5>
				<ul class="list-inline mb-3">
					<li class="list-item text-primary-hover mb-1">
						<a href="#" class="d-flex">
							<i class="fas fa-fw fa-map-marker-alt text-primary me-2 mt-1"></i>1303  Small Street.New York 8573 Livingston, New York 1004
						</a>
					</li>
					<li class="list-item text-primary-hover mb-1">
						<a href="#">
							<i class="fas fa-fw fa-phone-alt text-primary me-2"></i>123-456-789
						</a>
					</li>
					<li class="list-item text-primary-hover">
						<a href="#">
							<i class="far fa-fw fa-envelope text-primary me-2"></i>example@email.com
						</a>
					</li>
				</ul>
				
				<ul class="list-unstyled list-group-inline display-9">
					<li> <a class="btn btn-round bg-facebook" href="#"><i class="fab fa-facebook-square"></i></a> </li>
					<li> <a class="btn btn-round bg-instagram-gradient" href="#"><i class="fab fa-instagram-square"></i></a> </li>
					<li> <a class="btn btn-round bg-twitter" href="#"><i class="fab fa-twitter-square"></i></a> </li>
					<li> <a class="btn btn-round bg-linkedin" href="#"><i class="fab fa-linkedin"></i></a> </li>
					<li> <a class="btn btn-round bg-dribbble" href="#"><i class="fab fa-dribbble"></i></a> </li>
					<li> <a class="btn btn-round bg-skype" href="#"><i class="fab fa-skype"></i></a> </li>
				</ul>
			</div>
			
		</div>
	</div>
</section>
<section class="pt-0">
	<div class="container">
		<div class="row">
			<div class="col-12">
				<iframe class="w-100 h-400 grayscale rounded" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.9663095343008!2d-74.00425878428698!3d40.74076684379132!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259bf5c1654f3%3A0xc80f9cfce5383d5d!2sGoogle!5e0!3m2!1sen!2sin!4v1586000412513!5m2!1sen!2sin" height="500" style={{border:0}} aria-hidden="false" tabindex="0"></iframe>	
			</div>
		</div>
	</div>
</section>
<ToastContainer/>
    </>
}