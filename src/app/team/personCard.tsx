import ModalContact from "./modalContact";

interface PersonCardProps {
    firstname: string;
    lastname: string;
    links: string[];
}

export default function PersonCard({ firstname, lastname, links }: PersonCardProps) {
    return (
        <div className="card bg-base-100 md:w-96 w-72 shadow-xl shadow-primary mx-auto">
            <figure className="my-2">
                <div className="avatar placeholder">
                    <div className="bg-neutral text-neutral-content w-24 rounded-full">
                        <span className="text-3xl">{ firstname[0] }</span>
                    </div>
                </div>
            </figure>
            <div className="card-body">
                <h2 className="card-title">{ firstname } { lastname }</h2>
                {/* <p>If a dog chews shoes whose shoes does he choose?</p> */}
                <div className="card-actions justify-end">
                    <ModalContact classNameModal={`${firstname}-${lastname}`} links={links} />
                </div>
            </div>
        </div>
    );
}