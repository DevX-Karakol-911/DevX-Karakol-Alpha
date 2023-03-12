import React from "react";
import { SwitchTheme } from "../switch_theme/SwitchTheme";
import "./Style.scss";

export const Contact = () => {
	return (
		<div className="contact">
			<div className="container">
				<div className="content">
					<h1>Contact</h1>
					<SwitchTheme />
				</div>
			</div>
		</div>
	);
};
