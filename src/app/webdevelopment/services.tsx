import IdeaCard from "./ideaCard";

export default function Services() {

  return (
    <div className="py-20">
        <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-center my-20 underline underline-offset-3 decoration-primary">Nos Services de Développement d'Applications Web</h1>
        <p className="pb-10">
          Nous offrons une gamme complète de services pour répondre à tous vos besoins en développement d'applications web :
        </p>

        <IdeaCard 
          image="surmesure" 
          name="Développement sur Mesure" 
          description="Nous créons des applications web personnalisées qui répondent parfaitement à vos exigences spécifiques. Que vous ayez besoin d'une application de gestion, d'un portail client ou d'une plateforme de réservation, nous avons la solution pour vous." 
        />

        <IdeaCard 
          image="ecommerce" 
          name="Développement E-commerce" 
          description="Nous développons des plateformes e-commerce robustes et sécurisées pour booster vos ventes en ligne. Intégrez des fonctionnalités avancées comme la gestion des stocks, les paiements en ligne et les programmes de fidélité." 
        />

        <IdeaCard 
          image="vitesse" 
          name="Applications Web Réactives" 
          description="Nous concevons des applications web réactives qui offrent une expérience utilisateur fluide sur tous les appareils, des ordinateurs de bureau aux smartphones." 
        />
        
        <IdeaCard 
          image="maintenance" 
          name="Maintenance et Support" 
          description="Nous offrons des services de maintenance et de support pour garantir que votre application web fonctionne toujours de manière optimale." 
        />
    </div>
  );
}