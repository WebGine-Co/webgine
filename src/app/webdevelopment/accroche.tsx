import Link from "next/link";

export default function Accroche() {

  return (
    <div className="py-20">
        <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-center my-20 underline underline-offset-3 decoration-primary">Transformez Votre Vision en Réalité avec Nos Services de Développement d'Applications Web</h1>
        
        <img src="/images/web.png" alt="Automatisation" className="mx-auto my-10 w-2/3" />
        <p className="pb-10">
            Chez WebGine, nous transformons vos idées en applications web performantes et innovantes. 
            Que vous ayez besoin d'une application web pour votre entreprise, d'une plateforme e-commerce ou d'une solution personnalisée, 
            notre équipe d'experts est là pour vous accompagner à chaque étape du processus. 
            Découvrez comment nous pouvons vous aider à atteindre vos objectifs et à offrir une expérience utilisateur exceptionnelle.
        </p>
        <p className="pb-10 italic text-center">De l'idée à la réalité : construisons ensemble votre solution web parfaite.</p>
        <Link href="/contact"><div className="btn">En savoir plus sur nos services</div></Link>
    </div>
  );
}