import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { Analytics } from "@vercel/analytics/react";
import "bootstrap-icons/font/bootstrap-icons.css";
import { I18nextProvider } from "react-i18next";
import i18n from "i18next";
import { AppProvider } from "./AppContext.jsx";
import i18nInit from "./js/i18ninit.js";

i18nInit();

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <AppProvider>
            <I18nextProvider i18n={i18n}>
                <App />
            </I18nextProvider>
            <Analytics />
        </AppProvider>
    </React.StrictMode>
);
