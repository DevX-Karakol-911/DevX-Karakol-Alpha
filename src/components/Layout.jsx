import React from "react";
import cn from "classnames";
import { useTheme } from "../hook/useTheme";

export const Layout = ({ children }) => {
	const { isDark } = useTheme();

	return (
		<>
			<div
				className={cn("layout", {
					dark: isDark
				})}>
				{children}
			</div>
		</>
	);
};
