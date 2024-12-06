import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import router from "./router.jsx";
import { MantineProvider } from "@mantine/core";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "@mantine/core/styles.css";
import "@mantine/notifications/styles.css";
import "@mantine/dates/styles.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { Notifications } from "@mantine/notifications";
import "./i18n.ts";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <MantineProvider
      withGlobalStyles
      withNormalizeCSS
      theme={{
        colors: {
          green: [
            "#2cff0e", // Green[0] – Lightest shade
            "#2cff0e", // Green[1]
            "#2cff0e", // Green[2]
            "#2cff0e", // Green[3]
            "#2cff0e", // Green[4] – Default `filled` background
            "#2cff0e", // Green[5]
            "#2cff0e", // Green[6]
            "#2cff0e", // Green[7]
            "#2cff0e", // Green[8]
            "#2cff0e", // Green[9] – Darkest shade
          ],
        },
        components: {
          Notification: {
            // eslint-disable-next-line no-unused-vars
            styles: (theme) => ({
              root: {
                backgroundColor: "#141517", // Custom background color for all notifications
                color: "#2cff0e", // Custom text color
                borderRadius: "10px",
              },
            }),
          },
        },
      }}
    >
      <Notifications position="top-right" />
        <BrowserRouter>
          <Routes>
            {router.map((route, index) => (
              <Route key={index} path={route.path} element={route.element}>
                {route.children &&
                  route.children.map((childRoute, childIndex) => (
                    <Route
                      key={childIndex}
                      path={childRoute.path}
                      element={childRoute.element}
                    />
                  ))}
              </Route>
            ))}
          </Routes>
        </BrowserRouter>
        <ToastContainer />
    </MantineProvider>
  </React.StrictMode>
);
