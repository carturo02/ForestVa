import { createI18n } from "vue-i18n";
import en from '../locales/en';
import es from "@/locales/es";


const i18n = createI18n({
    legacy: false,
    globalInjection: true,
    locale: window.navigator.language.substring(0, 2) || "es",
    fallbackLocale: "en",
    availableLocales: ["es", "en"],
    messages: {en, es}
});

export default i18n;