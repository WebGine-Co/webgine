import Services from "./services";
import { Metadata } from "next";
import Support from "./support";
import IdeaCard from "./ideaCard";

export const metadata: Metadata = { title: "WebGine - Services" };

export default function Home() {

  return (
    <div className="w-full">
      <Services />

      <IdeaCard 
        image="automatisation" 
        name="Développement d'Applications Web" 
        description="Transformez vos idées en applications web performantes et intuitives. Nous créons des solutions sur mesure, réactives et sécurisées, adaptées à vos besoins spécifiques." 
        link="/webdevelopment"
      />

      <IdeaCard 
        image="automatisation" 
        name="Développement Discord" 
        description="Améliorez votre serveur Discord avec des bots personnalisés, des intégrations API et des fonctionnalités avancées. Nous offrons des solutions de modération automatisée, des systèmes de réputation et bien plus encore." 
        link="/discorddevelopment"
      />

      <Support />
    </div>
  );
}