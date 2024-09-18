import ButtonModal from './buttonModal';
import { mdiGithub, mdiLinkedin  } from '@mdi/js';

interface ModalContactProps {
    classNameModal: string;
    links: string[];
}

export default function ModalContact({ classNameModal, links }: ModalContactProps) {
    return (
        <>
            <label htmlFor={`my_modal_${classNameModal}`} className="btn">Réseaux</label>

            <input type="checkbox" id={`my_modal_${classNameModal}`} className="modal-toggle" />
            <div className="modal" role="dialog">
                <div className="modal-box">
                    {/* <h3 className="text-lg font-bold">Hello!</h3> */}
                    <div className="flex justify-evenly">
                        <ButtonModal link={links[0]} icon={mdiGithub} name="GitHub"/>
                        <ButtonModal link={links[1]} icon={mdiLinkedin}  name="Linkedin"/>
                    </div>
                </div>
                <label className="modal-backdrop" htmlFor={`my_modal_${classNameModal}`}></label>
            </div>
        </>
    );
}