import { useContext } from "react";
import Sidebar from "./components/Sidebar";
import Content from "./components/Content";
import Announcement from "./components/Announcement";
import { AppContext } from "./AppContext";
import { useTranslation } from "react-i18next";
import { ErrorBoundary } from "react-error-boundary";

function App() {
    const { hideState } = useContext(AppContext);
    const { i18n } = useTranslation();
    const language = i18n.language;
    return (
        <ErrorBoundary fallbackRender={ErrorFallback}>
            <main className={["en", "es"].includes(language) ? "latin" : "cjk"}>
                <Announcement></Announcement>
                <Content></Content>
                {hideState === false && <Sidebar></Sidebar>}
            </main>
        </ErrorBoundary>
    );
}

function ErrorFallback({ error}) {
    return (
        <div className="center top-0-0 full-screen column latin">
            <img src="/img/error.png" />
            <h1>Something went wrong!</h1>
            <p className="bottom-10">An unexpected error has occured.</p>
            <pre className="error-message">{error.message}</pre>
            <a
                href="https://github.com/lezzthanthree/SIFAS-Dialogue-Sandbox/blob/master/README.md#report-an-issue"
                target="_blank"
            >
                Report this issue on GitHub.
            </a>
            <button></button>
        </div>
    );
}

export default App;
