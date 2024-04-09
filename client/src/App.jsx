import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Connections from "./pages/Connections";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Profile from "./pages/Profile";
import Chat from "./pages/Chat/Chat";
// import Project from "./pages/Projects"
import Header from "./components/Header";
import Gate from "./components/Gate";
// import Footer from "./components/Footer";

const App = () => {
  return (
    <BrowserRouter>
      <Gate>
        <Header />
      </Gate>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/connections" element={<Connections />} />
        <Route path="/home" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/chat" element={<Chat />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
