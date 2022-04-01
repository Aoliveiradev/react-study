import { render } from "react-dom";
import {BrowserRouter, Routes, Route,} from "react-router-dom";
import App from "./App";
const rootElement = document.getElementById("root");
render(
    <BrowserRouter>
        <Routes>
            <Route index element={<App />} />
            <Route path="editstudents" element={<EditStudents />} />
        </Routes>
    </BrowserRouter>,
    rootElement
);
