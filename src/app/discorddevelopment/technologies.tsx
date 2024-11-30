import React from 'react';

export default function Technologies () {
    return (
        <div className="py-20">
            <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-center my-20 underline underline-offset-3 decoration-primary">Technologies Utilisées</h1>
            <p>
            Pour offrir des solutions Discord de haute qualité, nous utilisons les technologies les plus avancées et les plus fiables :
            </p>
            <ul className="list-disc list-inside py-10 pl-10">
            <li><strong>Discord.js :</strong> Une bibliothèque puissante pour le développement de bots Discord en JavaScript.</li>
            <li><strong>Python :</strong> Un langage de programmation polyvalent utilisé pour des tâches complexes et des intégrations API.</li>
            <li><strong>Node.js :</strong> Un environnement d'exécution JavaScript côté serveur pour des applications évolutives et performantes.</li>
            </ul>
        </div>
    );
};