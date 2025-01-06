import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddRoute from "./component/AddRoute";
import UpdateRoute from "./component/UpdateRoute";
import Header from "./component/header";
import Signup from "./pages/Signup";
import Navbar from "./component/Navbar";
import Signin from "./pages/Signin";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <BrowserRouter>
      <div className="bg-black min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-grow flex-1">
          <Routes>
            <Route path="/" element={<Header />} />
            <Route path="/AddRoute" element={<AddRoute />} />
            <Route path="/UpdateRoute" element={<UpdateRoute />} />
            <Route path="/signin" element={<Signin />} />
            <Route path="/Signup" element={<Signup />} />
            <Route path="/Dashboard" element={<Dashboard />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
