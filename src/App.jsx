import React from "react";
import "./App.css";
import "h8k-components";

import { ReactKeycloakProvider } from "@react-keycloak/web";
import keycloak from "./Keycloak";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppArticles from "./components/AppArticles";
import PrivateRoute from "./PrivateRoute";
import Nav from "./NavBar";

function App(props) {
  return (
    <ReactKeycloakProvider authClient={keycloak}>
      <Nav />
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <PrivateRoute>
                <AppArticles {...props} />
              </PrivateRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </ReactKeycloakProvider>
  );
}

export default App;
