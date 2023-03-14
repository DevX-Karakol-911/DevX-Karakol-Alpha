import React, { useContext, useState } from "react";
import { TranslatorContext } from "../../../provider/TranslatorProvider";

export const Sdet = () => {
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

	return (
		<>
			<div className="sdet__drgsdrg">
				<div className="container">
					<div className="content">
						<h1>SDET</h1>
						<div className="text__fsefer">
							<button
								onClick={() => handleLanguageChange("en")}
								className={isLanguage("en") ? "button active" : "button"}
							>
								EN
							</button>
							<button
								onClick={() => handleLanguageChange("ru")}
								className={isLanguage("ru") ? "button active" : "button"}
							>
								RU
							</button>
							<button
								onClick={() => handleLanguageChange("cn")}
								className={isLanguage("cn") ? "button active" : "button"}
							>
								CN
							</button>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
