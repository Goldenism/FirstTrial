import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App/App";
import First from "./First/First";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
    <First />
  </StrictMode>
);
