import { Routes, Route, BrowserRouter } from "react-router-dom";

import HomeLayout from "../components/HomeLayout";
import ProtectedLayout from "../components/ProtectedLayout";

import Home from "./Home";
import Login from "./Login";
import Dashboard from "./Dashboard";
import Register from "./Register";
import TestCreate from "./TestCreate";
import QuestionCreate from "./QuestionCreate";
import TestView from "./TestView";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<HomeLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Route>

        <Route element={<ProtectedLayout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/testcreate" element={<TestCreate />} />\
          <Route path="/testview" element={<TestView/>} />
          <Route path="/questioncreate" element={<QuestionCreate />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
