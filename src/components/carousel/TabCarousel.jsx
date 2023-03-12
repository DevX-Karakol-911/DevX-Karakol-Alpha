import { useState, useEffect, useRef } from "react";
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

const tabs = [
	{
		area: "DevX Karakol Founder",
		label: "Lead FS Engineer",
		company: company1,
		image: TabImage1,
	},
	{
		area: "SDET Graduate",
		label: "Lead SDET",
		company: company2,
		image: TabImage2,
	},
	{
		area: "FullStack Graduate",
		label: "FS Engineer",
		company: company3,
		image: TabImage3,
	},
	{
		area: "FullStack Graduate",
		label: "FS Engineer",
		company: company4,
		image: TabImage4,
	},
	{
		area: "FullStack Graduate",
		label: "FS Engineer",
		company: company5,
		image: TabImage5,
	},
];

export const TabCarousel = () => {
	const [activeTab, setActiveTab] = useState(0);
	const intervalIdRef = useRef(null); // создаем ref

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

	return (
		<div className="tab__carousel__awfehsrt">
			<div className="position">
				<div className="carousel">
					<div className="tabs">
						{tabs.map((tab, index) => (
							<div
								key={index}
								onClick={() => handleTabClick(index)}
								className={index === activeTab ? "button active" : "button"}>
								<div
									className={
										index === activeTab ? "company active" : "company"
									}>
									<img src={tab.company} alt="company" />
								</div>
								<div className={index === activeTab ? "role active" : "role"}>
									<p>{tab.label}</p>
								</div>
							</div>
						))}
					</div>
					{tabs.map((tab, index) => (
						<div
							key={index}
							className={
								index === activeTab ? "base_people active" : "base_people"
							}>
							<p className="person__company">{tab.area}</p>
							<img className="person__img" src={tab.image} alt="people" />
						</div>
					))}
				</div>
			</div>
		</div>
	);
};
