import Image from 'next/image';

interface IdeaCardrops {
  image: string;
  name: string;
  description: string;
}

export default function IdeaCard({ image, name, description }: IdeaCardrops) {

  return (
    <>
      <Image src={`/images/${image}.png`} alt="Automatisation" className="mx-auto my-10 w-2/3" width={500} height={500} />
      <h2 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-semibold my-5 text-center">{name}</h2>
      <p className="pb-10">
      {description}
      </p>
    </>
  );
}