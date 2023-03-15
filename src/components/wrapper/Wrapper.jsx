import React, { useState } from "react";
import { Header } from "./header/Header";
import { Main } from "./main/Main";
import { Footer } from "./footer/Footer";
import "./Wrapper.scss";

export const Wrapper = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [isOpenDropdown, setIsOpenDropdown] = useState(false);
	const [isOpenDropdownLanguage, setIsOpenDropdownLanguage] = useState(false);

	return (
		<div className="wrapper">
			<header>
				<Header
					isOpen={isOpen}
					setIsOpen={setIsOpen}
					isOpenDropdown={isOpenDropdown}
					setIsOpenDropdown={setIsOpenDropdown}
					isOpenDropdownLanguage={isOpenDropdownLanguage}
					setIsOpenDropdownLanguage={setIsOpenDropdownLanguage}
				/>
			</header>
			<main>
				<Main />
			</main>
			<footer>
				<Footer
					isOpen={isOpen}
					setIsOpen={setIsOpen}
					isOpenDropdown={isOpenDropdown}
					setIsOpenDropdown={setIsOpenDropdown}
					isOpenDropdownLanguage={isOpenDropdownLanguage}
					setIsOpenDropdownLanguage={setIsOpenDropdownLanguage}
				/>
			</footer>
		</div>
	);
};
