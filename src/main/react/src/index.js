import { render } from "react-dom";
import {BrowserRouter, Routes, Route,} from "react-router-dom";
import App from "./App";
import EditStudents from "./pages/edit-pages/edit-students-page/edit-students-page";
import LoginPage from "./pages/login-page/login-page";
const rootElement = document.getElementById("root");

render(
    <BrowserRouter>
        <Routes>
            <Route path={'/'} element={<LoginPage />} />
            <Route path='students' element={<App />} />
            <Route path="students/1/edit" element={<EditStudents />} />
        </Routes>
    </BrowserRouter>,
    rootElement
);
