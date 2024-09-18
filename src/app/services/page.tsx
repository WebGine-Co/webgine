import Services from "./services";
import { Metadata } from "next";

export const metadata: Metadata = { title: "WebGine - Services" };

export default function Home() {

  return (
    <div className="w-full">
      <Services />
    </div>
  );
}