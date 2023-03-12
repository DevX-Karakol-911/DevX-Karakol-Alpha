import React from "react";
import "./Style.scss";
import { TabCarousel } from "../carousel/TabCarousel";

export const Home = () => {
	return (
		<div className="home">
			<div className="container">
				<div className="content">
					<div className="title">
						<h1>
							Welcome to <br /> DevX - Karakol website!
						</h1>
					</div>
					<div className="carousel">
						<TabCarousel />
					</div>
				</div>
			</div>
		</div>
	);
};
