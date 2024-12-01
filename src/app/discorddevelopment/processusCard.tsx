interface ProcessusCardProps {
    number: string;
    name: string;
    description: string;
}

export default function ProcessusCard({ number, name, description }: ProcessusCardProps) {
    return (
        <div className="card bg-neutral text-neutral-content w-96 mx-auto">
            <div className="card-body items-center text-center">
                <h2 className="card-title">{number} - {name}</h2>
                <p>{description}</p>
            </div>
        </div>
    );
}