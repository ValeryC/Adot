import React from "react";
import ReactDOM from "react-dom/client";
import HomePage from "./pages/HomePage";
import NiceModal from "@ebay/nice-modal-react";
import { DestinationContext } from "./context/DataContext";
import { DarkModeProvider } from "./context/DarkModeContext";
import reportWebVitals from "./reportWebVitals";
import "./index.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <DarkModeProvider>
      <DestinationContext>
        <NiceModal.Provider>
          <HomePage />
        </NiceModal.Provider>
      </DestinationContext>
    </DarkModeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
