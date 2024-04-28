import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Router from "./routes/Router";
import AuthProvider from "./provider/AuthProvider";
import ContentProvider from "./provider/ContentProvider";


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <ContentProvider>
        <RouterProvider router={Router} />
      </ContentProvider>
    </AuthProvider>
  </React.StrictMode>
); 
