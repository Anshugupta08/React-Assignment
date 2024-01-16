// import React from "react";
import ReactDOM from "react-dom/client";
// import MyForm from "./Data1";
// import ClassComponentForm from "./Data3.jsx";
// import App from "./App.jsx";
// import App from './App.jsx'
// import './index.css'
// import LoginData from "./Data.jsx";

// import MYForm from "./assignment/login01.jsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ToDolist from "./assignment2/todo.jsx";
ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <ToDolist />
    <ToastContainer />
  </>
);
