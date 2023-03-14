import React, { useContext } from "react";
import "./Style.scss";
import { TabCarousel } from "../carousel/TabCarousel";
import { TranslatorContext } from "../../provider/TranslatorProvider";

export const Home = () => {
	const { t } = useContext(TranslatorContext);

	return (
		<div className="home">
			<div className="container">
				<div className="content">
					<div className="title">
						<h1>{t("home__title1")}</h1>
						<h1>{t("home__title2")}</h1>
					</div>
					<div className="carousel">
						<TabCarousel />
					</div>
				</div>
			</div>
		</div>
	);
};
