import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Header from "./Component/Header";
import Hero from "./Component/Hero";

const App = () => {
  return (
    <>
      <Header />
      <Hero />
    </>
  );
};

export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
]);

export default App;
