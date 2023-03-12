import React from "react";
import "../footer/Footer.scss";
import devxLogo from "../../../assets/logo.png";
import instIcon from "../../../assets/icons/footer/instagram_icon.svg";
import githubIcon from "../../../assets/icons/footer/github_icon.svg";
import discordIcon from "../../../assets/icons/footer/discord_icon.svg";

export const Footer = () => {
	return (
		<div className="footer">
			<div className="container">
				<div className="content">
					<div className="footer__top">
						<div className="block">
							<img className="logo" src={devxLogo} alt="iksu_devx_logo" />
							<p>
								Level up your career, income, and life. WEDEVX helped over 432
								students land their first jobs in tech, become the next one and
								change your life today!
							</p>
						</div>
						<div className="block">
							<h6>Courses</h6>
							<a href="#">SDET</a>
							<a href="#">Full Stack</a>
						</div>
						<div className="block">
							<h6>Karakol-IKSU</h6>
							<a href="#">Pricing</a>
							<a href="#">About Us</a>
							<a href="#">FAQs</a>
						</div>
						<div className="block">
							<h6>Contact Us</h6>
							<a href="#">hello@devxschool.com</a>
							<a href="#">312-667-9735</a>
						</div>
					</div>
					<hr />
					<div className="footer__bottom">
						<div className="copyright">
							Copyright © 2023 DevX | Powered by Elcho911
						</div>
						<div className="icons">
							<a href="">
								<img src={instIcon} alt="inst" />
							</a>
							<a href="">
								<img src={githubIcon} alt="github" />
							</a>
							<a href="">
								<img src={discordIcon} alt="discord" />
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

{
	/* <h2 className="title">
						The site is under construction! <br />
						by: Elcho911, Sherbolot, Janeta, Zarina!
					</h2> */
}
