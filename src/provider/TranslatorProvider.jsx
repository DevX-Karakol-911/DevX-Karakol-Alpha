import React, { useState, useEffect, createContext } from "react";
import { useTranslation } from "react-i18next";

export const TranslatorContext = createContext();

export const TranslatorProvider = ({ children }) => {
	const { t, i18n } = useTranslation();
	const [isInitialized, setIsInitialized] = useState(false);

	useEffect(() => {
		const loadNamespaces = async () => {
			await i18n.loadNamespaces("translation");
			setIsInitialized(true);
		};
		loadNamespaces();
	}, [i18n]);

	const changeLanguage = async (language) => {
		await i18n.changeLanguage(language);
		await i18n.loadNamespaces("translation");
	};

	const contextValues = {
		t,
		changeLanguage,
		isInitialized,
	};

	if (!isInitialized) {
		return <div>Loading...</div>;
	}

	return (
		<TranslatorContext.Provider value={contextValues}>
			{children}
		</TranslatorContext.Provider>
	);
};
