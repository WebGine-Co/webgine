import Event from "./event";

export default function Timeline() {

    const events = [
        { number: 1, place: 'first', url: 'denycodebillard.fr', year: 2024, file: 'denycodebillard.png' },
        { number: 2, place: 'middle', url: 'lespiedssurterrelille2.fr', year: 2024, file: 'lpst.webp' },
        { number: 3, place: 'last', url: 'recreo.fr', year: 2024, file: 'recreo.webp' }
    ];

    return (
        <ul className="timeline timeline-vertical">
        {events.map(event => (
            <Event
                key={event.number}
                number={event.number}
                place={event.place}
                url={event.url}
                year={event.year}
                file={event.file}
            />
        ))}
        </ul>
    );
  }