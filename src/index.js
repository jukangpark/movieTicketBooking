import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./HomePage";
import Page1 from "./Page1";
import Page2 from "./Page2";
import { RecoilRoot } from "recoil";

const router = createBrowserRouter([
  { path: "/", element: <HomePage /> },
  { path: "/page1", element: <Page1 /> },
  { path: "/page2", element: <Page2 /> },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <RecoilRoot>
    <RouterProvider router={router} />
  </RecoilRoot>
);
