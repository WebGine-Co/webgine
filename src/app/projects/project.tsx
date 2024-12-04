import Image from 'next/image';

interface ProjectProps {
    url: string;
    file: string;
}

export default function Project({ url, file }: ProjectProps) {
    return (
        <div>
            <div className="mockup-browser bg-base-300 border">
                <div className="mockup-browser-toolbar">
                    <div className="input">{ url }</div>
                </div>
                <div className="bg-base-200 flex justify-center">
                    <Image src={`/project_images/${file}`} priority={true} width={1000} height={500} alt="hero" className="w-full h-auto"/>
                </div>
            </div>
            <div className="divider divider-success"></div>
            <h2 className="card-title"><a href={`https://` + url} className="link link-success">{ url }</a></h2>
        </div>
    );
}