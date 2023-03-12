import React, { createContext, useMemo, useState, useEffect } from "react";

export const ThemeContext = createContext({ isDark: false });

export const ThemeProvider = ({ children }) => {
	const [isDark, setIsDark] = useState(() => {
		const savedIsDark = localStorage.getItem("isDark");
		return savedIsDark ? JSON.parse(savedIsDark) : false;
	});

	useEffect(() => {
		localStorage.setItem("isDark", JSON.stringify(isDark));
	}, [isDark]);

	const value = useMemo(() => ({ isDark, setIsDark }), [isDark]);

	return (
		<>
			<ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
		</>
	);
};
