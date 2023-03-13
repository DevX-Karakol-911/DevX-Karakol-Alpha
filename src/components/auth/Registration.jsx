import React, { useEffect } from "react";
import { UserAuth } from "../../provider/AuthProvider.jsx";
import { Link, useNavigate } from "react-router-dom";

import pic from "../../assets/logo.png";
import google_icon from "../../assets/icons/google_icon.svg";
import "./Auth.scss";

export const Registration = () => {
	const { googleSignIn, user } = UserAuth();
	const navigate = useNavigate();

	const handleGoogleSignIn = async () => {
		try {
			const success = await googleSignIn();
			if (success) {
				navigate("/");
			}
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		if (user != null) {
			navigate("/");
		}
	}, [user, navigate]);

	return (
		<div className="login__desfaer">
			<div className="style">
				<img className="logo" src={pic} alt="DevX Logo" />
				<h1>
					Welcome
					<span>!</span>
				</h1>
				<div className="submit" onClick={handleGoogleSignIn}>
					<img src={google_icon} alt="" />
					<p>Sign up with Google</p>
				</div>
				<p className="documentation">
					By signing up, you agree to our{" "}
					<a href="#" target="_blank">
						Privacy Policy
					</a>{" "}
					<br />
					and{" "}
					<a href="#" target="_blank">
						Terms of Service
					</a>
					.
				</p>
				<p className="switch">
					Already have an account? <Link to="/login">Login</Link>
				</p>
			</div>
		</div>
	);
};
