import Services from "./services";
import { Metadata } from "next";
import Web from "./web";
import Discord from "./discord";
import Support from "./support";

export const metadata: Metadata = { title: "WebGine - Services" };

export default function Home() {

  return (
    <div className="w-full">
      <Services />

      <Web />

      <Discord />

      <Support />
    </div>
  );
}