import "./stylesheets/App.css";
import Sidebar from "./components/Sidebar";
import Middle from "./components/Middle";
import RightSide from "./components/RightSide";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Explore from "./components/Explore";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route
            path="/explore"
            element={
              <>
                <Sidebar />
                <Explore />
                <RightSide explore />
              </>
            }
          />
          <Route
            path="/"
            element={
              <>
                <Sidebar />
                <Middle page="Home" />
                <RightSide />
              </>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
