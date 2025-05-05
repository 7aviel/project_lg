import { Analytics } from "@vercel/analytics/react";
import Home from "./views/Home";

function App() {
  return (
    <>
      <Home />
      <Analytics />
    </>
  );
}

export default App;
