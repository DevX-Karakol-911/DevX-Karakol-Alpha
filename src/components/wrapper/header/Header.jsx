import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useTheme } from "../../../hook/useTheme";
import { Logout } from "../../auth/Logout";
import { SwitchTheme } from "../../switch_theme/SwitchTheme";
import "./Header.scss";

import logo from "../../../assets/logo.png";
import logoDark from "../../../assets/logo-dark.png";

const links = [
	{ to: "/", text: "Home" },
	{ to: "/about", text: "About Us" },
	{ to: "/contact", text: "Contacts" },
	{ to: "/projects", text: "Projects" },
];

export const Header = () => {
	const { isDark, setIsDark } = useTheme();
	const [headerScroll, setHeaderScroll] = useState(false);
	const [isOpen, setIsOpen] = useState(false);

	const changeBackground = () => {
		if (window.scrollY >= 10) {
			setHeaderScroll(true);
		} else {
			setHeaderScroll(false);
		}
	};
	window.addEventListener("scroll", changeBackground);

	return (
		<div>
			<header className="header__jtsecn">
				<div className={headerScroll ? "headerScroll active" : "headerScroll"}>
					<div className="container">
						<div className="content">
							{/* ! header menu */}
							<div className="logo">
								<a href="">
									{isDark ? (
										<img src={logo} alt="DevX logo" />
									) : (
										<img src={logoDark} alt="DevX logo" />
									)}
								</a>
							</div>
							<div className="nav__menu">
								<div className="left">
									<div className="link">
										{links.map((link) => (
											<NavLink
												key={link.to}
												to={link.to}
												className={({ isActive }) =>
													isActive ? "activeHeaderStyle" : undefined
												}>
												{link.text}
											</NavLink>
										))}
									</div>
								</div>
								<div className="right">
									<div className="switch__theme">
										<SwitchTheme />
									</div>
									<Logout />
								</div>
							</div>

							{/* ! burger menu */}
							<div
								className={
									isOpen ? "nav__burger__menu show" : "nav__burger__menu"
								}>
								{links.map((link) => (
									<NavLink
										key={link.to}
										to={link.to}
										onClick={() => setIsOpen(false)}
										className={({ isActive }) =>
											isActive ? "activeHeaderStyle" : undefined
										}>
										{link.text}
									</NavLink>
								))}
								<div className="burger__menu__switch__theme">
									<div
										className="button__switch__theme"
										onClick={() => {
											setIsDark(!isDark);
										}}>
										Appearance
									</div>
									<div className="icon__switch__theme">
										<SwitchTheme />
									</div>
								</div>
								<div className="right">
									<Logout />
								</div>
							</div>

							<div className="burger__button">
								<div
									className={isOpen ? "burger__icon open" : "burger__icon"}
									onClick={() => setIsOpen(!isOpen)}>
									<span />
								</div>
							</div>

							{/* <div className="burger__button">
								<label>
									<input
										type="checkbox"
										checked={isOpen}
										onChange={() => setIsOpen(!isOpen)}
									/>
									<span></span>
									<span></span>
									<span></span>
								</label>
							</div> */}
						</div>
					</div>
				</div>
			</header>
		</div>
	);
};
