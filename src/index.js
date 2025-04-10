import React from "react";
import ReactDOM from "react-dom/client"; // Use `react-dom/client` for React 18
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import "./styles/global.css";

const root = ReactDOM.createRoot(document.getElementById("root")); // Create root using React 18

root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
