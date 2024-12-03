import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Accroche () {
    return (
        <div className="py-20">
            <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-center my-20 underline underline-offset-3 decoration-primary">Découvrez nos Services de Développement Discord</h1>
            
            <Image src="/images/development.png" alt="Automatisation" className="mx-auto my-10 w-2/3" width={500} height={500} />
            <p className="py-10">
                Transformez votre serveur Discord avec des solutions personnalisées et innovantes. 
                Chez WebGine, nous comprenons l&apos;importance d&apos;une communauté bien gérée et engageante. 
                C&apos;est pourquoi nous offrons des services de développement Discord de haute qualité pour répondre à tous vos besoins. 
                Que vous ayez besoin d&apos;un bot de modération, d&apos;intégrations API ou de fonctionnalités personnalisées, 
                nous avons les compétences et l&apos;expérience pour vous aider à atteindre vos objectifs.
            </p>
            <Link href="/services"><div className="btn">En savoir plus sur nos services</div></Link>
        </div>
    );
};