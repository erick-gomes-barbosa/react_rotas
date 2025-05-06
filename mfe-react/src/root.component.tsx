import AppRouter from "./routes/index";
import React from "react";
import "trustechreact-components/style.css";
import { NhostProvider } from "@nhost/react";
import { NhostApolloProvider } from "@nhost/react-apollo";
import { ApolloProvider } from "@apollo/client";
import {nhost} from "./utils/nhost";
import { apolloClient } from "./utils/apolloCLient";

export default function Root(props) {
  return (
    <div style={{display: "flex", height: "100vh", alignItems: "center", justifyContent: "center"}}>
      <React.StrictMode>
        <NhostApolloProvider nhost={nhost} headers={{"x-hasura-role": "user"}}>
          <NhostProvider nhost={nhost} >
            <AppRouter/>
          </NhostProvider>
        </NhostApolloProvider>
      </React.StrictMode>
    </div>
  );
}
