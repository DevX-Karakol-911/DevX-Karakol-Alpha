import React, { useState, useContext } from "react";
import { TranslatorContext } from "../../../provider/TranslatorProvider";
import { NavLink } from "react-router-dom";
import { useTheme } from "../../../hook/useTheme";
import { Logout } from "../../auth/Logout";
import { SwitchTheme } from "../../switch_theme/SwitchTheme";
import "./Header.scss";

import logo from "../../../assets/logo.png";
import logoDark from "../../../assets/logo-dark.png";

export const Header = (props) => {
	const { isDark, setIsDark } = useTheme();
	const [headerScroll, setHeaderScroll] = useState(false);
	const { t, changeLanguage } = useContext(TranslatorContext);
	const [currentLanguage, setCurrentLanguage] = useState(
		localStorage.getItem("i18nextLng")
	);

	const handleLanguageChange = (lang) => {
		changeLanguage(lang);
		setCurrentLanguage(lang);
	};

	const isLanguage = (lang) => {
		return currentLanguage.startsWith(lang);
	};

	const changeBackground = () => {
		if (window.scrollY >= 10) {
			setHeaderScroll(true);
		} else {
			setHeaderScroll(false);
		}
	};

	window.addEventListener("scroll", changeBackground);

	const links = [
		// { to: "/", text: "Home" },
		{ to: "/about", text: t("header__about") },
		{
			to: "/projects",
			text: t("header__projects"),
			subRoutes: [
				{ to: "/projects/fullstack", text: t("header__fullstack") },
				{ to: "/projects/sdet", text: t("header__sdet") },
				{ to: "/projects/uiux", text: t("header__uiux") }
			]
		},
		{ to: "/contact", text: t("header__contacts") }
	];

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
										props.setIsOpen(false);
										props.setIsOpenDropdown(false);
										props.setIsOpenDropdownLanguage(false);
									}}
								>
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
															className="arrow__icon"
														>
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
																}
															>
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
													}
												>
													{link.text}
												</NavLink>
											)
										)}
									</div>
								</div>
								<div className="right">
									<div className="dropdown__language__menu__for__desktop__fthsrtg">
										<span>
											<svg
												xmlns="http://www.w3.org/2000/svg"
												aria-hidden="true"
												focusable="false"
												viewBox="0 0 24 24"
												className="arrow__icon arrow__icon__V1"
												data-v-0895989d=""
											>
												<path d="M0 0h24v24H0z" fill="none"></path>
												<path
													d=" M12.87 15.07l-2.54-2.51.03-.03c1.74-1.94 2.98-4.17 3.71-6.53H17V4h-7V2H8v2H1v1.99h11.17C11.5 7.92 10.44 9.75 9 11.35 8.07 10.32 7.3 9.19 6.69 8h-2c.73 1.63 1.73 3.17 2.98 4.56l-5.09 5.02L4 19l5-5 3.11 3.11.76-2.04zM18.5 10h-2L12 22h2l1.12-3h4.75L21 22h2l-4.5-12zm-2.62 7l1.62-4.33L19.12 17h-3.24z "
													className="css-c4d79v"
												></path>
											</svg>
											<svg
												xmlns="http://www.w3.org/2000/svg"
												aria-hidden="true"
												focusable="false"
												viewBox="0 0 24 24"
												className="arrow__icon arrow__icon__V2"
											>
												<path d="M12,16c-0.3,0-0.5-0.1-0.7-0.3l-6-6c-0.4-0.4-0.4-1,0-1.4s1-0.4,1.4,0l5.3,5.3l5.3-5.3c0.4-0.4,1-0.4,1.4,0s0.4,1,0,1.4l-6,6C12.5,15.9,12.3,16,12,16z" />
											</svg>
										</span>

										<div className="dropdown__content">
											<button
												onClick={() => handleLanguageChange("en")}
												className={
													isLanguage("en") ? "button active" : "button"
												}
											>
												EN
											</button>
											<button
												onClick={() => handleLanguageChange("ru")}
												className={
													isLanguage("ru") ? "button active" : "button"
												}
											>
												RU
											</button>
											<button
												onClick={() => handleLanguageChange("kg")}
												className={
													isLanguage("kg") ? "button active" : "button"
												}
											>
												KG
											</button>
											<button
												onClick={() => handleLanguageChange("cn")}
												className={
													isLanguage("cn") ? "button active" : "button"
												}
											>
												CN
											</button>
										</div>
									</div>
									<div className="switch__theme">
										<SwitchTheme />
									</div>
									<Logout />
								</div>
							</div>

							{/* ! burger menu */}
							<div
								className={
									props.isOpen ? "nav__burger__menu show" : "nav__burger__menu"
								}
							>
								{links.map((link) =>
									link.subRoutes ? (
										<div
											className={
												props.isOpenDropdown ? "dropdown open" : "dropdown"
											}
											key={link.to}
											onClick={() => {
												props.setIsOpenDropdown(!props.isOpenDropdown);
												props.setIsOpenDropdownLanguage(false);
											}}
										>
											<span>
												<pre>{link.text}</pre>
												<svg
													xmlns="http://www.w3.org/2000/svg"
													aria-hidden="true"
													focusable="false"
													viewBox="0 0 24 24"
													className="button__icon"
													data-v-3a85cb39=""
												>
													<path d="M18.9,10.9h-6v-6c0-0.6-0.4-1-1-1s-1,0.4-1,1v6h-6c-0.6,0-1,0.4-1,1s0.4,1,1,1h6v6c0,0.6,0.4,1,1,1s1-0.4,1-1v-6h6c0.6,0,1-0.4,1-1S19.5,10.9,18.9,10.9z"></path>
												</svg>
											</span>

											<div
												className={
													props.isOpenDropdown
														? "dropdown__content open"
														: "dropdown__content"
												}
											>
												{link.subRoutes.map((subRoute) => (
													<NavLink
														key={subRoute.to}
														to={subRoute.to}
														onClick={(event) => {
															event.stopPropagation();
															props.setIsOpen(false);
															props.setIsOpenDropdown(true);
															props.setIsOpenDropdownLanguage(false);
														}}
														className={({ isActive }) =>
															isActive ? "activeHeaderStyle" : undefined
														}
													>
														<pre>{subRoute.text}</pre>
													</NavLink>
												))}
											</div>
										</div>
									) : (
										<NavLink
											key={link.to}
											to={link.to}
											onClick={() => {
												props.setIsOpen(false);
												props.setIsOpenDropdown(false);
												props.setIsOpenDropdownLanguage(false);
											}}
											className={({ isActive }) =>
												isActive ? "activeHeaderStyle" : undefined
											}
										>
											{link.text}
										</NavLink>
									)
								)}
								<div
									className={
										props.isOpenDropdownLanguage
											? "dropdown__language__menu__for__mobile__fthsrtg open"
											: "dropdown__language__menu__for__mobile__fthsrtg"
									}
									onClick={() => {
										props.setIsOpenDropdownLanguage(
											!props.isOpenDropdownLanguage
										);
									}}
								>
									<span>
										{t("header__switch__lang")}
										<svg
											xmlns="http://www.w3.org/2000/svg"
											aria-hidden="true"
											focusable="false"
											viewBox="0 0 24 24"
											className="arrow__icon arrow__icon__V1"
											data-v-0895989d=""
										>
											<path d="M0 0h24v24H0z" fill="none"></path>
											<path
												d=" M12.87 15.07l-2.54-2.51.03-.03c1.74-1.94 2.98-4.17 3.71-6.53H17V4h-7V2H8v2H1v1.99h11.17C11.5 7.92 10.44 9.75 9 11.35 8.07 10.32 7.3 9.19 6.69 8h-2c.73 1.63 1.73 3.17 2.98 4.56l-5.09 5.02L4 19l5-5 3.11 3.11.76-2.04zM18.5 10h-2L12 22h2l1.12-3h4.75L21 22h2l-4.5-12zm-2.62 7l1.62-4.33L19.12 17h-3.24z "
												className="css-c4d79v"
											></path>
										</svg>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											aria-hidden="true"
											focusable="false"
											viewBox="0 0 24 24"
											className="arrow__icon arrow__icon__V2"
										>
											<path d="M12,16c-0.3,0-0.5-0.1-0.7-0.3l-6-6c-0.4-0.4-0.4-1,0-1.4s1-0.4,1.4,0l5.3,5.3l5.3-5.3c0.4-0.4,1-0.4,1.4,0s0.4,1,0,1.4l-6,6C12.5,15.9,12.3,16,12,16z" />
										</svg>
									</span>

									<div
										className={
											props.isOpenDropdownLanguage
												? "dropdown__content open"
												: "dropdown__content"
										}
										onClick={(event) => {
											event.stopPropagation();
											props.setIsOpen(false);
											props.setIsOpenDropdownLanguage(true);
										}}
									>
										<div
											onClick={() => handleLanguageChange("en")}
											className={isLanguage("en") ? "button active" : "button"}
										>
											EN
										</div>
										<div
											onClick={() => handleLanguageChange("ru")}
											className={isLanguage("ru") ? "button active" : "button"}
										>
											RU
										</div>
										<div
												onClick={() => handleLanguageChange("kg")}
												className={
													isLanguage("kg") ? "button active" : "button"
												}
											>
												KG
											</div>
										<div
											onClick={() => handleLanguageChange("cn")}
											className={isLanguage("cn") ? "button active" : "button"}
										>
											CN
										</div>
									</div>
								</div>
								<div className="burger__menu__switch__theme">
									<div
										className="button__switch__theme"
										onClick={() => {
											setIsDark(!isDark);
										}}
									>
										{t("header__appearance")}
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
									className={
										props.isOpen ? "burger__icon open" : "burger__icon"
									}
									onClick={() => props.setIsOpen(!props.isOpen)}
								>
									<span />
								</div>
							</div>

							{/* <div className="burger__button">
								<label>
									<input
										type="checkbox"
										checked={isOpen}
										onChange={() => props.setIsOpen(!isOpen)}
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
