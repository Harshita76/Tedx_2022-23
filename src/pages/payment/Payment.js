import * as React from "react";
import { useState } from "react";
import { alpha, styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import "./PaymentCss.css";
import { Button } from "@mui/material";
// import Razorpay from "react-native-razorpay";
import axios from "axios";

const CssTextField = styled(TextField)(({ theme }) => ({
	"label + &": {
		marginTop: theme.spacing(3),
		color: "white",
	},

	"& label.Mui-focused": {
		color: "#e62b1e",
	},
	"& label": {
		color: "#FF220C",
	},
	"& .MuiInput-underline:after": {
		borderBottomColor: "green",
	},
	"& .MuiOutlinedInput-root": {
		"& input": {
			color: "white",
		},
		"& fieldset": {
			borderColor: "#FFFFFF",
		},
		"&:hover fieldset": {
			borderColor: "#FFFFFF",
		},
		"&.Mui-focused fieldset": {
			borderColor: "#e62b1e",
		},
		transition: theme.transitions.create([
			"border-color",
			"background-color",
			"box-shadow",
		]),
	},
}));

export default function Payment() {
	const onSubmit = (data) => console.log(true);
	const [cost, setCost] = useState(350);
	const [details, setDetails] = useState({
		name: "",
		email: "",
		phone: "",
		address: "",
		city: "",
		state: "",
		zip: "",
	});

	const [coupon, setCoupon] = useState("");
	const [couponError, setCouponError] = useState(false);
	const [foc, setFoc] = useState(false);
	const [foc2, setFoc2] = useState(false);
	const [foc3, setFoc3] = useState(false);
	const [foc4, setFoc4] = useState(false);
	const [foc5, setFoc5] = useState(false);
	const [foc6, setFoc6] = useState(false);
	const [foc7, setFoc7] = useState(false);

	const handleFoc = () => {
		setFoc(true);
	};
	const handleFoc2 = () => {
		setFoc2(true);
	};
	const handleFoc3 = () => {
		setFoc3(true);
	};
	const handleFoc4 = () => {
		setFoc4(true);
	};
	const handleFoc5 = () => {
		setFoc5(true);
	};
	const handleFoc6 = () => {
		setFoc6(true);
	};
	const handleFoc7 = () => {
		setFoc7(true);
	};

	//Errors

	const nameError = details.name.length < 1;
	const phoneError = details.phone.length < 10;
	let validEmail = new RegExp(/\S+@\S+\.\S+/);
	const emailError = !validEmail.test(details.email) ? true : false;
	const addressError = details.address.length < 1;
	const cityError = details.city.length < 1;
	const stateError = details.state.length < 1;
	let validZip = new RegExp(/^[0-9]{6}$/);
	const zipError = !validZip.test(details.zip) ? true : false;

	const showloader = () => {
		console.log("loadinggg....");
	};

	const loadScript = (src) => {
		return new Promise((resolve) => {
			const script = document.createElement("script");
			script.src = src;
			script.onload = () => {
				resolve(true);
			};
			script.onerror = () => {
				resolve(false);
			};
			document.body.appendChild(script);
		});
	};

	const showRazorpay = async () => {
		const res = await loadScript(
			"https://checkout.razorpay.com/v1/checkout.js"
		);
		if (!res) return;
		const options = {
			key: "rzp_live_OCjPCaxeyiaxGS", // change when making live
			// key: "rzp_test_YXr9fSnQcWBs09",
			currency: "INR",
			amount: cost * 100,
			name: "Tedx BITS Pilani Hyderabad",
			description: "Payment for TEDx BITS Pilani Hyderabad",
			image: "", // put image url here
    //   callback_url: "https://tedxbitshyderabad.org/",
			handler: function async (response) {
				console.log(response.razorpay_payment_id);
        fetch("https://api.apispreadsheets.com/data/l8R2YBeujSCrkSe0/", {
          method: "POST",
          body: JSON.stringify({"data": {
          paymentId: response.razorpay_payment_id,
          amount: cost,
          name: details.name,
          email: details.email,
          phone: details.phone,
          address: details.address,
          city: details.city,
          state: details.state,
          zip: details.zip
          }
        }),
      })
	    .then((res) => {
			alert("Payment Successful");
		})
        .then((res) => {
          window.location.href = "http://tedxbitshyde.org/";
        })
        .catch((err) => {
          console.log(err);
        })
			},
			prefill: {
				name: details.name,
				email: details.email,
				contact: details.phone,
			},
		};
    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
	};

	const handlePayment = (e) => {
		e.preventDefault();
		if (
			nameError ||
			phoneError ||
			emailError ||
			addressError ||
			cityError ||
			stateError ||
			zipError
		) {
			alert("Please fill out all fields");
		} else {
			console.log(details);
			showRazorpay();
		}
	};

	const handleCoupon = (e) => {
		e.preventDefault();
		if (coupon == "TedxBITS2022") {
			if (cost == 350) {
				setCost(cost - 50);
			}
			setCouponError(false);
		} else {
			setCouponError(true);
			setCost(350);
			setCoupon("");
		}
	};

	return (
		<>
			<Box
				sx={{ width: "100%" }}
				style={{
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
					flexDirection: "column",
				}}
			>
				<div className="box">
					<Box sx={{ borderBottom: 1, borderColor: "divider" }}>
						<h1>Fill In Your Details</h1>
						<Box
							sx={{
								"& .MuiTextField-root": { m: 1, width: "60%" },
							}}
						>
							<CssTextField
								id="outlined-basic"
								label="Name"
								value={details.name}
								variant="outlined"
								onChange={(e) => {
									setDetails({ ...details, name: e.target.value });
								}}
								required
								onFocus={handleFoc}
								helperText={foc && nameError ? "Please type your name!" : ""}
								error={nameError}
							/>
							<CssTextField
								id="outlined-basic"
								label="Email"
								variant="outlined"
								value={details.email}
								onChange={(e) => {
									setDetails({ ...details, email: e.target.value });
								}}
								required
								onFocus={handleFoc2}
								helperText={
									foc2 && emailError ? "Please type a valid email!" : ""
								}
								error={emailError}
							/>
							<CssTextField
								id="outlined-basic"
								label="Phone Number"
								variant="outlined"
								value={details.phone}
								onChange={(e) => {
									setDetails({ ...details, phone: e.target.value });
								}}
								required
								onFocus={handleFoc3}
								helperText={
									foc3 && phoneError ? "Please type a valid phone number!" : ""
								}
								error={phoneError}
							/>
							<CssTextField
								id="outlined-basic"
								label="Address"
								variant="outlined"
								value={details.address}
								onChange={(e) => {
									setDetails({ ...details, address: e.target.value });
								}}
								required
								onFocus={handleFoc4}
								helperText={
									foc4 && addressError ? "Please type an address!" : ""
								}
								error={addressError}
							/>

							<Grid container justifyContent="center" spacing={0}>
								<CssTextField
									id="outlined-basic"
									label="City"
									variant="outlined"
									sx={{
										"& .MuiTextField-root": { m: 1, width: "25ch" },
									}}
									value={details.city}
									onChange={(e) => {
										setDetails({ ...details, city: e.target.value });
									}}
									required
									onFocus={handleFoc5}
									helperText={foc5 && cityError ? "Please type the city!" : ""}
									error={cityError}
								/>

								<CssTextField
									id="outlined-basic"
									label="State"
									variant="outlined"
									value={details.state}
									onChange={(e) => {
										setDetails({ ...details, state: e.target.value });
									}}
									required
									onFocus={handleFoc6}
									helperText={
										foc6 && stateError ? "Please type the state!" : ""
									}
									error={stateError}
								/>
							</Grid>

							<CssTextField
								id="outlined-basic"
								label="Pin Code"
								variant="outlined"
								value={details.zip}
								onChange={(e) => {
									setDetails({ ...details, zip: e.target.value });
								}}
								required
								onFocus={handleFoc7}
								helperText={
									foc7 && zipError ? "Please type a valid pin code!" : ""
								}
								error={zipError}
							/>
						</Box>

						<Box
							sx={{
								"& .MuiTextField-root": { m: 1, width: "60%" },
							}}
						>
							<h3 style={{ color: "#e62b1e" }}>
								AMOUNT TO BE PAID: Rs {cost} /-
							</h3>
							<CssTextField
								id="outlined-basic"
								label="Coupon Code"
								variant="outlined"
								value={coupon}
								onChange={(e) => {
									setCoupon(e.target.value);
								}}
								helperText={
									couponError ? "Please type a valid coupon code!" : ""
								}
								error={couponError}
							/>

							<div className="button">
								<Button className="couponButton" onClick={handleCoupon}>
									Check Coupon
								</Button>
								<Button className="paymentButton" onClick={handlePayment}>
									Proceed to payment
								</Button>
							</div>
						</Box>
					</Box>
				</div>
			</Box>
		</>
	);
}
