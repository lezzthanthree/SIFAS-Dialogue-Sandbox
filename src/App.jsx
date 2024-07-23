import "./css/main.css";
import data from "./characters.json";

function App() {
    return (
        <main>
            <div id="content"></div>
            <div id="sidebar">
                <div className="group">
                    <h1 className="white">Text</h1>
                    <button className="btn-small w-100 setting">Edit Text</button>
                </div>
                <div className="group">
                    <h1 className="white">Name Tag</h1>
                    <button className="btn-small w-100 setting">Edit Text</button>
                </div>
            </div>
        </main>
    );
}

export default App;
