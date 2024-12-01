import React from 'react';
import ProcessusCard from './processusCard';

export default function Processus () {
    return (
        <div className="py-20">
            <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-center my-20 underline underline-offset-3 decoration-primary">Notre Processus de Développement</h1>
            <p>
            Chez WebGine, nous suivons un processus de développement structuré pour garantir des résultats de haute qualité :
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 py-10">
                <ProcessusCard 
                    number= '1'
                    name="Consultation Initiale" 
                    description="Nous commençons par une consultation pour comprendre vos besoins et vos objectifs. Nous discutons de vos attentes et de vos exigences pour créer une solution sur mesure." 
                />
                <ProcessusCard 
                    number= '2'
                    name="Conception et Planification" 
                    description="Nous concevons et planifions votre projet en détail. Nous créons des maquettes, des plans de développement et des calendriers pour nous assurer que tout se déroule comme prévu." 
                />
                <ProcessusCard 
                    number= '3'
                    name="Développement et Tests" 
                    description="Nos développeurs travaillent sur la création de votre solution Discord. Nous effectuons des tests rigoureux pour nous assurer que tout fonctionne parfaitement avant le déploiement." 
                />
                <ProcessusCard 
                    number= '4'
                    name="Déploiement et Maintenance" 
                    description="Une fois le développement terminé, nous déployons votre solution sur votre serveur Discord. Nous offrons également des services de maintenance pour nous assurer que tout continue de fonctionner sans problème." 
                />
            </div>
        </div>
    );
};