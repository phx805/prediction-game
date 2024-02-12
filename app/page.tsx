import Picks from "./componets/Picks";
import Landing from "./componets/Landing";
import Header from "./componets/Header";

import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

export default function Home() {
  return (
    <>
      <Header />
      <div className="md:grid md:grid-flow-col w-full h-full">
        <Landing />
        <Picks />
      </div>
      <ToastContainer position="top-right" />
    </>
  );
}
