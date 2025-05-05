import AppRouter from "../routes/index";
import React from "react";
import "trustechreact-components/style.css";
import { NhostProvider } from "@nhost/react";
import { NhostApolloProvider } from "@nhost/react-apollo";
import { ApolloProvider } from "@apollo/client";
import nhost from "../conections/nhost";
import apolloClient from "../conections/apolloCLient";

export default function Root(props) {

  

  return (
    <div style={{display: "flex", height: "100vh", alignItems: "center", justifyContent: "center"}}>
      <React.StrictMode>
        <NhostProvider nhost={nhost}>
          <NhostApolloProvider nhost={nhost} >
            <AppRouter/>
          </NhostApolloProvider>
        </NhostProvider>
      </React.StrictMode>
    </div>
  );
}
