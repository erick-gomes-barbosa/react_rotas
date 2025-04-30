import AppRouter from "../routes/index";
import React from "react";
import "trustechreact-components/style.css"

export default function Root(props) {
  return (
    <div style={{height: "100vh"}}>
      <React.StrictMode>
        <AppRouter/>
      </React.StrictMode>
    </div>
  );
}
