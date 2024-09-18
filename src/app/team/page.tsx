import Team from "./team";
import { Metadata } from "next";

export const metadata: Metadata = { title: "WebGine - Equipe" };

export default function Home() {

  return (
    <div className="w-full">
      <Team />
    </div>
  );
}