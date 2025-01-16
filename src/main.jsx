import React from "react";
import ReactDOM from "react-dom/client";  // Correct import path for ReactDOM
import './index.css';  // Make sure this file exists and is imported
import App from "./App";  // Import App component

const root = document.getElementById("root");  // Get root element in HTML

ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <App />  {/* No need for BrowserRouter here, since it's already in App.jsx */}
  </React.StrictMode>
);
