import Project from "./project";

interface EventProps {
    place?: string;
    number: number;
    url: string;
    year: number;
    file: string;
}

export default function Event({ place, number, url, year, file }: EventProps) {
    return (
        <li>
            {place !== 'first' && <hr className="bg-primary"/>}
            <div className={number % 2 === 1 ? 'timeline-start timeline-box' : 'timeline-start lg:timeline-end timeline-box'}><Project url={url} file={file} /></div>
            <div className={number % 2 === 1 ? 'timeline-end timeline-box' : 'timeline-end lg:timeline-start timeline-box'}>{year}</div>
            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="text-primary h-5 w-5">
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd" />
              </svg>
            </div>
            {place !== 'last' && <hr className="bg-primary"/>}
        </li>
    );
}
