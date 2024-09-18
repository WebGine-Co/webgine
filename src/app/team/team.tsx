import PersonCard from "./personCard";

export default function Team() {
    return (
      <div className="py-20 grid gap-4 md:grid-cols-2 grid-cols-1">
        <PersonCard firstname="Thibault" lastname="Vercoutre" links={["https://github.com/ThibaultVercoutre", "https://www.linkedin.com/in/thibault-vercoutre-5072b1226/"]} />
        <PersonCard firstname="Julien" lastname="Konieczny" links={["https://github.com/julienk62", "https://www.linkedin.com/in/julienkonieczny/"]}/>
      </div>
    );
  }