import i18n from "i18next";
import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

i18n
	.use(Backend)
	.use(LanguageDetector)
	.use(initReactI18next)
	.init({
		fallbackLng: "en",
		debug: false, // ? это аналог console.log()
		detection: {
			order: ["localStorage", "navigator"],
			caches: ["localStorage"]
		},
		interpolation: {
			escapeValue: false
		},
		saveMissing: true,
		backend: {
			loadPath: "/locales/{{lng}}/{{ns}}.json",
			addPath: "/locales/add/{{lng}}/{{ns}}"
		},
		react: {
			useSuspense: false
		}
	});

export default i18n;
