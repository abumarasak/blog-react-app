import Topbar from "./components/topbar/topbar";
import Home from "./pages/home/home";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Settings from "./pages/settings/Settings";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import { BrowserRouter as Router } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
function App() {
  const user = false;
  return (
    <Router>
      <Topbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/register" element={user ? <Home /> : <Register />} />
        <Route path="/settings" element={user ? <Settings /> : <Login />} />
        <Route path="/write" element={user ? <Write /> : <Login />} />
        <Route path="/post/:postId" element={<Single />} />
        <Route path="/login" element={user ? <Home /> : <Login />} />
      </Routes>
    </Router>
  );
}

export default App;
