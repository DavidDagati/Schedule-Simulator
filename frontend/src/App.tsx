import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
// import Signup from "./pages/Signup";
import Simulator from "./pages/Simulator";
import Results from "./pages/Results";
import Admin from "./pages/Admin";

export default function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          {/* <Route path="signup" element={<Signup />} /> */}
          <Route path="simulate" element={<Simulator />} />
          <Route path="results" element={<Results />} />
          <Route path="admin" element={<Admin />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}