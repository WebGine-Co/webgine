import ButtonModal from './buttonModal';
import { mdiGithub, mdiLinkedin  } from '@mdi/js';

interface ModalContactProps {
    classNameModal: string;
    links: string[];
}

export default function ModalContact({ classNameModal, links }: ModalContactProps) {
    function iconChoice(link: string) {
        switch (true) {
            case link.includes('github'):
                return mdiGithub;
            case link.includes('linkedin'):
                return mdiLinkedin;
            default:
                return '';
        }
    }

    function nameChoice(link: string) {
        switch (true) {
            case link.includes('github'):
                return 'GitHub';
            case link.includes('linkedin'):
                return 'Linkedin';
            default:
                return '';
        }
    }

    return (
        <>
            <label htmlFor={`my_modal_${classNameModal}`} className="btn">Réseaux</label>

            <input type="checkbox" id={`my_modal_${classNameModal}`} className="modal-toggle" />
            <div className="modal" role="dialog">
                <div className="modal-box">
                    <div className="flex justify-evenly">
                        {links.map((link, index) => (
                            <ButtonModal key={index} link={link} icon={iconChoice(link)} name={nameChoice(link)} />
                        ))}
                    </div>
                </div>
                <label className="modal-backdrop" htmlFor={`my_modal_${classNameModal}`}></label>
            </div>
        </>
    );
}