import Event from "./event";

export default function Timeline() {

    return (
        <ul className="timeline timeline-vertical">
            <Event number={1} place="first" url='lespiedssurterrelille2.fr' year={2024} file='lpst'/>
            <Event number={2} place="last" url='recreo.fr' year={2024} file='recreo'/>
        </ul>
    );
  }