import React from "react";

export default function NotFound() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        height: "80vh",
        justifyContent: "center",
        textAlign: "center"
      }}
    >
      <h1>
        {" "}
        <span className="red-text">404</span> Page Not Found
      </h1>
      <p>sorry, that pages does not exist</p>
    </div>
  );
}
