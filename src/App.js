import "./App.css";
import Sidebar from "./components/sidebar";
import Feed from "./components/Feed";

function App() {
  return (
    <div className="app">
      {/**SIDEBAR*/}
      <Sidebar />
      {/**FEED */}
      <Feed />
      {/**Widget */}
    </div>
  );
}

export default App;
