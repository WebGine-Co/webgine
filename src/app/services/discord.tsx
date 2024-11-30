import Link from "next/link";

export default function Discord() {
    return (
      <div className="py-20">
        <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-center my-20 underline underline-offset-3 decoration-primary">Développement Discord</h1>
        <p className="pb-10">
          Améliorez votre serveur Discord avec des bots personnalisés, des intégrations API et des fonctionnalités avancées. 
          Nous offrons des solutions de modération automatisée, des systèmes de réputation et bien plus encore.
        </p>
        
        <Link href="/discorddevelopment"><div className="btn">Détails</div></Link>
      </div>
    );
  }