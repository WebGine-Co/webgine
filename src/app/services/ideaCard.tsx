import Link from "next/link";
import Image from 'next/image';

interface IdeaCardrops {
  image: string;
  name: string;
  description: string;
  link: string;
}

export default function IdeaCard({ image, name, description, link }: IdeaCardrops) {

  return (
      <div className="py-20">
        <Image src={`/images/${image}.png`} alt="Automatisation" className="mx-auto my-10 w-2/3" width={500} height={500} />
        <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-center my-20 underline underline-offset-3 decoration-primary">{name}</h1>
        <p className="pb-10">{description}</p>
        
        <Link href={link}><div className="btn">Détails</div></Link>
      </div>
  );
}