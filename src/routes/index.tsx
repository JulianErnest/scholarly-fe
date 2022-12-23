import { Routes, Route, BrowserRouter } from "react-router-dom";

import HomeLayout from "../components/HomeLayout";
import ProtectedLayout from "../components/ProtectedLayout";

import Home from "./Home";
import Login from "./Login";
import Dashboard from "./Dashboard";
import Register from "./Register";
import ShowQuestion from "./ShowQuestion";
import TestCreate from "./TestCreate";
import QuestionCreate from "./QuestionCreate";
import TestView from "./TestView";
import Admin from "./Admin";
import Items from "./Items";
import SubjectCreate from "./SubjectCreate";

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
          <Route path="/testcreate" element={<TestCreate />} />
          <Route path="/testview" element={<TestView />} />
          <Route path="/showquestion/:id" element={<ShowQuestion />} />
          <Route path="/testcreate" element={<TestCreate />} />
          <Route path="/questioncreate/:id" element={<QuestionCreate />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/tests" element={<QuestionCreate />} />
          <Route path="/items" element={<Items />} />
          <Route path="/subjectcreate" element={<SubjectCreate />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
