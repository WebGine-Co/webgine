import PersonCard from "./personCard";

export default function Team() {
    return (
      <div className="py-20 grid gap-4 md:grid-cols-2 grid-cols-1">
        <PersonCard 
          number={1}
          firstname="Thibault" 
          lastname="Vercoutre" 
          links={["https://github.com/ThibaultVercoutre", "https://www.linkedin.com/in/thibault-vercoutre-5072b1226/"]}
          role="Co-fondateur"
          skills={[
            {name: "Full Stack Dev", color: "accent"},
            {name: "React", color: "secondary"},
            {name: "Node.js", color: "secondary"},
            {name: "Angular", color: "secondary"},
            {name: "NextJS", color: "secondary"},
            {name: "Symfony", color: "secondary"},
            {name: "Tailwind", color: "secondary"},
            {name: "Python", color: "primary"},
            {name: "HTML", color: "dafault"},
            {name: "CSS", color: "default"},
            {name: "JS", color: "default"},
            {name: "TS", color: "default"},
            {name: "PHP", color: "default"},
          ]} />

        <PersonCard 
          number={2}
          firstname="Julien" 
          lastname="Konieczny" 
          links={["https://github.com/julienk62", "https://www.linkedin.com/in/julienkonieczny/"]}
          role="Co-fondateur"
          skills={[
            {name: "Full Stack Dev", color: "accent"},
            {name: "React", color: "secondary"},
            {name: "Node.js", color: "secondary"},
            {name: "Angular", color: "secondary"},
            {name: "Python", color: "primary"},
            {name: "HTML", color: "dafault"},
            {name: "CSS", color: "default"},
            {name: "JS", color: "default"},
            {name: "TS", color: "default"},
            {name: "PHP", color: "default"},
          ]}/>

        {/* <PersonCard 
          number={2}
          firstname="Anthonia" 
          lastname="Vercoutre" 
          links={["https://www.linkedin.com/in/anthonia-vercoutre-214205254/"]}
          role="Secrétaire"
          skills={[
            {name: "Relation client", color: "accent"},
          ]}/> */}
      </div>
    );
  }