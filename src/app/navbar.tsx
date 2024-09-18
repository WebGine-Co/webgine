import Link from "next/link";
import MenuSwap from "./menuSwap";
import MenuNoSwap from "./menuNoSwap";

export default function Navbar() {
    return (
        <nav className="sticky top-0 pt-5 z-50 w-full">
            <div className="navbar bg-base-100 shadow-lg shadow-primary/50 rounded-md border border-primary">
                <div className="flex-1">
                    <Link href="/"><div className="btn btn-ghost text-xl">Accueil</div></Link>
                </div>
                <MenuNoSwap />
                <MenuSwap />
            </div>
        </nav>
    );
}