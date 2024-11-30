import React from 'react';

export default function Processus () {
    return (
        <div className="py-20">
            <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-center my-20 underline underline-offset-3 decoration-primary">Notre Processus de Développement</h1>
            <p>
            Chez WebGine, nous suivons un processus de développement structuré pour garantir des résultats de haute qualité :
            </p>
            <ul className="list-disc list-inside py-10 pl-10">
                <li><strong>Consultation Initiale :</strong> Nous commençons par une consultation pour comprendre vos besoins et vos objectifs. Nous discutons de vos attentes et de vos exigences pour créer une solution sur mesure.</li>
                <li><strong>Conception et Planification :</strong> Nous concevons et planifions votre projet en détail. Nous créons des maquettes, des plans de développement et des calendriers pour nous assurer que tout se déroule comme prévu.</li>
                <li><strong>Développement et Tests :</strong> Nos développeurs travaillent sur la création de votre solution Discord. Nous effectuons des tests rigoureux pour nous assurer que tout fonctionne parfaitement avant le déploiement.</li>
                <li><strong>Déploiement et Maintenance :</strong> Une fois le développement terminé, nous déployons votre solution sur votre serveur Discord. Nous offrons également des services de maintenance pour nous assurer que tout continue de fonctionner sans problème.</li>
            </ul>
        </div>
    );
};