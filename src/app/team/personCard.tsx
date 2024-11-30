import ModalContact from "./modalContact";

interface PersonCardProps {
    number: number;
    firstname: string;
    lastname: string;
    links: string[];
    skills: {name: string, color: string}[];
    role: string;
}

export default function PersonCard({ number, firstname, lastname, links, skills, role }: PersonCardProps) {
    return (
        <div className={`mb-10 card bg-base-100 md:w-96 w-72 shadow-xl shadow-primary mx-auto animate-contactAppear transition delay-${100*(number - 1)}`}>
            <figure className="py-4">
                <div className="indicator">
                    <span className="indicator-item badge badge-accent indicator-bottom indicator-end">{ role }</span>
                    <div className="place-items-center">
                        <div className="avatar placeholder">
                            <div className="bg-neutral text-neutral-content w-24 rounded-full">
                                <span className="text-3xl">{ firstname[0] }</span>
                            </div>
                        </div>
                    </div>
                </div>
            </figure>
            <div className="card-body">
                <h2 className="card-title">{ firstname } { lastname }</h2>
                <p>
                    { skills.map((skill, index) => (
                        <span key={index} className={`m-1 badge badge-outline badge-${skill.color}`}>{ skill.name }</span>
                    )) }
                </p>
                <div className="card-actions justify-end">
                    <ModalContact classNameModal={`${firstname}-${lastname}`} links={links} />
                </div>
            </div>
        </div>
    );
}