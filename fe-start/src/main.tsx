import React from "react";
import { createRoot } from "react-dom/client";

const Jst = () => {
  return (
    <>
      <h1>Hlo</h1>
    </>
  );
};

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Jst />
  </React.StrictMode>
);
