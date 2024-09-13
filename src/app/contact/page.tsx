import Navbar from "../_components/navbar";
import Image from "next/image";
import Contact from "./contact";

export default function Home() {

  return (
    <div className="2xl:mx-96 xl:mx-72 lg:mx-60 md:mx-36 sm:mx-20 mx-10 min-h-screen">
      <Navbar />
      <main>
        <Contact />
      </main>
    </div>
  );
}