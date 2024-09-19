import PersonCard from "./personCard";

export default function Team() {
    return (
      <div className="py-20 grid gap-4 md:grid-cols-2 grid-cols-1">
        <PersonCard 
          number={1}
          firstname="Thibault" 
          lastname="Vercoutre" 
          links={["https://github.com/ThibaultVercoutre", "https://www.linkedin.com/in/thibault-vercoutre-5072b1226/"]}
          skills={[
            {name: "Full Stack Dev", color: "accent"},
            {name: "React", color: "secondary"},
            {name: "Node.js", color: "secondary"},
            {name: "Angular", color: "secondary"},
            {name: "NextJS", color: "secondary"},
            {name: "Symfony", color: "secondary"},
            {name: "Python", color: "primary"},
          ]} />

        <PersonCard 
          number={2}
          firstname="Julien" 
          lastname="Konieczny" 
          links={["https://github.com/julienk62", "https://www.linkedin.com/in/julienkonieczny/"]}
          skills={[
            {name: "Full Stack Dev", color: "accent"},
            {name: "React", color: "secondary"},
            {name: "Node.js", color: "secondary"},
            {name: "Angular", color: "secondary"},
            {name: "Symfony", color: "secondary"},
            {name: "Python", color: "primary"},
          ]}/>
      </div>
    );
  }