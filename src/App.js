import "./App.css";
import Login from "./Pages/Login";
import Home from "./Pages/Home";
import { Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";

function App() {
  const userToken = useSelector((state) => state.userSlice.userToken);
  return (
    <div className="App">
      <Routes>
        {userToken === null ? (
          <Route path="*" element={<Login />} />
        ) : (
          <Route path="*" element={<Home />} />
        )}
      </Routes>
    </div>
  );
}

export default App;
