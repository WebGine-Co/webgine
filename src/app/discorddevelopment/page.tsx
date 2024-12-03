import { Metadata } from "next";
import Accroche from "./accroche";
import DevService from "./devservice";
import Functionnality from "./functionnality";
import Technologies from "./technologies";
import Processus from "./processus";
import Conclusion from "./conclusion";

export const metadata: Metadata = { title: "WebGine - Equipe" };

export default function Home() {

  return (
    <div className="w-full">
      <Accroche />

      <DevService />

      <Functionnality />

      <Technologies />

      <Processus />

      <Conclusion />
    </div>
  );
}