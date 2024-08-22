import React from "react"
import Home from "./home/Home"
import Courses from "./Courses/Courses"
import { Navigate, Route, Routes } from "react-router-dom"
import Mysignup from "./Component/Mysignup"
import{ Toaster } from 'react-hot-toast';
import { useAuth } from "./context/AuthProvider";
import About from "./Component/About"
import Contact from "./Component/Contact"

function App() {
  const [authUser, setAuthUser] = useAuth();
console.log(authUser);
  return (
    <>
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/course" 
      element={authUser ? <Courses /> : <Navigate to="/Mysignup" />}/>
      <Route path="/Mysignup" element={<Mysignup />}/>
      <Route path="/about" element={<About />} />
       <Route path="/contact" element={<Contact />} />
      
    </Routes>
    <Toaster/>
    </>
  )
}

export default App
