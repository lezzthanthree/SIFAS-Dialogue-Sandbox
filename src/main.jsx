import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { Analytics } from "@vercel/analytics/react";
import "bootstrap-icons/font/bootstrap-icons.css";
import { AppProvider } from "./AppContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <AppProvider>
            <App />
            <Analytics />
        </AppProvider>
    </React.StrictMode>
);
