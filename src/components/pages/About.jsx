import React, { useContext } from "react";
import { TranslatorContext } from "../../provider/TranslatorProvider";
import "./Style.scss";

export const About = () => {
	const { t } = useContext(TranslatorContext);

	return (
		<div className="about">
			<div className="container">
				<div className="content">
					<h1>{t('about__title')}</h1>
					<p>{t("about__text")}</p>
				</div>
			</div>
		</div>
	);
};
