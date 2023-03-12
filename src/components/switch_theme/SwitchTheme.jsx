import React from "react";
import { useTheme } from "../../hook/useTheme";
import "./SwitchTheme.scss";

export const SwitchTheme = () => {
	const { isDark, setIsDark } = useTheme();

	const toggleTheme = () => {
		setIsDark(!isDark);
	};

	return (
		<>
			<div className="switch__theme__daefeef">
				<div className={`dark_mode ${isDark ? "dark_mode_active" : ""}`}>
					<input
						className="dark_mode_input"
						type="checkbox"
						id="darkmode-toggle"
						onChange={toggleTheme}
						checked={isDark}
					/>
					<label className="dark_mode_label" htmlFor="darkmode-toggle" />
				</div>
			</div>
		</>
	);
};
