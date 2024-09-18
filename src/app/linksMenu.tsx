import Link from "next/link";

export default function LinksMenu() {
    return (
        <>
            <li><Link href="/contact">Nous contacter</Link></li>
            <li><Link href="/team">L'Equipe</Link></li>
            <li>
                <details>
                <summary>Parent</summary>
                <ul className="bg-base-100 rounded-t-none p-2">
                    <li><Link href="/services">Services</Link></li>
                    <li><Link href="/projects">Projets</Link></li>
                </ul>
                </details>
            </li>
        </>
    );
}