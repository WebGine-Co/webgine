import Icon from '@mdi/react';

interface ModalContactProps {
    link: string;
    icon: string;
    name: string;
}

export default function ButtonModal({ link, icon, name }: ModalContactProps) {
    return (
        <a href={link} className="btn btn-square">
            <div className="indicator">
                <span className="indicator-item badge badge-accent">{name}</span>
                <div className="place-items-center">
                    <Icon path={icon} size={2} className='text-primary'/>
                </div>
            </div>
        </a>
    );
}