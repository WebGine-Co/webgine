import Image from "next/image";

export default function Home() {

  return (
    <div className="md:px-20 px-10 flex-1 justify-center items-center flex animate-backgroundAppear"
        style={{
            backgroundImage: "url(/images/back_hero.webp)",
            backgroundSize: "cover",
            backgroundPosition: "center",
        }}
    >
      <Image src="/images/hero.svg" priority={true} width={1000} height={500} alt="hero" className="flex-1 w-full h-auto animate-heroAppear"/>
    </div>
  );
}