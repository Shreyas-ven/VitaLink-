import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import HospitalRegister from "./pages/HospitalRegister";
import HospitalLogin from "./pages/HospitalLogin";
import HospitalDashboard from "./pages/HospitalDashboard";
import PostOrgan from "./pages/PostOrgan";
import AvailableOrgans from "./pages/AvailableOrgans";
import RequestOrgan from "./pages/RequestOrgan";

function App() {
  return (

    <BrowserRouter>

      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/register" element={<HospitalRegister />} />

        <Route path="/login" element={<HospitalLogin />} />

        <Route path="/dashboard" element={<HospitalDashboard />}/>

        <Route path="/organ/post" element={<PostOrgan />} />

        <Route path="/available-organs" element={<AvailableOrgans />}/>

        <Route path="/request-organ" element={<RequestOrgan />}/>
      </Routes>

    </BrowserRouter>

  );
}

export default App;