import React from "react";
import validate from "./validateForm";
import useForm from "./useForm";
import "./Form.css";

const Form = ({ submitForm }) => {
	const { handleChange, handleSubmit, values, errors } = useForm(
		submitForm,
		validate
	);

	return (
		<>
			<div className="form-container">
				<div className="form-left">
					<div class="wrapper">
						<div class="tedxicem">
							<h1 class="ted">TED</h1>
							<h1 class="icem">BITS Hyderabad</h1>
							<p>
								<span>x</span> = independently organized TED event
							</p>
						</div>
						<div class="footer">
							<span>Venue:</span>
							<h1>XXXX XX</h1>
							<h1 class="venue">XXXXX, XXXX</h1>
						</div>
					</div>
					<div class="layer">
						<h1 class="soon">Coming Soon</h1>
					</div>
				</div>
				<div className="form-right">
					<form onSubmit={handleSubmit} className="form" noValidate>
						<div class="wrapper2">
							<div class="tedxicem">
								<h2 class="ted">Contact Us</h2>
							</div>
						</div>
						<div className="form-inputs">
							{errors.username && <p>{errors.username}</p>}
							<div>
								<input
									className="form-input"
									type="text"
									name="username"
									placeholder="Name"
									value={values.username}
									onChange={handleChange}
								/>
							</div>
						</div>
						<div className="form-inputs">
							{errors.email && <p>{errors.email}</p>}
							<div>
								<input
									className="form-input"
									type="email"
									name="email"
									placeholder="Email"
									value={values.email}
									onChange={handleChange}
								/>
							</div>
						</div>
						<div className="form-inputs">
							<textarea
								className="form-input"
								type="textbox"
								name="message"

								rows="5"
								placeholder="Message"
								value={values.message}
								onChange={handleChange}
							/>
						</div>
						<div className="lower">
							<button className="form-input-btn" type="submit">
								Submit
							</button>
						</div>
					</form>
				</div>
			</div>
		</>
	);
};

export default Form;
