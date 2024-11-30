import React from 'react';
import Link from 'next/link';
import Icon from '@mdi/react';
import { mdiRobotExcitedOutline, mdiServerSecurity, mdiDrawPen, mdiVectorLink  } from '@mdi/js';

export default function DevService () {
    return (
        <div className="py-20">
          <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-center my-20 underline underline-offset-3 decoration-primary">Nos Services de Développement Discord</h1>
          <p className="py-10">Chez WebGine, nous proposons une gamme complète de services pour améliorer votre expérience Discord :</p>

          <h2 className="text-base md:text-lg lg:text-xl xl:text-2xl font-bold text-center mt-20">Création de Bots Discord : </h2>
          <Icon path={mdiRobotExcitedOutline} size={5} className="mx-auto my-5"/>
          <p>
            Nos développeurs créent des bots sur mesure pour automatiser des tâches, modérer des serveurs, et bien plus encore. 
            Que vous ayez besoin d'un bot de modération, d'un bot de jeu ou d'un bot de gestion de communauté, nous avons la solution pour vous.
          </p>

          <h2 className="text-base md:text-lg lg:text-xl xl:text-2xl font-bold text-center mt-20">Intégrations API : </h2>
          <Icon path={mdiVectorLink} size={5} className="mx-auto my-5"/>
          <p>
            Nous intégrons vos serveurs Discord avec d'autres services et plateformes pour une expérience utilisateur fluide et cohérente. 
            Que ce soit pour des notifications, des mises à jour en temps réel ou des interactions avec d'autres applications, nous avons les compétences nécessaires.
          </p>

          <h2 className="text-base md:text-lg lg:text-xl xl:text-2xl font-bold text-center mt-20">Configuration de Serveurs : </h2>
          <Icon path={mdiServerSecurity} size={5} className="mx-auto my-5"/>
          <p>
            Nous configurons et gérons vos serveurs Discord pour qu'ils soient optimisés et sécurisés. 
            Nous nous assurons que votre serveur est prêt à accueillir votre communauté avec des fonctionnalités avancées et une modération efficace.
          </p>

          <h2 className="text-base md:text-lg lg:text-xl xl:text-2xl font-bold text-center mt-20">Personnalisation : </h2>
          <Icon path={mdiDrawPen} size={5} className="mx-auto my-5"/>
          <p  className="pb-10">
            Nous créons des commandes personnalisées, des systèmes de réputation, et bien plus encore pour rendre votre serveur unique et engageant. 
            Chaque communauté est différente, et nous nous assurons que votre serveur reflète parfaitement vos besoins et vos valeurs.
          </p>
          <Link href="/contact"><div className="btn">Contactez nous pour discuter de vos besoins</div></Link>
        </div>
    );
};