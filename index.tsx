import React, { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import App from "./App"

const rootElement = document.getElementById("app")
if (rootElement == null) throw new Error("No root element found")
const root = createRoot(rootElement)
root.render(
  <StrictMode>
    <App />
  </StrictMode>
)
