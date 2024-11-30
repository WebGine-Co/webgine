import React from 'react';
import Link from 'next/link';

export default function Conclusion () {
    return (
        <div className="py-20">
            <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-center my-20 underline underline-offset-3 decoration-primary">Prêt à Transformer Votre Idée en Application Web ?</h1>
            <p className="pb-10">
                Ne laissez pas votre idée d'application web sans les outils dont elle a besoin pour prospérer. 
                Contactez-nous dès aujourd'hui pour discuter de votre projet et découvrir comment nous pouvons vous aider à atteindre vos objectifs.
            </p>
            <Link href="/contact"><div className="btn">Contactez nous dès aujourd'hui</div></Link>
        </div>
    );
};