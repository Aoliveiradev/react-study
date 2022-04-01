import * as React from 'react';
import Students from "./pages/students-page/students";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import LoginPage from "./pages/login-page/login-page";
import EditStudents from "./pages/edit-pages/edit-students-page/edit-students-page";

export default function App() {
    return <BrowserRouter>
            <Routes>
                <Route path="/" element={<LoginPage />} />
                <Route path="students" element={<Students />} />
                <Route path="students/:id/edit" element={<EditStudents />} />
            </Routes>
        </BrowserRouter>;
}