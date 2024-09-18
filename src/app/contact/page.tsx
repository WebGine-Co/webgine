import Contact from "./contact";
import { Metadata } from "next";

export const metadata: Metadata = { title: "WebGine - Contact" };

export default function Home() {

  return (
    <div className="w-full">
      <Contact />
    </div>
  );
}