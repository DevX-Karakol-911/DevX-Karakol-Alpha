import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useTheme } from "../../../hook/useTheme";
import { Logout } from "../../auth/Logout";
import { SwitchTheme } from "../../switch_theme/SwitchTheme";
import "./Header.scss";

import logo from "../../../assets/logo.png";
import logoDark from "../../../assets/logo-dark.png";

const links = [
	// { to: "/", text: "Home" },
	{ to: "/about", text: "About Us" },
	{
		to: "/projects",
		text: "Projects",
		subRoutes: [
			{ to: "/projects/fullstack", text: "Full Stack" },
			{ to: "/projects/sdet", text: "SDET" },
			{ to: "/projects/uiux", text: "UI & UX" },
		],
	},
	{ to: "/contact", text: "Contacts" },
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
								<NavLink
									to="/"
									onClick={() => {
										setIsOpen(false);
									}}>
									{isDark ? (
										<img src={logo} alt="DevX logo" />
									) : (
										<img src={logoDark} alt="DevX logo" />
									)}
								</NavLink>
							</div>
							<div className="nav__menu">
								<div className="left">
									<div className="link">
										{links.map((link) =>
											link.subRoutes ? (
												<div className="dropdown" key={link.to}>
													<span>
														<pre>{link.text}</pre>
														<svg
															xmlns="http://www.w3.org/2000/svg"
															aria-hidden="true"
															focusable="false"
															viewBox="0 0 24 24"
															className="arrow__icon">
															<path d="M12,16c-0.3,0-0.5-0.1-0.7-0.3l-6-6c-0.4-0.4-0.4-1,0-1.4s1-0.4,1.4,0l5.3,5.3l5.3-5.3c0.4-0.4,1-0.4,1.4,0s0.4,1,0,1.4l-6,6C12.5,15.9,12.3,16,12,16z" />
														</svg>
													</span>

													<div className="dropdown__content">
														{link.subRoutes.map((subRoute) => (
															<NavLink
																key={subRoute.to}
																to={subRoute.to}
																className={({ isActive }) =>
																	isActive ? "activeHeaderStyle" : undefined
																}>
																<pre>{subRoute.text}</pre>
															</NavLink>
														))}
													</div>
												</div>
											) : (
												<NavLink
													key={link.to}
													to={link.to}
													className={({ isActive }) =>
														isActive ? "activeHeaderStyle" : undefined
													}>
													{link.text}
												</NavLink>
											)
										)}
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
