import Link from "next/link";

export default function Web() {
    return (
      <div className="py-20">
        <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-center my-20 underline underline-offset-3 decoration-primary">Développement d'Applications Web</h1>
        <p className="pb-10">
          Transformez vos idées en applications web performantes et intuitives. Nous créons des solutions sur mesure, réactives et sécurisées, adaptées à vos besoins spécifiques.
        </p>
        
        <Link href="/webdevelopment"><div className="btn">Détails</div></Link>
      </div>
    );
  }