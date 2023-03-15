import { useState, useEffect, useRef, useContext } from "react";
import "./TabCarousel.scss";

import TabImage1 from "./img/people/1.webp";
import TabImage2 from "./img/people/2.webp";
import TabImage3 from "./img/people/3.webp";
import TabImage4 from "./img/people/4.webp";
import TabImage5 from "./img/people/5.webp";

import company1 from "./img/company/1.png";
import company2 from "./img/company/2.png";
import company3 from "./img/company/3.png";
import company4 from "./img/company/4.png";
import company5 from "./img/company/5.png";
import { TranslatorContext } from "../../provider/TranslatorProvider";

export const TabCarousel = () => {
	const [activeTab, setActiveTab] = useState(0);
	const intervalIdRef = useRef(null); // создаем ref
	const { t } = useContext(TranslatorContext);

	useEffect(() => {
		const id = setInterval(() => {
			setActiveTab((activeTab) => (activeTab + 1) % tabs.length);
		}, 3000);
		intervalIdRef.current = id; // сохраняем ссылку в ref
		return () => clearInterval(id);
	}, []);

	const handleTabClick = (index) => {
		clearInterval(intervalIdRef.current); // используем сохраненную ссылку
		setActiveTab(index);
		const newIntervalId = setInterval(() => {
			setActiveTab((activeTab) => (activeTab + 1) % tabs.length);
		}, 3000);
		intervalIdRef.current = newIntervalId; // обновляем ссылку в ref
	};

	const tabs = [
		{
			area: t("TabCarousel__area1"),
			label: t("TabCarousel__label1"),
			company: company1,
			image: TabImage1
		},
		{
			area: t("TabCarousel__area2"),
			label: t("TabCarousel__label2"),
			company: company2,
			image: TabImage2
		},
		{
			area: t("TabCarousel__area3"),
			label: t("TabCarousel__label3"),
			company: company3,
			image: TabImage3
		},
		{
			area: t("TabCarousel__area4"),
			label: t("TabCarousel__label4"),
			company: company4,
			image: TabImage4
		},
		{
			area: t("TabCarousel__area5"),
			label: t("TabCarousel__label5"),
			company: company5,
			image: TabImage5
		}
	];

	return (
		<div className="tab__carousel__awfehsrt">
			<div className="position">
				<div className="carousel">
					<div className="tabs">
						{tabs.map((tab, index) => (
							<div
								key={index}
								onClick={() => handleTabClick(index)}
								className={index === activeTab ? "button active" : "button"}
							>
								<div
									className={index === activeTab ? "company active" : "company"}
								>
									<img src={tab.company} alt="company" />
								</div>
								<div className={index === activeTab ? "role active" : "role"}>
									<pre>{tab.label}</pre>
								</div>
							</div>
						))}
					</div>
					{tabs.map((tab, index) => (
						<div
							key={index}
							className={
								index === activeTab ? "base_people active" : "base_people"
							}
						>
							<pre className="person__company">{tab.area}</pre>
							<img className="person__img" src={tab.image} alt="people" />
						</div>
					))}
				</div>
			</div>
		</div>
	);
};
