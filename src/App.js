import "./App.css";
import Sidebar from "./components/sidebar";
import Feed from "./components/Feed";
import Widget from "./components/Widget"

function App() {
    return (
        <div className="app">
            <Sidebar/>
            <Feed/>
            <Widget/>
        </div>
    );
}

export default App;
