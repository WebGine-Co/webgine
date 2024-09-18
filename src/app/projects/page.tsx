import { Metadata } from "next";

export const metadata: Metadata = { title: "WebGine - Projets" };

import Projects from "./projects";

export default function Home() {

  return (
    <div className="w-full">
      <Projects />
    </div>
  );
}