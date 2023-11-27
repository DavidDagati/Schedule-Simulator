import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Simulator from "./pages/Simulator";
import Results from "./pages/Results";

export default function App() {

  const programLoader = async () => {
    const res = await fetch('http://localhost:8000/program')

    return res.json()
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
          <Route loader={programLoader} path="simulate" element={<Simulator />} />
          <Route path="results" element={<Results />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}