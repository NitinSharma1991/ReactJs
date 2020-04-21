import React from "react";
import ReactDom from "react-dom";

export default function PortalDemo() {
  return ReactDom.createPortal(
    <div
      style={{
        position: "absolute",
        top: "0",
        bottom: "0",
        left: "0",
        right: "0",
        display: "grid",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(0,0,0,0.3)",
      }}
    >
      <h1>This is Portal Demo</h1>
    </div>,
    document.getElementById("Portal-root")
  );
}
