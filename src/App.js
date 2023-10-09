// App.js
import React from "react";
import Layout from "./Hoc/Layout/Layout";
import { PrimeReactProvider, PrimeReactContext } from "primereact/api";

function App() {
  return (
    <PrimeReactProvider>
      <Layout />
    </PrimeReactProvider>
  );
}

export default App;
