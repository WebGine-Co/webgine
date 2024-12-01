import IdeaCard from "./ideaCard";

export default function Functionnality() {

  return (
    <div className="py-20">
      <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-center my-20 underline underline-offset-3 decoration-primary">Fonctionnalités Clés de Nos Applications Web</h1>
      <p className="pb-10">
        Nos applications web sont conçues pour offrir des fonctionnalités avancées qui répondent à tous vos besoins :
      </p>

      <div>
        <IdeaCard 
          image="intuitif" 
          name="Interface Utilisateur Intuitive" 
          description="Nous créons des interfaces utilisateur intuitives et attrayantes pour une expérience utilisateur optimale." 
        />

        <IdeaCard 
          image="balance" 
          name="Performance et Sécurité" 
          description="Nos applications web sont optimisées pour la performance et la sécurité, garantissant une expérience utilisateur fluide et sécurisée." 
        />

        <IdeaCard 
          image="interconnectivite" 
          name="Intégration avec des Services Tiers" 
          description="Nous intégrons vos applications web avec des services tiers comme les passerelles de paiement, les systèmes CRM et les plateformes de marketing." 
        />
        
        <IdeaCard 
          image="scalable" 
          name="Scalabilité" 
          description="Nos solutions sont conçues pour être évolutives, permettant à votre application web de croître avec votre entreprise." 
        />
      </div>
    </div>
  );
}