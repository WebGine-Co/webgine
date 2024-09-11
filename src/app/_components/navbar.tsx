import Link from "next/link";

export default function Navbar() {
    return (
        <div className="navbar bg-base-100">
            <div className="flex-1">
                <div className="btn btn-ghost text-xl"><Link href="/">Accueil</Link></div>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1">
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
                </ul>
            </div>
        </div>
    );
}