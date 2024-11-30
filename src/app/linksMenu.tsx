import Link from "next/link";

export default function LinksMenu() {
    return (
        <>
            <li><Link href="/contact">Nous contacter</Link></li>
            <li><Link href="/team">L'Equipe</Link></li>
            <li>
                <details>
                <summary>Nos actions</summary>
                <ul className="bg-base-100 rounded-t-none p-2">
                    <li><Link href="/services">Services</Link></li>
                    <li><Link href="/projects">Projets</Link></li>
                    <li><Link href="/webdevelopment">Développement web</Link></li>
                    <li><Link href="/discorddevelopment">Développement discord</Link></li>
                </ul>
                </details>
            </li>
        </>
    );
}