import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="sticky top-0 pt-5">
            <div className="navbar bg-base-100 shadow-lg shadow-blue-500/50 rounded-md">
                <div className="flex-1">
                    <div className="btn btn-ghost text-xl"><Link href="/">Accueil</Link></div>
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal px-1">
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
                    </ul>
                </div>
            </div>
        </nav>
    );
}