import { Metadata } from "next";
import Accroche from "./accroche";
import Services from "./services";
import Functionnality from "./functionnality";
import Processus from "./proccessus";
import Conclusion from "./conclusion";

export const metadata: Metadata = { title: "WebGine - Equipe" };

export default function Home() {

  return (
    <div className="w-full">
      <Accroche />

      <Services />

      <Functionnality />

      <Processus />

      <Conclusion />
    </div>
  );
}