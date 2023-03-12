import React from "react";
import scss from "./PreLoader.module.scss";

export const PreLoader = () => {
	return (
		<div className={scss.preLoader}>
			<p className={scss.title_loader}>
				Dev<span>X</span>
			</p>
			<span className={scss.loader}></span>
		</div>
	);
};
