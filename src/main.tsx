import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./assets/styles/index.css";
import { QueryProvider } from "./providers/QueryProvider.tsx";
import { BrowserRouter as Router } from "react-router-dom";
import { Toaster } from "./components/ui/toaster.tsx";
import { ModalProvider } from "./providers/ModalProvider.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryProvider>
      <Router>
        {/* 모달 전역 사용 */}
        <ModalProvider>
          {/* Toast 전역 사용 */}
          <Toaster />
          <App />
        </ModalProvider>
      </Router>
    </QueryProvider>
  </React.StrictMode>,
);
