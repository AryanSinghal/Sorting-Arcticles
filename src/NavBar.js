import React from "react";
import { useKeycloak } from "@react-keycloak/web";

const Nav = () => {
  const { keycloak } = useKeycloak();
  return (
    <div className="hover:text-gray-200">
      <div align="center">
        {!keycloak.authenticated && (
          <button
            type="button"
            className="text-blue-800"
            onClick={() => keycloak.login()}
          >
            Login
          </button>
        )}
      </div>
      <div align="right">
        {!!keycloak.authenticated && (
          <button
            type="button"
            className="text-blue-800"
            onClick={() => keycloak.logout()}
          >
            Logout ({keycloak.tokenParsed.preferred_username})
          </button>
        )}
      </div>
    </div >
  );
};

export default Nav;