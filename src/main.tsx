import React from "react";
import ReactDOM from "react-dom/client";
import { ToastContainer } from "react-toastify";

import AppNavigation from "./routes";
import "react-toastify/dist/ReactToastify.css";
import "./index.css";
import UserProvider from "./context/UserContext";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <UserProvider>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <AppNavigation />
    </UserProvider>
  </React.StrictMode>
);
