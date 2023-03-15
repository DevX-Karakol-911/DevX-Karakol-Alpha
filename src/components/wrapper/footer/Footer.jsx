import React, { useContext } from "react";
import "../footer/Footer.scss";
import devxLogo from "../../../assets/logo.png";
import instIcon from "../../../assets/icons/footer/instagram_icon.svg";
import githubIcon from "../../../assets/icons/footer/github_icon.svg";
import discordIcon from "../../../assets/icons/footer/discord_icon.svg";
import { TranslatorContext } from "../../../provider/TranslatorProvider";
import { NavLink } from "react-router-dom";

export const Footer = (props) => {
	const { t } = useContext(TranslatorContext);

	return (
		<div className="footer">
			<div className="container">
				<div className="content">
					<div className="footer__top">
						<div className="block">
							<NavLink
								to="/"
								onClick={() => {
									props.setIsOpen(false);
									props.setIsOpenDropdown(false);
									props.setIsOpenDropdownLanguage(false);
								}}
							>
								<img className="logo" src={devxLogo} alt="iksu_devx_logo" />
							</NavLink>
							<p>{t("footer__text1__block1")}</p>
						</div>
						<div className="block">
							<h6>{t("footer__title__block2")}</h6>
							<a href="#">{t("footer__text1__block2")}</a>
							<a href="#">{t("footer__text2__block2")}</a>
						</div>
						<div className="block">
							<h6>{t("footer__title__block3")}</h6>
							<a href="#">{t("footer__text1__block3")}</a>
							<a href="#">{t("footer__text1__block3")}</a>
							<a href="#">{t("footer__text1__block3")}</a>
						</div>
						<div className="block">
							<h6>{t("footer__title__block4")}</h6>
							<a href="#">{t("footer__text1__block4")}</a>
							<a href="#">{t("footer__text2__block4")}</a>
						</div>
					</div>
					<hr />
					<div className="footer__bottom">
						<div className="copyright">{t("footer__copyright")}</div>
						<div className="icons">
							<a href="https://www.instagram.com/elcho911/" target="_blank">
								<img src={instIcon} alt="inst" />
							</a>
							<a href="https://github.com/Elkhan2003" target="_blank">
								<img src={githubIcon} alt="github" />
							</a>
							<a href="https://discord.gg/NZpxaY4CGC" target="_blank">
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
