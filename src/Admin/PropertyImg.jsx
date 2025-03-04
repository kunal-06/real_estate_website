import { useEffect } from "react";
import { useState } from "react"
import { Link } from "react-router-dom";

export default function PropertyImg() {

	const [Images, setImages] = useState([]);
	const user = JSON.parse(localStorage.getItem('user'))
	function onGetImages() {
		const token = localStorage.getItem('token')
		if (user.role == 'Seller') {
			fetch(`https://localhost:7273/api/PropertyImg/User/${user.userID}`,{headers:{'Authorization': `Bearer ${token}` }}).then(res => res.json()).then((data) => {
				setImages(data);
				
			})
		}
		else if (user.role == "Admin") {
			fetch(`https://localhost:7273/api/PropertyImg`).then(res => res.json()).then((data) => {
				setImages(data);
				
			})
		}
	}
	useEffect(() => {
		onGetImages()
		return () => {
			Images.forEach((url) => URL.revokeObjectURL(url));
		};
	}, []);

	function OnDelete(id) {
		const token = localStorage.getItem('token')
		fetch('https://localhost:7273/api/PropertyImg/' + id, { method: 'DELETE', headers:{'Authorization': `Bearer ${token}` }}).then((res) => {
			onGetImages()
		})
	}

	return <>
		<div class="row w-100">
			<div class="col">

				<div class="my-5">
					<h3>Property Images</h3>
					<hr />
				</div>

				<div class="row">
					<div class="col-md-12">
						<div class="bg-secondary-soft p-3 p-md-5 rounded ">

							<div class="row d-xxl-block ">
								<div class="col-12 align-middle py-3">
									<div class="row border-bottom ">
										<div class="col-4">
											<h5>Image</h5>
										</div>
										<div class="col-8">
											<div class="row">
												<div class="col-3 align-middle text-body py-2">
													<h5>Property</h5>
												</div>
												<div class="col-3 align-middle py-2">
													<h5>Created Date</h5>
												</div>
												<div class="col-3 align-middle py-2">
													<h5>Viewer</h5>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>


							{Images.map((e) => {
								return <>
									<div class="row">
										<div class="col align-middle py-4">
											<div class="row align-items-center">
												<div class="col-md-4">
													<div class="card bg-transparent">
														<img
															src={"https://localhost:7273/" + e.imagePath}
															style={{ width: "150px", height: "auto", borderRadius: "5px", border: "1px solid #ddd" }}
														/>
													</div>
												</div>

												<div class="col-md-8 pt-2  pt-xxl-0">
													<div class="row">

														<div class="col-md-3 align-middle text-body">
															{e.propertyID}
														</div>
														<div class="col-md-3 align-middle text-body">
															{e.created}
														</div>


														<div class="col-md-6 align-middle pt-2 pt-md-0">
															<button class="btn btn-sm btn-info-soft me-1 mb-1" type="button" data-bs-toggle="modal" data-bs-target={"#exampleModal"+e.imageID}><i class="fas fa-fw fa-eye"></i></button>

															<div class="modal fade" id={"exampleModal"+e.imageID} tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
																<div class="modal-dialog modal-xl">
																	<div class="modal-content">
																		<div class="modal-header">
																			<h1 class="modal-title fs-5" id="exampleModalLabel">Viewer</h1>
																			<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
																		</div>
																		<div class="modal-body">
																			<img src={"https://localhost:7273/" + e.imagePath} height={'800'} width={'1300'} />
																		</div>
																	</div>
																</div>
															</div>

															<button class="btn btn-sm btn-danger-soft mb-1" onClick={() => {
																if (window.confirm('Are you sure to delete this record?')) { OnDelete(e.imageID) }
															}}><i class="far fa-fw fa-trash-alt"></i></button>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
									<hr />

								</>
							})}

						</div>
					</div>
				</div>

			</div>
		</div>
	</>
}