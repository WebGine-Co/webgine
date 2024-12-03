import Image from 'next/image';

export default function Services() {
    return (
      <div className="py-20">
        <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-center my-20 underline underline-offset-3 decoration-primary">Nos Services</h1>
        <Image src="/images/service.png" alt="Automatisation" className="mx-auto my-10 w-2/3" width={500} height={300} />
        <p>
          Chez WebGine, nous offrons une gamme complète de services de développement pour répondre à tous vos besoins numériques. 
          Que vous ayez besoin d&apos;une application web sur mesure, d&apos;une plateforme e-commerce robuste, ou d&apos;une solution Discord personnalisée, 
          notre équipe d&apos;experts est là pour vous accompagner à chaque étape du processus.
        </p>
      </div>
    );
  }