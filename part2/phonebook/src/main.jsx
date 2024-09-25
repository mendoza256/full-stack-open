import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import axios from "axios";

const promise = axios.get("http://localhost:3001/notes");
console.log("promise", promise);

const promise2 = axios.get("http://localhost:3001/persons");
console.log("promise2", promise2);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
