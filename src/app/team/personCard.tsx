import ModalContact from "./modalContact";

interface PersonCardProps {
    firstname: string;
    lastname: string;
    links: string[];
    skills: {name: string, color: string}[];
}

export default function PersonCard({ firstname, lastname, links, skills }: PersonCardProps) {
    return (
        <div className="card bg-base-100 md:w-96 w-72 shadow-xl shadow-primary mx-auto">
            <figure className="py-4">
                <div className="indicator">
                    <span className="indicator-item badge badge-accent indicator-bottom indicator-end">Co-fondateur</span>
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
                        <span key={index} className={`badge badge-outline badge-${skill.color}`}>{ skill.name }</span>
                    )) }
                </p>
                {/* <p>If a dog chews shoes whose shoes does he choose?</p> */}
                <div className="card-actions justify-end">
                    <ModalContact classNameModal={`${firstname}-${lastname}`} links={links} />
                </div>
            </div>
        </div>
    );
}