import React from 'react';
import IdeaCard from './ideaCard';

export default function Functionnality () {
    return (
      <div className="py-20">
        <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-center my-20 underline underline-offset-3 decoration-primary">Fonctionnalités Clés de Nos Solutions Discord</h1>
        
        <p>Nos solutions Discord sont conçues pour offrir des fonctionnalités avancées qui répondent à tous vos besoins :</p>

        <IdeaCard 
          image="automatisation" 
          name="Modération Automatisée" 
          description="Nos bots de modération automatisent la gestion des utilisateurs, les sanctions, et la surveillance des discussions pour maintenir un environnement sûr et respectueux." 
        />

        <IdeaCard 
          image="recompense" 
          name="Systèmes de Réputation et de Récompenses" 
          description="Encouragez l'engagement et la participation avec des systèmes de réputation et de récompenses personnalisés. Récompensez vos utilisateurs les plus actifs et fidèles." 
        />

        <IdeaCard 
          image="notification" 
          name="Notifications et Alertes" 
          description="Restez informé avec des notifications et des alertes en temps réel. Que ce soit pour des mises à jour importantes, des événements à venir ou des activités de modération, nos solutions vous tiennent toujours au courant." 
        />

        <IdeaCard 
          image="game" 
          name="Intégration avec des Jeux et des Applications" 
          description="Intégrez vos serveurs Discord avec des jeux et des applications pour offrir une expérience utilisateur enrichie. Que ce soit pour des notifications de jeu, des mises à jour d'application ou des interactions en temps réel, nous avons les solutions pour vous." 
        />
      </div>
    );
};